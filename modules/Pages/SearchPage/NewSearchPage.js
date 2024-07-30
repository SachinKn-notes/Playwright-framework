exports.NewSearchPage = class NewSearchPage {

    constructor(page) {
        this.page = page;

        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        this.selectSailingDatesField = '[data-ody-id="sailingDates"]';
        this.sailingYearButton = '(//bs-daterangepicker-container//bs-days-calendar-view)[1]//button[@class="current"]';
        this.selectSailingYear = '(//bs-daterangepicker-container//table)[1]//td[normalize-space()="{year}"]';
        this.selectSailingMonth = '(//bs-daterangepicker-container//table)[1]//td[normalize-space()="{month}"]';
        this.selectSailingDay = '(//bs-daterangepicker-container//table)[1]//td[normalize-space()="{day}"][.//span[not(@class="is-other-month")]]';

        this.selectCruiselineTextfield = '[placeholder="Select Cruise Line"]';
        this.searchButton = '[data-ody-id="SearchButton"]';

        this.bookButton = '(//*[@data-ody-id="CruiseSailingDatesSection"]//button[normalize-space()="Book"])[1]';
    }

    async selectSailingDates(sailingDatesFrom, sailingDatesTo) {
        await this.page.click(this.selectSailingDatesField);

        // Selecting From Date
        await this.page.click(this.sailingYearButton);
        await this.page.click(this.selectSailingYear.replace('{year}', sailingDatesFrom.getFullYear()));
        await this.page.click(this.selectSailingMonth.replace('{month}', this.months[sailingDatesFrom.getMonth()]));
        await this.page.click(this.selectSailingDay.replace('{day}', sailingDatesFrom.getDate()));

        // Selecting To Date
        await this.page.click(this.sailingYearButton);
        await this.page.click(this.selectSailingYear.replace('{year}', sailingDatesTo.getFullYear()));
        await this.page.click(this.selectSailingMonth.replace('{month}', this.months[sailingDatesTo.getMonth()]));
        await this.page.click(this.selectSailingDay.replace('{day}', sailingDatesTo.getDate()));
    }

    async selectCruiseline() {
        await this.page.fill(this.selectCruiselineTextfield, 'Royal Caribbean');
        await this.page.press(this.selectCruiselineTextfield, 'Enter');
    }

    async clickSearchButton() {
        await this.page.click(this.searchButton);
    }

    async clickBookButton() {
        await this.page.click(this.bookButton);
    }

}

