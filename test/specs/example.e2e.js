const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Amity Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('abr403574@gmail.com', 'abr403574');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'Welcome to dashboard ! Regina');
    });

    it('should logout and verify logout alert message', () => {
        SecurePage.btnLogout.click();

        expect(SecurePage.flashAlert).toHaveTextContaining(" Registered users - Sign in");
    });
});


