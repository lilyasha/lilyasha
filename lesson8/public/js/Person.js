import { Component } from './component.js';

const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

export class Person extends Component {
    constructor(params) {
        super(params);
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

        return `
          <article class="user-info">
                <img class="user-info-img" src="${this.ava}" alt="Аватар ${this.fullName}"/>
                <p class="fio ellipsis" title="${this.fullName}">${this.fullName} </p>
                <p class="edu" title="${this.studyInfo}">${this.studyInfo} </p>
                <div class="card-mini hidden">
                <div class="close"></div>
                <div class="card-mini-info">
                    <div class="card-profile">
                        <p class="card-mini-fio" title="${this.fullName}">${this.fullName} </p>
                        <div class="card-row">
                            <p class="card-subtitle">День рождения</p>
                            <p class="birthday" title="${this.birthDateStr}">${this.birthDateStr}</p>
                        </div>
                        <div class="card-row">
                            <p class="card-subtitle">Университет</p>
                            <p class="card-mini-study" title="${this.studyInfo}">${this.studyInfo} </p>
                        </div> 
                    </div>
                    <div><img class="card-mini-info-img" src="${this.ava}" alt="Аватар ${this.fullName}" /></div>
                </div>
             </article>
            `
    }

    afterMount() {

        this.container.addEventListener('click', (event) => {
            openCard(event.target);
        });
    }

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
