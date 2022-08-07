function loadHeader() {
    const header = document.createElement('header');

    const container = document.createElement('div');
    container.classList.add('container', 'top-nav');

    const logo = document.createElement('div');
    logo.classList.add('logo');

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
        a.textContent = nav[i];
        if (navClasses[i]) {
            a.classList.add(navClasses[i]);
        }
        li.appendChild(a);
        ul.appendChild(li);
    }

    header.append(container);
    logo.append(logoTitle);
    navigation.appendChild(ul);

    container.append(logo);
    container.appendChild(navigation);

    return header
};

function loadMain() {
    const main = document.createElement('main');
    const par = document.createElement('p');
    par.textContent = 'LoL';


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

    main.appendChild(span1);
    main.appendChild(photo);
    main.appendChild(span2);
    main.appendChild(unsplash);
    main.appendChild(par);
    // Photo by <a href="https://unsplash.com/es/@loudmotion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ludovic Avice</a> on <a href="https://unsplash.com/s/photos/falafel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    return main
}

function loadFooter() {
    const footer = document.createElement('footer');
    return footer
}

export {
    loadHeader,
    loadMain,
    loadFooter,
}