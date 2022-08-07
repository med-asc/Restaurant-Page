function loadContact() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-heading');
    const heading = document.createElement('h2');
    heading.textContent = 'Contact us';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-content');
    
    const divInput1 = document.createElement('div');
    divInput1.classList.add('form-row');
    const divInput2 = document.createElement('div');
    divInput2.classList.add('form-row');
    const divInput3 = document.createElement('div');
    divInput3.classList.add('form-row');

    const label1 = document.createElement('label');
    label1.textContent = 'Name';
    label1.setAttribute('for', 'name');
    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'name');
    input1.setAttribute('id', 'name');

    const label2 = document.createElement('label');
    label2.textContent = 'Email';
    label2.setAttribute('for', 'email');
    const input2 = document.createElement('input');
    input2.setAttribute('type', 'email');
    input2.setAttribute('name', 'email');
    input2.setAttribute('id', 'email');

    const label3 = document.createElement('label');
    label3.textContent = 'Information';
    label3.setAttribute('for', 'email');
    const input3 = document.createElement('textarea');
    input3.setAttribute('name', 'information');
    input3.setAttribute('id', 'information');
    input3.setAttribute('cols', '30');
    input3.setAttribute('rows', '10');

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.textContent = 'Send';

    cardHeader.appendChild(heading);
    card.appendChild(cardHeader);

    cardBody.appendChild(divInput1);
    cardBody.appendChild(divInput2);
    cardBody.appendChild(divInput3);
    cardBody.appendChild(submitBtn);
    divInput1.appendChild(label1);
    divInput1.appendChild(input1);
    divInput2.appendChild(label2);
    divInput2.appendChild(input2);
    divInput3.appendChild(label3);
    divInput3.appendChild(input3);
    card.appendChild(cardBody);

    return card
}

export default loadContact;