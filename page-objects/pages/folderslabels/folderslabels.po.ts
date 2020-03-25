import { element, By } from 'protractor';

import { FoldersLabelsPageConstant } from './folderslabels-page.constant';

export class FoldersLabelsPage {
    static get mainContainer() {
        return element(By.css(FoldersLabelsPageConstant.className));
    }

    static get folderslabels() {
        return {
            learnMoreLink: element(By.linkText('Learn more')),
            addFolderButton: element(By.css('button[data-test-id="folders/labels:addFolder"]')),
            addLabelButton: element(By.css('button[data-test-id="folders/labels:addLabel"]')),
            name: element(By.id('accountName')),
            submitButton: element(By.css('button[type="submit"]')),
            cancelButton: element(By.css('button[type="reset"]')),
            editButton: element(By.css('button[data-test-id="folders/labels:item-edit"]')),
            arrowButton: element(By.css('span.mauto svg[role="img"]')),
            deleteButton: element(By.buttonText('Delete')),
            labelAsButton: element(By.css('button[pt-tooltip="Label as"]')),
            addNewLabel: element(By.css('#tour-label-dropdown > div > div > form > div > div.flex-item-noshrink > button')),
            saveLabelButton: element(By.buttonText('Save')),
            applyButton: element(By.buttonText('Apply')),
        };
    } 
    
    static get base() {
        return {
            closeModal: element(By.css('button[title="Close"]')),
        };
    }

    static returnFolder(folder: string) {
        return element(By.css(`a[data-label='${folder}']`))
    }

    static returnFolderLabelGrid(name: string) {
        return element(By.cssContainingText('span[data-test-id="folders/labels:item-name"]', `${name}`))
    }
    
}
