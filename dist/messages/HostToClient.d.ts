import { LabeledEnvInit } from './Lifecycle';
import { LabeledPublication } from './Publication';
/**
 * All avaiable message types that can be sent
 * from the host application to the client content.
 * @external
 */
export declare type HostToClient = LabeledPublication | LabeledEnvInit;
/**
 * Validates correctness of messages being sent from
 * the host to the client.
 * @param msg The message requiring validation.
 * @external
 */
export declare function validate(msg: any): HostToClient;
