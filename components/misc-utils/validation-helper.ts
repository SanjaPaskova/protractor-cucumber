export class ValidationsHelper {
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

    static getPageDisplayedValidation(name: string) {
        return `${this.types.page} ${this.getDisplayedValidation(name)}`;
    }

    static getDisplayedValidation(name: string) {
        return `${name} should be displayed`;
    }

}
