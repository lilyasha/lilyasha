import {Student} from './Student.js';
import {Teacher} from './Teacher.js';

export class PersonFactory {

    static TYPES = {
        student:0,
        teacher:1
    }

    static createPerson(params, type) {
        if (type === PersonFactory.TYPES.student||0) {
            return new Student(params);
        }

        if (type === PersonFactory.TYPES.teacher||1) {
            return new Teacher(params);
        }
    }

}
