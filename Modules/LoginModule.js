export class LoginModule {

    constructor(page) {
        this.page = page;

        this.usernameTextfield = '[id="UsernameTXT"]';
        this.passwordTextfield = '[id="PasswordTXT"]';
        this.loginButton = '[id="SubmitBTN"]';
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

    async openUrl() {
        await this.page.goto('https://uat.odysol.com/admin/login.aspx');
    }

    async login() {
        await this.page.fill(this.usernameTextfield, 'QA AUTO2');
        await this.page.fill(this.passwordTextfield, 'Auto@Mar2024');
        await this.page.click(this.loginButton);
    }

}

