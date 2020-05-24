import {Person} from './Person.js';

export class Teacher extends Person {

    constructor(params) {
        super(params);
        this.position = params.position;
    }

    get studyInfo() {
        return `${this.edu || 'Университет'}, должность ${this.position}.`;
    }

}
