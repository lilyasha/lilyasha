class PersonFactory {

    static TYPES = {
        student:0,
        teacher:1
    }

    static createPerson(params, type) {
        if (type === PersonFactory.TYPES.student) {
            return new Student(params);
        }

        if (type === PersonFactory.TYPES.teacher) {
            return new Teacher(params);
        }
    }

}

const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

const personsArr = [
    {
        fullName: 'Маша Иванова',
        university: 'УГАТУ',
        course: 2,
        birthDate: new Date(2000, 01, 1),
        photoUrl: 'img/ava03.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Иван Петров',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(1999, 04, 1),
        photoUrl: 'img/ava01.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Джейсон Стэйтем',
        university: 'УГАТУ',
        course: 1,
        birthDate: new Date(1959, 05, 1),
        photoUrl: 'img/ava06.jpg',
        type: PersonFactory.TYPES.teacher,
        position: 'доцент'
    },
    {
        fullName: 'Кадыр Рамзанов',
        university: 'ДГТУ',
        course: 4,
        birthDate: new Date(1959, 04, 1),
        photoUrl: 'img/ava04.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Анна Рамзанова',
        university: 'ДГТУ',
        course: 3,
        birthDate: new Date(1999, 06, 1),
        photoUrl: 'img/ava05.jpg',
        type: PersonFactory.TYPES.student
    },
    {
        fullName: 'Елизавета Иванченко',
        university: 'ДГТУ',
        course: 4,
        birthDate: new Date(2001, 12, 1),
        photoUrl: 'img/ava02.jpg',
        type: PersonFactory.TYPES.student
    }
];

const templateCard = document.querySelector('.template-card').content;
const section = document.querySelector('.section');
const minicard = document.querySelector('.card-mini');

class School {

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

class Person {
    constructor(params) {
        this.type = params.type;
        this.name = params.name;
        this.fullName = params.fullName;
        this.ava = params.photoUrl;
        this.birthDate = params.birthDate;
        this.edu = params.university;
    }

    getType() {
        return this.type
    }

    getName() {
        return this.name
    }

    get birthDateStr() {
        var today = new Date();
        var year = today.getFullYear();
        return `${this.birthDate.getDate() || '00'} ${(months[this.birthDate.getMonth() || 0])},  ${year - this.birthDate.getFullYear()} лет`;
    }

    get studyInfo() { }

    render() {
        const element = templateCard.cloneNode(true);
        const miniCardElement = minicard.cloneNode(true);

        element.querySelector('.fio').innerText = this.fullName;
        element.querySelector('.edu').innerText = this.studyInfo;
        element.querySelector('.user-info-img').setAttribute("src", this.ava);
        element.querySelector('.fio').setAttribute("title", this.fullName);
        element.querySelector('.edu').setAttribute("title", this.studyInfo);
        miniCardElement.querySelector('.card-mini-fio').innerText = this.fullName;
        miniCardElement.querySelector('.birthday').innerText = this.birthDateStr;
        miniCardElement.querySelector('.card-mini-study').innerText = this.studyInfo;
        miniCardElement.querySelector('.card-mini-info-img').setAttribute("src", this.ava);
        element.querySelector('.user-info').appendChild(miniCardElement);
        return element;
    }

}

class Student extends Person {

    constructor(params) {
        super(params);
        this.course = params.course;
    }

    get studyInfo() {
        return `${this.edu || 'Университет'}, ${this.course} курс`;
    }

}

class Teacher extends Person {

    constructor(params) {
        super(params);
        this.position = params.position;
    }

    get studyInfo() {
        return `${this.edu || 'Университет'}, должность ${this.position}.`;
    }

}

const school = new School();

personsArr.forEach((item) => {
    school.addPerson(item);
}
);

function openCard(currentTarget) {

    document.querySelectorAll('.card-mini').forEach((el) => el.classList.toggle('hidden', true));
    currentTarget.querySelector('.card-mini').classList.toggle('hidden', false);
}

function appendPersonBlock(element) {

    section.appendChild(element);
    return section.lastElementChild;

}



