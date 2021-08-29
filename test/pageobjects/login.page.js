const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user_email') }
    get inputPassword () { return $('#user_password') }
    get btnSubmit () { return $('#submit') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (user_email, user_password) {
        await this.inputUsername.setValue(user_email);
        await this.inputPassword.setValue(user_password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login.php');
    }
}

module.exports = new LoginPage();
