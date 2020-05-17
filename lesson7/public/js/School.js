import {PersonFactory} from './PersonFactory.js';

export class School {

    constructor() {
        this.persons = [];
    }

    addPerson(personData) {

        const person = PersonFactory.createPerson(personData, personData.type);
        const block = person.render();
        const personBlock = appendPersonBlock(block);
    
        personBlock.addEventListener('click', (event) => {
            openCard(event.currentTarget);
        });
        personBlock.querySelector('.close').addEventListener('click', (event) => {
            event.stopPropagation();
            personBlock.querySelector('.card-mini').classList.toggle('hidden', true);
        });

        this.persons.push(person)
    }

    deletePerson(person) {
        this.persons.slice(this.persons.indexOf(person), 1);
    }

    getPersonByName(name) {
        return this.persons.find((person) => person.name === name);
    }

}

function appendPersonBlock(element) {

    const section = document.querySelector('.section');

    section.appendChild(element);
    return section.lastElementChild;

}

function openCard(currentTarget) {

    document.querySelectorAll('.card-mini').forEach((el) => el.classList.toggle('hidden', true));
    currentTarget.querySelector('.card-mini').classList.toggle('hidden', false);
}