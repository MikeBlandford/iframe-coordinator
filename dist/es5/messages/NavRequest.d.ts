import { Decoder } from 'decoders';
import { LabeledMsg } from './LabeledMsg';
/**
 * The navigation request data.
 */
export interface NavRequest {
    /** The URL the client wants to navigate to */
    url: string;
}
/**
 * A message used to request the host navigate to another
 * URI.
 * @external
 */
export interface LabeledNavRequest extends LabeledMsg<'navRequest', NavRequest> {
    /** Message identifier */
    msgType: 'navRequest';
    /** Navigation request details */
    msg: NavRequest;
}
/** @external */
declare const decoder: Decoder<LabeledNavRequest>;
export { decoder };
