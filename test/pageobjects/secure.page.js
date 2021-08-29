const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('body.sidebar-mini:nth-child(2) div.wrapper:nth-child(1) nav.main-header.navbar.navbar-expand.navbar-white.navbar-light ul.navbar-nav.ml-auto li.nav-item:nth-child(2) > a.nav-link') }

    get btnLogout() {return $('a[href="/logout.php"]')}
}

module.exports = new SecurePage();
