import { getHome } from './home';
import { getNav } from './nav';

function startSite() {
    const body = document.body;
    body.append(getNav(), getHome());
}

export {startSite};