import {Student} from './Student.js';
import {Teacher} from './Teacher.js';

export class PersonFactory {

    static createPerson(params, type) {
        if (type === 0) {
            return new Student(params);
        }

        if (type === 1) {
            return new Teacher(params);
        }
    }

}
