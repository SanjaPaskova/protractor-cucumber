"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomePageConstant {
    static get Folders() {
        return {
            inbox: 'Inbox',
            drafts: 'Drafts',
            sent: 'Sent',
            starred: 'Starred',
            archive: 'Archive',
            spam: 'Spam',
            trash: 'Trash',
            allMail: 'All Mail'
        };
    }
    static get Messages() {
        return {
            foldersLabels: 'Folders/Labels link is displayed',
            inbox: 'Inbox folder is displayed',
            drafts: 'Draft folder is displayed',
            sent: 'Sent folder is displayed',
            starred: 'Starred folder is displayed',
            archive: 'Archive folder is displayed',
            spam: 'Spam folder is displayed',
            trash: 'Trash folder is displayed',
            allMail: 'All mail folder is disaplyed'
        };
    }
}
exports.HomePageConstant = HomePageConstant;
HomePageConstant.pageName = 'Home';
HomePageConstant.className = 'span.inbl.mw100.ellipsis.dropDown-logout-displayName';
//# sourceMappingURL=home-page.constant.js.map