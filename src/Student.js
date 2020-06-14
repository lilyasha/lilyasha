import {Person} from './Person.js';

export class Student extends Person {

    constructor(params) {
        super(params);
        this.course = params.course;
    }

    get studyInfo() {
        return `{this.edu || 'Университет'}, {this.course} курс`;
    }

}
