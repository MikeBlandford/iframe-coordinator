import { EventEmitter } from '../EventEmitter';
import { RoutingMap } from '../HostRouter';
import { EnvData } from '../messages/Lifecycle';
import { Publication } from '../messages/Publication';
/**
 * A DOM element responsible for communicating with the internal ClientFrame in
 * order to recieve and send messages to and from the client content. Typically
 * registered as <frame-router>
 *
 * **Protip: Uncheck the "inherited" option in the doc options above.**
 */
export default class FrameRouterElement extends HTMLElement {
    private _frameManager;
    private _router;
    private _envData;
    private _publishEmitter;
    private _publishExposedEmitter;
    private _currentClientId;
    constructor();
    /**
     * @inheritdoc
     */
    static readonly observedAttributes: string[];
    /**
     * @inheritdoc
     */
    connectedCallback(): void;
    /**
     * @inheritdoc
     */
    disconnectedCallback(): void;
    /**
     * Initializes this host frame with the possible clients and
     * the environmental data required the clients.
     *
     * @param clients The map of registrations for the available clients.
     * @param envData Information about the host environment.
     */
    setupFrames(clients: RoutingMap, envData: EnvData): void;
    /**
     * Eventing for published messages from the host application.
     */
    readonly messaging: EventEmitter<Publication>;
    /**
     * Publish a message to the client fragment.
     *
     * @param publication - The information published to the client fragment.
     * The topic may not be of interest, and could be ignored.
     */
    publish(publication: Publication): void;
    /**
     * Changes the route the client fragment is rendering.
     *
     * @param newPath a new route which matches those provided originally.
     */
    changeRoute(newPath: string): void;
    /**
     * @inheritdoc
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private _handleClientMessages;
    private _handleLifecycleMessage;
    private _dispatchClientMessage;
    private _getCurrentClientAssignedRoute;
    private _processHostUrl;
}
