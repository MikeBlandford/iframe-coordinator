pipeline {
  agent { label 'dev_mesos' }

  environment {
    NPM_UTIL_PATH = "npm-utils"
    REPO_DIR = "repo"
    SHORT_BRANCH = env.GIT_BRANCH.replaceFirst(/^origin\//, '');
  }

  tools {
    nodejs 'NodeJS 10.15.3'
  }

  stages {
    stage('Prep') {
      steps {
        deleteDir()
        dir(env.REPO_DIR) {
          echo "Building Branch: ${env.GIT_BRANCH}"
          checkout scm
          sh "npm ci"
        }
      }
    }

    stage('Build') {
      steps {
        dir(env.REPO_DIR) {
          sh "npm run release"
          sh "npm run build"
        }
      }
    }

    stage('Publish Library') {
      steps {
        dir(env.REPO_DIR) {
          withCredentials([string(credentialsId: '2844c47b-19b8-4c5f-b901-190de49c0883', variable: 'NPM_AUTH_TOKEN')]) {
            sh '''
                echo "registry=https://registry.npmjs.org
                //registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}" > ./.npmrc
            '''
            sh "npm publish"
            sh "git restore .npmrc"
            // Make a local branch so we can push back to the origin branch.
            sshagent (credentials: ['3aa16916-868b-4290-a9ee-b1a05343667e']) {
                sh "git checkout -b ${env.SHORT_BRANCH}"
                sh "git push --tags -u origin ${env.SHORT_BRANCH}"
            }
          }
        }
      }
    }

    stage('Build Docs') {
      steps {
        dir (env.REPO_DIR) {
          sh "npm run doc"
          sh "./scripts/generate-deploy-files"
          sh '''
              export CDN_ROOT=$(./node_modules/.bin/cdn --ecosystem pc --manifest doc/manifest.json)
              ./scripts/prepare-docs
          '''
        }
      }
    }

    stage('Upload Docs') {
      steps {
        dir (env.REPO_DIR) {
          sh '''
             ./node_modules/.bin/upload \
               --ecosystem pc \
               --manifest doc/manifest.json \
               --source-dir ./doc
          '''
        }
      }
    }

    stage('Deploy Docs') {
      steps {
        dir (env.REPO_DIR) {
          sh '''
             ./node_modules/.bin/deploy \
               --ecosystem pc \
               --manifest doc/manifest.json \
               --dest-env dev
          '''
        }
      }
    }
  }
}
