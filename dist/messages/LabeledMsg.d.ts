import { Decoder } from 'decoders';
/**
 * @external
 */
export declare const API_PROTOCOL = "iframe-coordinator";
/**
 * Based on MessageDirection, hosts and clients can ignore messages that are not targeted at them.
 * @external
 */
export declare type MessageDirection = 'ClientToHost' | 'HostToClient';
/**
 * Labeled message is a general structure
 * used by all coordinated messages between
 * host and client.
 *
 * The msgType will indicate the nature of
 * the message. The msg will contain the
 * information desired to be communicated.
 * @external
 */
export interface LabeledMsg<T, V> extends PartialMsg<T, V> {
    /** Distinguisihes iframe-coordinator message from other postmessage events */
    protocol: 'iframe-coordinator';
    /** library version */
    version: string;
    /** So that nested iframe-coordinators can ignore messages that don't apply */
    direction?: MessageDirection;
}
/**
 * Core data structure for most messages. These are the parts that vary by message type.
 * @external
 */
export interface PartialMsg<T, V> {
    /** The type of message */
    msgType: T;
    /** The message payload */
    msg: V;
}
/**
 * Takes an object with a `msgType` and `msg` and applies the appropriate
 * `direction`, `protocol` and `version` fields for the current version of the library.
 * @param partialMsg
 * @external
 */
export declare function applyClientProtocol<T, V>(partialMsg: PartialMsg<T, V>): LabeledMsg<T, V>;
/**
 * Takes an object with a `msgType` and `msg` and applies the appropriate
 * `direction`, `protocol` and `version` fields for the current version of the library.
 * @param partialMsg
 * @external
 */
export declare function applyHostProtocol<T, V>(partialMsg: PartialMsg<T, V>): LabeledMsg<T, V>;
/**
 * Converts a PartialMsg decoder into a LabeledMsg decoder
 * @param msgDecoder
 * @external
 */
export declare function labeledDecoder<T, V>(typeDecoder: Decoder<T>, msgDecoder: Decoder<V>): Decoder<LabeledMsg<T, V>>;
