import { element, By } from 'protractor';

import { HomePageConstant } from './home-page.constant';

export class HomePage {
    static get mainContainer() {
        return element(By.css(HomePageConstant.className));
    }

    static get folders() {
        return {
            foldersLabelsLink: element(By.id('tour-label-settings')),
        };
    } 
    
    static get base() {
        return {
            closeModal: element(By.css('button[title="Close"]')),
            inbox: element(By.css('li span a[href="/inbox"][target="_self"]'))
        };
    }    



    static returnFolder(folder: string) {
        return element(By.css(`a[data-label='${folder}']`))
    }

    static returnLabel(label: string) {
        return element(By.css(`span[title='${label}']`))
    }
    
}
