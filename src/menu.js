function loadMenu() {
    const card = document.createElement('div');
    card.classList.add('card');
    const hdiv = document.createElement('div');
    hdiv.classList.add('card-heading');
    const heading = document.createElement('h2');
    heading.textContent = 'Menu';
    const bdiv = document.createElement('div');
    bdiv.classList.add('card-content');
    const lorem = document.createElement('p');
    lorem.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui corporis at, excepturi cum unde aliquid ipsa ea amet quia natus reprehenderit iusto! Accusantium optio eligendi voluptate? Illo, quo nostrum.';
    const links = document.createElement('div');
    links.classList.add('card-content');
    links.textContent = 'ABC';

    hdiv.appendChild(heading);
    card.appendChild(hdiv);
    bdiv.appendChild(lorem);
    card.appendChild(bdiv);
    card.appendChild(links);

    return card
}

export default loadMenu;