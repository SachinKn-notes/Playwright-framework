exports.SiteSelectionModule = class SiteSelectionModule {
    
    constructor(page) {
        this.page = page;

        this.selectSiteButton = '//tr[.//td[.="{siid}"]]//a[normalize-space()="Select"]';
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

    }

    async selectSite(siid) {
        await this.page.click(this.selectSiteButton.replace('{siid}', siid));
    }

}
