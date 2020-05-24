import { PersonFactory } from './PersonFactory.js';
import { Component } from './component.js';

const personsArr = [
    {
        fullName: 'Маша Иванова',
        university: 'УГАТУ',
        course: 2,
        birthDate: new Date(2000, 0, 1),
        photoUrl: './img/ava03.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Иван Петров',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(1999, 1, 1),
        photoUrl: './img/ava01.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Джейсон Стэйтем',
        university: 'УГАТУ',
        course: 1,
        birthDate: new Date(1959, 2, 1),
        photoUrl: './img/ava06.jpg',
        type: PersonFactory.TYPES.teacher,
        position: 'доцент'
    },
    {
        fullName: 'Кадыр Рамзанов',
        university: 'ДГТУ',
        course: 4,
        birthDate: new Date(1959, 3, 1),
        photoUrl: './img/ava04.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Анна Рамзанова',
        university: 'ДГТУ',
        course: 3,
        birthDate: new Date(1999, 4, 1),
        photoUrl: './img/ava05.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Елизавета Иванченко',
        university: 'ДГТУ',
        course: 4,
        birthDate: new Date(2001, 11, 1),
        photoUrl: './img/ava02.jpg',
        type: PersonFactory.TYPES.student
    }
];


export class School extends Component {

    constructor(options) {
        super(options);
        this.persons = [];
    }

    // аналог загрузки данных
    beforeMount() {
        personsArr.forEach((item) => {
            this.addPerson(item);
        }
        );
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

    render() {

        return '<section class="section"> </section>';
    }

    afterMount(){

        this.persons.forEach(item => item.mount(this.container));
    }

}
