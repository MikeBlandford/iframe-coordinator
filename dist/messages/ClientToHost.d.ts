import { LabeledKeyDown } from './KeyDown';
import { LabeledStarted } from './Lifecycle';
import { LabeledNavRequest } from './NavRequest';
import { LabeledNotification } from './Notification';
import { LabeledPublication } from './Publication';
/**
 * All avaiable message types that can be sent
 * from the client content to the host application.
 * @external
 */
export declare type ClientToHost = LabeledPublication | LabeledNotification | LabeledNavRequest | LabeledStarted | LabeledKeyDown;
/**
 * Validates correctness of messages being sent from
 * the client to the host.
 * @param msg The message requiring validation.
 * @external
 */
export declare function validate(msg: any): ClientToHost;
