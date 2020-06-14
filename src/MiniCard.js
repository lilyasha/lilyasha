import { Component, DataSet } from './componentsLib.js';

export class MiniCard extends Component {

    constructor(options) {
        super(options);
        this.id = options.id;
    }

    getData() {
        let dataset = new DataSet({
            object: 'person',
        });

        // получили все данные
        return dataset.read(this.id)
            .then((response) => {
                this.options = response;
            });
    }

    beforeMount(options) {
        this.id = options && options.id;
        return this.getData();
    }

    beforeUpdate(options) {
        if (this.id !== options.id) {
            this.id = options && options.id;
            return this.getData();
        }
    }

    render() {
        return `<div class="card-mini hidden">
    <div class="close"></div>
    <div class="card-mini-info">
        <div class="card-profile">
            <p class="card-mini-fio" title="${this.options.fullName}">${this.options.fullName} </p>
            <div class="card-row">
                <p class="card-subtitle">День рождения</p>
                <p class="birthday" title="${this.options.birthDate}">${this.options.birthDate}</p>
            </div>
         <div class="card-row">
            <p class="card-subtitle">Был в сети</p>
            <p  title="${new Date(this.options.active)}">${new Date(this.options.active)}</p>
        </div>
        <div class="card-row">
        <p class="card-subtitle">Телефон</p>
        <p  title="${this.options.phone}">${this.options.phone}</p>
          </div>
            <div class="card-row">
                <p class="card-subtitle">Университет</p>
                <p class="card-mini-study" title="${this.options.university}">${this.options.university} </p>
            </div> 
        </div>
        <div><img class="card-mini-info-img" src="${this.options.photoUrl}" alt="Аватар ${this.options.photoUrl}" /></div>
      </div>`
    }

    afterMount() {

        this.container.addEventListener('click', (event) => {
            this.closeCard();
        });


    }

    afterUpdate() {

        this.container.addEventListener('click', (event) => {
            this.closeCard();
        });
    }

    closeCard(){
       this.unmount();
    }

}