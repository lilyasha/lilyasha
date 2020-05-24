import { ComponentFactory } from './ComponentFactory.js';
import { Header} from './Header.js';
import { School} from './School.js';

const factory = new ComponentFactory();

const head = factory.create(Header, {
   title: 'Tensor School',
   description: 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'
});

const school = factory.create(School);

head.mount(document.querySelector('.page'));

school.mount(document.querySelector('.page'));