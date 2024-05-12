import { NewSearchPage } from "./Pages/SearchPage/NewSearchPage.js";
import { OldSearchPage } from "./Pages/SearchPage/OldSearchPage.js";

exports.SearchModule = class SearchModule {

    constructor(page) {
        this.page = page;
    }

    async waitForPageToLoad() {
        // waitForDocumentToGetReady
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });

        // waitForAjaxToComplete
        await this.page.waitForFunction(() => {
            if (window.jQuery) {
                return jQuery.active === 0;
            } else {
                console.log("jQuery is not loaded for " + window.location.href);
                return true;
            }
        }, { timeout: 120000 });

        await this.initiatePageReference();

    }

    async initiatePageReference() {
        if (await this.page.url().includes('.com/swift/')) {
            this.searchPage = new NewSearchPage(this.page);
        } else if (await this.page.url().includes('.com/web/')) {
            this.searchPage = new OldSearchPage(this.page);
        }
    }

    async openSearchPage(siid) {
        await this.page.goto('https://uat.odysol.com/swift/cruise?siid=' + siid);
    }

    async selectSailingDates() {
        let today = new Date();

        today.setMonth(today.getMonth() + 6);
        let sailingDatesFrom = new Date(today);

        today.setMonth(today.getMonth() + 1);
        let sailingDatesTo = new Date(today);

        await this.searchPage.selectSailingDates(sailingDatesFrom, sailingDatesTo);
    }

    async selectCruiseline() {
        await this.searchPage.selectCruiseline();
    }

    async clickSearchButton() {
        await this.searchPage.clickSearchButton();
    }

    async clickBookButton() {
        await this.searchPage.clickBookButton();
    }

}
