/**
 * HostRouter is responsible for mapping route paths to
 * corresponding client URls.
 * @external
 */
export declare class HostRouter {
    private _clients;
    constructor(clients: RoutingMap);
    /**
     * Gets the client id and url for the provided route.
     *
     * @param route The route to lookup, such as '/foo/bar/baz'
     */
    getClientTarget(route: string): ClientTarget | null;
}
/**
 * Data representing the id of a client app to display
 * and a target URL to show in that app.
 */
export interface ClientTarget {
    /** The id of the target client */
    id: string | null;
    /** The target URL to show */
    url: string | null;
    /** The assigned route of the client */
    assignedRoute: string | null;
    /** iframe's allow directive */
    allow?: string;
    /** iframe's sandbox directive to be merged with defaults */
    sandbox?: string;
}
/**
 * A map from client identifiers to configuration describing
 * where the client app is hosted, and what routes should be
 * directed to it.
 */
export interface RoutingMap {
    [key: string]: ClientRegistration;
}
/**
 * Client routing description. The 'url' parameter is the location where
 * the client application is hosted. If the client uses fragment-based
 * routing, the URL shoudl include a hash fragment, e.g. http://example.com/client/#/
 * if the client uses pushstate path-based routing, leave the fragment out
 * e.g. http://example.com/client
 *
 * The assigned route is the prefix for all routes that will be mapped to this client.
 * This prefix will be stripped when setting the route on the client. As an example,
 * if the assignedRoute is '/foo/bar/', and {@link HostRouter.getClientUrl} is passed
 * the route '/foo/bar/baz/qux', the client generated client Url will look something
 * like http://example.com/client/#/baz/qux
 */
interface ClientRegistration {
    /** The URL where the client application is hosted */
    url: string;
    /** The host route that should map to this client app */
    assignedRoute: string;
    /** iframe's allow directive */
    allow?: string;
    /** iframe's sandbox directive to be merged with defaults */
    sandbox?: string;
}
export {};
