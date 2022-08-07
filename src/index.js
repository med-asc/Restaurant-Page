import initialPageLoad from './home';
import { loadHeader, loadMain, loadFooter } from './home';
import './style.css';

const main = document.querySelector('#content');

main.appendChild(loadHeader());
main.appendChild(loadMain());
main.appendChild(loadFooter());