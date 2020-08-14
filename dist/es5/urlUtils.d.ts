/**
 * Removes leading and trailing slashes from a route to simplify comparisons
 * against other paths.
 *
 * @external
 */
export declare function normalizeRoute(route: string): string;
/**
 * Removes any leading '/' characters from a string.
 *
 * @external
 */
export declare function stripLeadingSlash(str: string): string;
/**
 * Removes any trailing '/' characters from a string.
 *
 * @external
 */
export declare function stripTrailingSlash(str: string): string;
/**
 * Removes any leading '/' or '#' characters from a string.
 *
 * @external
 */
export declare function stripLeadingSlashAndHashTag(str: string): string;
/**
 * Join multiple routes into one URL.
 *
 * @external
 */
export declare function joinRoutes(...routes: string[]): string;
