import { KeyData } from './messages/Lifecycle';
/**
 * Compares a KeyboardEvent with KeyData to test equality.
 * @param key The KeyData to compare against.
 * @param event The incoming event to compare with.
 */
declare function keyEqual(key: KeyData, event: KeyboardEvent): boolean;
/** Data structure representing a native key event. */
interface NativeKey {
    /** If the alt key was pressed */
    altKey?: boolean;
    /** The character code for the event. */
    charCode?: number;
    /** The code for the event. */
    code?: string;
    /** If the ctrl key was pressed */
    ctrlKey?: boolean;
    /** The key that was pressed */
    key: string;
    /** The key code for the event. */
    keyCode?: number;
    /** If the meta key was pressed. */
    metaKey?: boolean;
    /** If the shift key was pressed. */
    shiftKey?: boolean;
}
export { keyEqual, NativeKey };
