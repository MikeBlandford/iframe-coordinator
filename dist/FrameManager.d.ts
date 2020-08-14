import { ClientToHost } from './messages/ClientToHost';
import { PartialMsg } from './messages/LabeledMsg';
/**
 * A handler function for messages sent from a client app.
 * @external
 */
declare type MessageHandler = (event: ClientToHost) => void;
/**
 * FrameManager is responsible for managing the state of the client iframe.
 * It changes locations in the frame when requested, and handles proxying
 * of postMessage events to and from the client, with verification of
 * the expected client origin.
 * @external
 */
declare class FrameManager {
    private _iframe;
    private _frameLocation;
    private _window;
    private _postMessageHandler;
    constructor(options: {
        /** Handler for frame messages */
        onMessage: MessageHandler;
        /** Optional mock window for testing */
        mockWindow?: Window;
    });
    /**
     * String of feature-policies to set on the iframe element.
     *  Ex: "microphone *;"
     *
     *  See [feature-policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy#Directives)
     *
     * @param allow string of feature-policies
     */
    setFrameAllow(allow?: string): void;
    /**
     * String of sandbox rules to be added to the `<iframe>` element.
     *  Ex: "allow-forms allow-modals"
     *
     *  See [<iframe>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
     *
     * @param sandbox string of iframe sandbox rules
     */
    setFrameSandbox(sandbox?: string): void;
    /**
     * Navigates the wrapped iframe to the provided location in a
     * way that does not affect the host application's history.
     * This prevents strange behavior in the forward and back buttons
     * in the browser in certain edge cases.
     *
     * @param newLocation The new location the iframe should show. If `null`,
     * the frame will be directed to 'about:blank'.
     */
    setFrameLocation(newLocation?: string | null | undefined): string;
    /**
     * Sends a message to the client frame via the postMessage API.
     * If the message isn't structured correctly, or the client frame
     * has navigated away from the expected origin, the message will
     * not be sent.
     *
     * @param message The message to send.
     */
    sendToClient<T, V>(partialMsg: PartialMsg<T, V>): void;
    /**
     * Starts listening to postMessages from the client window.
     */
    startMessageHandler(): void;
    /**
     * Stops listening to postMessages from the client window.
     */
    stopMessageHandler(): void;
    /**
     * Embeds the wrapped iframe in the provided element.
     *
     * @param parent The element to place the iframe inside.
     */
    embed(parent: HTMLElement): void;
    private _handlePostMessage;
    private _navigateFrame;
    private _expectedClientOrigin;
}
export default FrameManager;
