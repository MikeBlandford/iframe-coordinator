import { Publication } from './messages/Publication';
/**
 * Callback which can handle a publication message.
 * @external
 */
export declare type PublicationHandler = (publication: Publication) => void;
/**
 * Manages topic subscriptions and
 * publish events for {@link Publication | Publications}.
 * @external
 */
export declare class SubscriptionManager {
    private _handler;
    private _interestedTopics;
    constructor();
    /**
     * Adds a new topic to the publications
     * that will be dispatched.
     *
     * @param topic The new topic to dispatch messages for.
     */
    subscribe(topic: string): void;
    /**
     * Removes a topic to be dispatched when attempting
     * to publish.
     *
     * @param topic The topic to no longer dispatch messages for.
     */
    unsubscribe(topic: string): void;
    /**
     * Set the handler to be called when dispatching
     * a new publication.  Only one handler can be set.
     *
     * @param handler The callback for dispatched messages.
     */
    setHandler(handler: PublicationHandler): void;
    /**
     * Dispatches a new publication to the handler if their topic
     * has been subscribed to.
     *
     * @param publication The publication message to dispatch.
     */
    dispatchMessage(publication: Publication): void;
}
