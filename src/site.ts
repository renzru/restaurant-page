import './normalize.css'
import './style.css'
import { createText } from './utils';
import { getHome } from './home';

function getNav() {
    const nav = document.createElement('nav');
    const logo = createText('h1', 'FOODO');
    const tabs = document.createElement('section');
    const user = document.createElement('section');
    
    getNavTabs(tabs);
    getNavUser(user);
    
    logo.classList.add('logo', 'no-select');
    tabs.classList.add('nav__tabs');
    user.classList.add('nav__user');
    nav.append(logo, tabs, user);

    return nav;
}

function getNavTabs(parent: HTMLElement) {
    const home = createText('a', 'Home');
    const menu = createText('a', 'Menu');
    const about = createText('a', 'About');

    parent.append(home, menu, about);
}

function getNavUser(parent: HTMLElement) {
    const signin = createText('h1', 'Sign in');
    const register = createText('h1', 'Register');

   parent.append(signin, register);
}

function startSite() {
    const body = document.body;
    body.append(getNav(), getHome());
}

export {startSite};