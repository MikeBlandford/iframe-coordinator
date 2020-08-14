import { Decoder } from 'decoders';
import { LabeledMsg } from './LabeledMsg';
/**
 * A toast configuration.
 */
export interface Notification {
    /** The title of the notification */
    title?: string;
    /** The notification message */
    message: string;
    /** Additional host-specific options such as severity */
    custom: any;
}
/**
 * A message used to request notifications to display
 * in the host application.
 * @external
 */
export interface LabeledNotification extends LabeledMsg<'notifyRequest', Notification> {
    /** Message identifier */
    msgType: 'notifyRequest';
    /** Toast details */
    msg: Notification;
}
/** @external */
declare const decoder: Decoder<LabeledNotification>;
export { decoder };
