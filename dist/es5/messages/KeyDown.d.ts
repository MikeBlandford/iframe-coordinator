import { Decoder } from 'decoders';
import { NativeKey } from '../Key';
import { LabeledMsg } from './LabeledMsg';
/**
 * A message used to send key information
 * to the host application.
 * @external
 */
export interface LabeledKeyDown extends LabeledMsg<'registeredKeyFired', NativeKey> {
    /** Message identifier */
    msgType: 'registeredKeyFired';
    /** Key details */
    msg: NativeKey;
}
/** @external */
declare const decoder: Decoder<LabeledKeyDown>;
export { decoder };
