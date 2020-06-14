import React from 'react';
import {MiniCardSingleton} from './popupSingleton.js'
import { DataSet } from './DataSet.js';

const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

export class Person extends React.Component{
    constructor(params) {
        super(params);
        this.type = params.type;
        this.name = params.name;
        this.fullName = params.fullName;
        this.ava = params.photoUrl;
        this.birthDate = new Date(params.birthDate);
        this.edu = params.university;
        this.id = params.id;
        this.MiniCardSingleton = new MiniCardSingleton
    }

    getType() {
        return this.type
    }

    getName() {
        return this.name
    }

    get birthDateStr() {
        let today = new Date();
        let year = today.getFullYear();
        return `${this.birthDate.getDate() || '00'} ${(months[this.birthDate.getMonth() || 0])},  ${year - this.birthDate.getFullYear()} лет`;
    }

    get studyInfo() { }

    render() {

        return <div > <article className="user-info"  onClick = {this.openCard.bind(this)} >
                <img className="user-info-img" src= {this.props.photoUrl} alt= {this.fullName}/>
                <p className="fio ellipsis" title={this.fullName}>{this.props.fullName} </p>
                <p className="edu" title={this.studyInfo}>{this.props.studyInfo} </p>
                <button className="button"  onClick = {this.deletePerson.bind(this)} alt="Удалить">Удалить</button>
             </article>
             </div> 
    }

     openCard(event) {

        MiniCardSingleton.openCard(document.querySelector('.page'),  this.id);    
    }

    deletePerson(event){
        event.stopPropagation();
            
        let dataset = new DataSet({
            object: 'person',
        });

       return dataset.delete(this.id)
       .then(()=> this.props.deleteCallback(this.id))
       .catch((error)=>console.log(error)
       );
    }

    }

