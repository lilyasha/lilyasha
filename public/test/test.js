
import { Person, Student, PersonFactory, Teacher, Header, ComponentFactory } from '../js/componentsLib.js';

describe("Test block", function () {
    'use strict';

    it('Тестируем геттер даты рождения', function () {
        // arrange
        let item =
        {
            birthDate: new Date(2000, 0, 1),
        };

        const person = new Person(item);
        //assert
        assert.equal(person.birthDateStr, '1 Января,  20 лет');
    });

    it('Тестируем рендер Header`а', function () {


        let title = 'Tensor School';
        let description = 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.';

        const factory = new ComponentFactory();
        const head = factory.create(Header, {
            title,
            description
        });

        let ex =  `
        <div>
         <header class="header">
            <h1 class="logo" alt="${title}">${title}</h1>
         </header>

         <h2 class="description" title="${description}">${description}</h2>
        </div>
    `;

        let renderedHead = head.render({
            title,
            description
        });

    assert.equal(renderedHead.replace(/ /g, ''), ex.replace(/ /g, ''));
      });

      it('Тестируем геттер информации об образовании для Teacher', function () {
        // arrange
       let item = { 
          university: 'Угату',
            position:  'Доцент'
        };

        const teacher = new Teacher(item);

        //assert
        assert.equal(teacher.studyInfo, 'Угату, должность Доцент.');
    });


    it('Создание объекта студента', function() {
            // arrange
            let item = {
                type: 0
            };

            // act
            const stud = PersonFactory.createPerson(item, item.type);

            //assert
            assert.isTrue(stud instanceof Student);
        
     });

     it('Тестируем unmount объекта Person', function() {
        // arrange
        let item = 
        {
            id: '1',
            type: 0,
            fullName: 'Женя Серова',
            birthDate: '2000, 0, 1',
            photoUrl: '../img/ava01.jpg'
        };
        let person = new Person(item);
        person.render();
        let elem = document.createElement('div');
        person.mount(elem,'beforeend');
        
        // act
        person.unmount();
        
        //assert
        assert.equal(elem.innerHTML, '');
    });
  
    })

mocha.run();
