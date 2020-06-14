import { PersonFactory } from './PersonFactory.js';
import { DataSet } from './DataSet.js';

import React from 'react';

export class School extends React.Component{

    constructor(options) {
        super(options);
        this.persons = [];
        this.limit = 3;
        this.totalPage = 2;
        this.state = {persons: [],
            currentPage: 1
        };
        this.personFactory = new PersonFactory();
        this.dataset = new DataSet({
            object: 'person',
        });
    }

    componentDidMount() {

        this.dataset.list(this.state.currentPage, this.limit)
            .then((response) => {
                response.forEach((item) => {
                    this.addPerson(item);
                });
              //this.setState({persons: this.state.persons});
            })
    }

    addPerson(personData) {

        let person = this.personFactory.createPerson(personData, personData.type, this.deletePerson.bind(this));
        this.state.persons.push(person);
        this.setState({persons:this.state.persons});
    }

    deletePerson(id) {
        const person = this.state.persons.find(person => person.props.id === id);
        this.state.persons.splice(this.state.persons.indexOf(person), 1);
        this.setState({persons:this.state.persons});

    }

    getPersonByName(name) {
        return this.persons.find((person) => person.name === name);
    }

    render() {

        return <div> <section className="section">
                <div className="list">
                    {this.state.persons}
                </div>
                <nav className="navigation">
                <button className="prev" onClick = {this.prevPage.bind(this)}>Назад </button>
                <button className="next" onClick = {this.nextPage.bind(this)}>Вперед</button>
                </nav>
            </section>
            </div>
       
    }

    componentDidUpdate() {
        this.render();
     }


    nextPage(event) {

        event.stopPropagation();

        // totalPage забито хардкодом потому что не нашла как получить от API общее количество страниц,
        // а делать полную выборку из БД для расчета - так себе идея 
        if (this.state.currentPage < this.totalPage) {
            let dataset = new DataSet({
                object: 'person',
            });

           this.state.persons.length = 0;
            return dataset.list((++this.state.currentPage), this.limit)
                .then((response) => {
                    response.forEach((item) => {
                        this.addPerson(item);
                    });
                })
        }
    }

    prevPage(event) {

        event.stopPropagation();

        if (this.state.currentPage > 1) {
            let dataset = new DataSet({
                object: 'person',
            });

            this.state.persons.length = 0;

            return dataset.list((--this.state.currentPage), this.limit)
                .then((response) => {
                    response.forEach((item) => {
                        this.addPerson(item);
                    });
                })
        }



    }


}
