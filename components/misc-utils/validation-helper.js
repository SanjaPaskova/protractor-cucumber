"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationsHelper {
    static get types() {
        return {
            field: 'Field',
            dropDown: 'Drop down',
            page: 'Page',
            button: 'Button',
            label: 'Label',
            image: 'Image',
            window: 'Window',
            notification: 'Notification',
            grid: 'Grid',
            menu: 'Menu',
            link: 'Link',
        };
    }
    static getPageDisplayedValidation(name) {
        return `${this.types.page} ${this.getDisplayedValidation(name)}`;
    }
    static getDisplayedValidation(name) {
        return `${name} should be displayed`;
    }
}
exports.ValidationsHelper = ValidationsHelper;
//# sourceMappingURL=validation-helper.js.map