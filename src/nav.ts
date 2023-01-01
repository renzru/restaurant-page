import { createText } from './utils';

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
    home.classList.add('home');
    const menu = createText('a', 'Menu');
    menu.classList.add('menu');
    const about = createText('a', 'About');
    about.classList.add('about');

    parent.append(home, menu, about);
}

function getNavUser(parent: HTMLElement) {
    const signin = createText('h1', 'Sign in');
    const register = createText('h1', 'Register');

   parent.append(signin, register);
}

export {getNav};