import { loadHeader, loadMain, loadFooter }from './pageBase';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

const pageNavigation = {
    init: function() {
        this.cacheDoom();
        this.getPage();
        this.getHome();
        this.bindEvents();
    },
    cacheDoom: function() {
        this.content = document.querySelector('#content');
        this.navbar = document.querySelectorAll('.navbar-item');
        this.main = document.querySelector('main');
    },
    getPage: function() {
        this.content.appendChild(loadHeader());
        this.content.appendChild(loadMain());
        this.content.appendChild(loadFooter());
        this.cacheDoom();
    },
    getHome: function() {
        this.navbar[0].classList.add('active');
        this.navbar[1].classList.remove('active');
        this.navbar[2].classList.remove('active');
        this.main.innerHTML = '';
        this.main.appendChild(loadHome());
    },
    getMenu: function() {
        this.navbar[0].classList.remove('active');
        this.navbar[1].classList.add('active');
        this.navbar[2].classList.remove('active');
        this.main.innerHTML = '';
        this.main.appendChild(loadMenu());
    },
    getContact: function() {
        this.navbar[0].classList.remove('active');
        this.navbar[1].classList.remove('active');
        this.navbar[2].classList.add('active');
        this.main.innerHTML = '';
        this.main.appendChild(loadContact());
    },
    bindEvents: function() {
        this.navbar.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.textContent === 'Menu') {
                    this.getMenu();
                } else if (item.textContent === 'Home') {
                    this.getHome();
                } else {
                    this.getContact();
                }
            });
        });
    },
}

pageNavigation.init();