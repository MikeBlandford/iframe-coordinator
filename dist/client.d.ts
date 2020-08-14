import { EventEmitter } from './EventEmitter';
import { EnvData, EnvDataHandler } from './messages/Lifecycle';
import { NavRequest } from './messages/NavRequest';
import { Notification } from './messages/Notification';
import { Publication } from './messages/Publication';
/**
 * Client configuration options.
 */
export interface ClientConfigOptions {
    /** The expected origin of the host application. Messages will not be sent to other origins. */
    hostOrigin?: string;
}
/**
 * This class is the primary interface that an embedded iframe client should use to communicate with
 * the host application.
 */
export declare class Client {
    private _isStarted;
    private _isInterceptingLinksStarted;
    private _clientWindow;
    private _environmentData;
    private _envDataEmitter;
    private _hostOrigin;
    private _publishEmitter;
    private _publishExposedEmitter;
    private _registeredKeys;
    private _assignedRoute;
    /**
     * Creates a new client.
     */
    constructor(configOptions?: ClientConfigOptions);
    /**
     * Sets up a function that will be called whenever the specified event type is delivered to the target.
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The handler which receives a notification when an event of the specified type occurs.
     */
    addListener(type: 'environmentalData', listener: EnvDataHandler): Client;
    /**
     * Removes from the event listener previously registered with {@link InternalEventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     * @param listener The event handler to remove from the event target.
     */
    removeListener(type: 'environmentalData', listener: EnvDataHandler): Client;
    /**
     * Removes all event listeners previously registered with {@link InternalEventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeAllListeners(type: 'environmentalData'): Client;
    private _onWindowMessage;
    private _onWindowClick;
    private _onKeyDown;
    private _handleEnvironmentData;
    private _handleHostMessage;
    /**
     * Gets the environmental data provided by the host application. This includes things
     * like the current locale, the base URL of the host app, etc.
     */
    readonly environmentData: EnvData;
    /**
     * Translates a client route like `/foo/bar` to the full URL used in the host
     * app for the same page, e.g. `https://hostapp.com/#/client-app/foo/bar`.
     * You should use this whenver generating an internal link within a client
     * application so that the user gets a nice experience if they open a link in
     * a new tab, or copy and paste a link URL into a chat message or email.
     *
     * @param clientRoute The /-separated path within the client app to link to.
     */
    asHostUrl(clientRoute: string): string;
    private _sendToHost;
    /**
     * Initiates responding to events triggered by the host application.
     */
    start(): void;
    /**
     * Adds a click handler to the client window that intercepts clicks on anchor elements
     * and makes a nav request to the host based on the element's href.
     */
    startInterceptingLinks(): void;
    /**
     * Removes the click handler that intercepts clicks on anchor elements.
     */
    stopInterceptingLinks(): void;
    /**
     * Accessor for the general-purpose pub-sub bus betwen client and host applications.
     * The content of messages on this bus are not defined by this API beyond a basic
     * data wrapper. This is for message formats designed outside of this library and
     * agreed upon as a shared API betwen host and client.
     */
    readonly messaging: EventEmitter<Publication>;
    /**
     * Disconnects this client from the host application. This is mostly provided for
     * the sake of API completeness. It's unlikely to be used by most applications.
     */
    stop(): void;
    /**
     * Publish a general message to the host application.
     *
     * @param publication The data object to be published.
     */
    publish(publication: Publication): void;
    /**
     * Asks the host application to display a user notification.
     *
     * The page embedding the client app is responsible for handling the fired custom event and
     * presenting/styling the notification.  Application-specific concerns such as level, TTLs,
     * ids for action callbacks (notification click, notification action buttons), etc. can be passed via
     * the `custom` property of the `notification` type.
     *
     * @param notification the desired notification configuration.
     *
     * @example
     * `client.requestNotification({ title: 'Hello world' });`
     *
     * @example
     * `client.requestNotification({ title: 'Hello', message: 'World' });`
     *
     * @example
     * `client.requestNotification({ title: 'Hello', message: 'World', custom: { ttl: 5, level: 'info' } });`
     */
    requestNotification(notification: Notification): void;
    /**
     * Asks the host application to navigate to a new location.
     *
     * By requesting navigation from the host app instead of navigating directly in the client frame,
     * a host-client pair can maintain a consistent browser history even if the client frame is removed
     * from the page in some situations. It also helps avoid any corner-case differences in how older
     * browsers handle iframe history
     *
     * @param destination a description of where the client wants to navigate the app to.
     *
     */
    requestNavigation(destination: NavRequest): void;
}
