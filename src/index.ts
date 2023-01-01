import { getHome } from './home';
import { getNav } from './nav';

function startSite() {
    const body = document.body;
    const nav = getNav();
    const home = getHome();

    body.append(nav, home);
    
    const homeTab: HTMLElement = document.querySelector('.home') as HTMLElement;
    const menuTab: HTMLElement = document.querySelector('.menu') as HTMLElement;
    const aboutTab: HTMLElement = document.querySelector('.about') as HTMLElement;

    homeTab.onclick = () => loadContent(home);
    menuTab.onclick = () => loadContent(nav);
    aboutTab.onclick = () => loadContent(nav);
}

function loadContent(content: HTMLElement) {
    const body = document.body;

    const main = document.querySelector('main') as HTMLElement;
    if (main !== null) {
        body.removeChild(main);
    }
    body.append(content);
}

startSite()