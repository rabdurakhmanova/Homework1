describe('Main Page', () => {
    it('Verify sign up option', () => {
        browser.url('https://amity.uz/admissionmicrosite/login.php');

        const SignUp = $$("//body[1]/div[1]/div[2]/div[1]/p[3]/a[1]"); //findElements

        expect(SignUp).toHaveHref('https://amity.uz/admissionmicrosite/register.php');
    });
});