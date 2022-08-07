function loadMenu() {
    const threeColumn = document.createElement('div');
    threeColumn.classList.add('three-columns');

    for (let i = 1; i < 4; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const hdiv = document.createElement('div');
        hdiv.classList.add('card-heading');
        const heading = document.createElement('h2');
        heading.textContent = 'Falafel ' + i;
        const bdiv = document.createElement('div');
        bdiv.classList.add('card-content');
        const lorem = document.createElement('p');
        lorem.textContent = 'Falafel, hummus, tahini, eggplant, tomato, red cabbage salad, mint, parsley';
        const links = document.createElement('div');
        links.classList.add('card-content');
        links.textContent = '95 SEK';
        
        hdiv.appendChild(heading);
        card.appendChild(hdiv);
        bdiv.appendChild(lorem);
        card.appendChild(bdiv);
        card.appendChild(links);
        threeColumn.appendChild(card);
    }

    return threeColumn
}

export default loadMenu;