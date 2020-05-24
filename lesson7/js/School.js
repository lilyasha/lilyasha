import { PersonFactory } from './PersonFactory.js';

export class School {

    constructor() {
        this.persons = [];
    }

    addPerson(personData) {

        const person = PersonFactory.createPerson(personData, personData.type);
        this.persons.push(person)
    }

    deletePerson(person) {
        this.persons.slice(this.persons.indexOf(person), 1);
    }

    getPersonByName(name) {
        return this.persons.find((person) => person.name === name);
    }

    renderAll() {

        const templateCard = document.querySelector('.template-card').content;
        const minicard = document.querySelector('.card-mini');

        this.persons.forEach(item => item.renderPerson(templateCard.cloneNode(true), minicard.cloneNode(true)));

        const section = document.querySelector('.section');
        appendPersonBlock(section, this.persons);
    }
}

function appendPersonBlock(section, persons) {

    section.addEventListener('click', (event) => {
        openCard(event.target);
    });

    persons.forEach((item) => section.appendChild(item.domElement));

}

function openCard(target) {

    if (target.classList.contains('close')) {
        let elt = target.closest('.card-mini');
        if (elt) {
            elt.classList.toggle('hidden', true);
        }
        return;
    }

    let elt = target.closest('.user-info');
    if (elt) {
        document.querySelectorAll('.card-mini').forEach((el) => el.classList.toggle('hidden', true));
        elt.querySelector('.card-mini').classList.toggle('hidden', false);
    }

}
