import { PersonFactory } from './PersonFactory.js';
import { Component } from './component.js';
import { DataSet } from './DataSet.js';

export class School extends Component {

    constructor(options) {
        super(options);
        this.persons = [];
        this.currentPage = 1;
        this.limit = 3;
        this.totalPage = 2;
    }

    beforeMount() {

        let dataset = new DataSet({
            object: 'person',
        });

        return dataset.list(this.currentPage, this.limit)
            .then((response) => {
                response.forEach((item) => {
                    this.addPerson(item);
                });
            })
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

        return `
            <section class="section">
                <div class="list"></div>
                <nav class="navigation">
                    <button class="prev"><<</button>
                    <button class="next">>></button>
                </nav>
            </section>
        `;
    }

    afterMount() {

        this.setList();

        this.container.querySelector('.prev').addEventListener('click', (event) => {
            this.prevPage(event);
        });
        this.container.querySelector('.next').addEventListener('click', (event) => {
            this.nextPage(event);
        });

    }

    setList() {
        this.container.querySelector('.list').innerHTML = '';
        this.persons.forEach(item => item.mount(this.container.querySelector('.list')));
    }

    nextPage(event) {

        event.stopPropagation();

        // totalPage забито хардкодом потому что не нашла как получить от API общее количество страниц,
        // а делать полную выборку из БД для расчета - так себе идея 
        if (this.currentPage < this.totalPage) {
            let dataset = new DataSet({
                object: 'person',
            });

            this.persons.forEach((item) => item.unmount())
            this.persons.length = 0;
            return dataset.list((++this.currentPage), this.limit)
                .then((response) => {
                    response.forEach((item) => {
                        this.addPerson(item);
                    });
                    this.setList();
                })
        }
    }

    prevPage(event) {

        event.stopPropagation();

        if (this.currentPage > 1) {
            let dataset = new DataSet({
                object: 'person',
            });

            this.persons.forEach((item) => item.unmount())
            this.persons.length = 0;

            return dataset.list((--this.currentPage), this.limit)
                .then((response) => {
                    response.forEach((item) => {
                        this.addPerson(item);
                    });
                    this.setList();
                })
        }



    }


}
