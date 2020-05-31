import { Component } from './component.js';
import {MiniCardSingleton} from './popupSingleton.js'
import { DataSet } from './DataSet.js';

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
        this.birthDate = new Date(params.birthDate);
        this.edu = params.university;
        this.id = params.id;
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
                <button class="button"><alt="Удалить">Удалить</button>
             </article>
            `
    }

    afterMount() {

        this.container.addEventListener('click', (event) => {
            this.openCard(this.id, event.target);
        });

        this.container.querySelector('button').addEventListener('click',(event) => {
            this.deletePerson(event);
        });
    }

    openCard(id, target) {

        MiniCardSingleton.openCard(document.querySelector('.page'),  id);    
    }


    unmount() {
        this.container.remove();
     }

    deletePerson(event){

        event.stopPropagation();
            
        let dataset = new DataSet({
            object: 'person',
        });

       return dataset.delete(this.id)
        .then(()=> this.container.remove())
        .catch((error)=>console.log(error)
         );
    }

}
