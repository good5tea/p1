module core {
    export class WebUtils {

        public static isKeyboard: boolean = true;

        public static addKeyboardListener(): void {
            document.onkeydown = function (this: Document, event: KeyboardEvent): any {
                if (event && WebUtils.isKeyboard) {
                    core.EventCenter.getInstance().sendEvent(new KeyboardEventData(core.EventID.KEYBOARD_DOWN, event));
                }
            }
            document.onkeyup = function (this: Document, event: KeyboardEvent): any {
                if (event && WebUtils.isKeyboard) {
                    core.EventCenter.getInstance().sendEvent(new KeyboardEventData(core.EventID.KEYBOARD_UP, event));
                }
            }
        }
    }
}