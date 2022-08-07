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
    const card = document.createElement('div');
    card.classList.add('card');
    const hdiv = document.createElement('div');
    hdiv.classList.add('card-heading');
    const heading = document.createElement('h2');
    heading.textContent = 'Welcome to TMF';
    const bdiv = document.createElement('div');
    bdiv.classList.add('card-content');
    const lorem = document.createElement('p');
    lorem.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui corporis at, excepturi cum unde aliquid ipsa ea amet quia natus reprehenderit iusto! Accusantium optio eligendi voluptate? Illo, quo nostrum.';
    const links = document.createElement('div');
    links.classList.add('card-content');
    links.textContent = 'See our Menu or Contact us if you have any questions.';

    hdiv.appendChild(heading);
    card.appendChild(hdiv);
    bdiv.appendChild(lorem);
    card.appendChild(bdiv);
    card.appendChild(links);
    main.appendChild(card);

    return main
}

function loadFooter() {
    const footer = document.createElement('footer');

    const cred = document.createElement('div');
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
    loadFooter,
}