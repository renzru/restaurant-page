import './normalize.css'
import './style.css'
import { createText } from './utils';
import { getHome } from './home';

function getNav() {
    const nav = document.createElement('nav');
    const logo = createText('h1', 'FOODO');
    logo.classList.add('logo', 'no-select');

    const tabs = document.createElement('section');
    tabs.classList.add('nav__tabs');
    getNavTabs(tabs);

    const user = document.createElement('section');
    user.classList.add('nav__user');
    getNavUser(user);

    const list: HTMLElement[] = [logo, tabs, user];
    list.forEach((element) => {
        nav.appendChild(element);
    })

    return nav;
}

function getNavTabs(parent: HTMLElement) {
    const home = createText('a', 'Home');
    const menu = createText('a', 'Menu');
    const about = createText('a', 'About');

    const list: HTMLElement[] = [home, menu, about];
    list.forEach((tab) => {
        parent.appendChild(tab);
    });
}

function getNavUser(parent: HTMLElement) {
    const signin = createText('h1', 'Sign in');
    const register = createText('h1', 'Register');

    parent.appendChild(signin);
    parent.appendChild(register);
}

function startSite() {
    const body = document.body;
    body.append(getNav(), getHome());
}

export {startSite};