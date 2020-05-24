const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

export class Person {
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

    renderPerson(element, miniCardElement) {

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

        this.domElement = element;
    }
}