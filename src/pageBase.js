function loadHeader() {
    const header = document.createElement('header');

    // Container
    const divContainer = document.createElement('div');
    divContainer.classList.add('container', 'top-nav');

    const divLogo = document.createElement('div');
    divLogo.classList.add('logo');

    const logoTitle = document.createElement('h2');
    logoTitle.textContent = 'The Mighty Falafel';

    const nav = ['Home', 'Menu', 'Contact'];
    const navClasses = ['active']
    const navigation = document.createElement('nav');
    const ul = document.createElement('ul');
    for (let i = 0; i < nav.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('navbar-item');
        a.textContent = nav[i];
        if (navClasses[i]) {
            a.classList.add(navClasses[i]);
        }
        li.appendChild(a);
        ul.appendChild(li);
    }

    divLogo.append(logoTitle);
    navigation.appendChild(ul);
    
    divContainer.append(divLogo);
    divContainer.appendChild(navigation);
    header.append(divContainer);
    
    return header
};

function loadMain() {
    const main = document.createElement('main');
    return main;
}

function loadFooter() {
    const footer = document.createElement('footer');

    const cred = document.createElement('div');
    cred.classList.add('container');
    const span1 = document.createElement('span');
    span1.textContent = 'Photo by ';

    const photo = document.createElement('a');
    photo.textContent = 'Ludovic Avice';
    photo.setAttribute('href', 'https://unsplash.com/es/@loudmotion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')
    photo.setAttribute('target', '_blank');

    const span2 = document.createElement('span');
    span2.textContent = ' on ';

    const unsplash = document.createElement('a');
    unsplash.textContent = 'Unsplash';
    unsplash.setAttribute('href', 'https://unsplash.com/s/photos/falafel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')
    unsplash.setAttribute('target', '_blank');

    cred.appendChild(span1);
    cred.appendChild(photo);
    cred.appendChild(span2);
    cred.appendChild(unsplash);
    footer.appendChild(cred);
    return footer
}

export {
    loadHeader,
    loadMain,
    loadFooter
}