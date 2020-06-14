import {MiniCard} from './MiniCard.js';
import { ComponentFactory } from './ComponentFactory.js';

export class MiniCardSingleton {
    static _instance = null;

    static getInstance() {
        if (!MiniCardSingleton._instance) {
            const factory = new ComponentFactory();
            MiniCardSingleton._instance = factory.create(MiniCard, {});
        }
        return MiniCardSingleton._instance;
    }

    static openCard(container, id) {
        const inst = MiniCardSingleton.getInstance();
        if (!inst.container) {
            inst.mount(container, null, {id})
        } else {
            inst.update({id})
        }
    }
}