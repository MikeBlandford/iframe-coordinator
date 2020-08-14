/**
 * A generic handler for incoming event data.
 */
export declare type EventHandler<T> = (data: T) => void;
/**
 * API for registering and unregistering event handlers. Mirrors the browser's EventTarget API.
 *
 * @param T The type of event produced by the emitter.
 */
export declare class EventEmitter<T> {
    private _rootEmitter;
    /**
     * Constructing EventEmitters is an internal-only operation. API consumers should not create this
     * class directly.
     *
     * @external
     */
    constructor(internalEmitter: InternalEventEmitter<T>);
    /**
     * Sets up a function that will be called whenever the specified event type is delivered to the target.
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The handler which receives a notification when an event of the specified type occurs.
     */
    addListener(type: string, listener: EventHandler<T>): EventEmitter<T>;
    /**
     * Removes from the event listener previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     * @param listener The event handler to remove from the event target.
     */
    removeListener(type: string, listener: EventHandler<T>): EventEmitter<T>;
    /**
     * Removes all event listeners previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeAllListeners(type: string): EventEmitter<T>;
}
/**
 * An event emitter based on {@link EventTarget} used to signal
 * events between host and client. This provides class safety
 * on both the type and listeners
 * @external
 */
export declare class InternalEventEmitter<T> {
    private _events;
    constructor();
    /**
     * Sets up a function that will be called whenever the specified event type is delivered to the target.
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The handler which receives a notification when an event of the specified type occurs.
     */
    addListener(type: string, listener: EventHandler<T>): InternalEventEmitter<T>;
    /**
     * Removes all event listeners previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeListener(type: string, listener: EventHandler<T>): InternalEventEmitter<T>;
    /**
     * Removes all event listeners previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeAllListeners(type: string): InternalEventEmitter<T>;
    /**
     * Dispatches data (synchronously) invoking the affected listeners in the appropriate order.
     * @param type A string which specifies the type of event to raise.
     * @param data The event data to send to the listeners.
     * @returns true if the handlers were called, otherwise false.
     */
    dispatch(type: string, data: T): boolean;
}
