const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
];

const studentArr = [
    {
       fullName: 'Маша Иванова',
       university: 'УГАТУ',
       course: 2,
       birthDate: new Date(2000, 01, 1),
       photoUrl: 'img/ava03.jpg'
   },
   {
       fullName: 'Иван Петров',
       university: 'МГУ',
       course: 4,
       birthDate: new Date(1999, 04, 1),
       photoUrl: 'img/ava01.jpg'
   },
   {
       fullName: 'Джейсон Стэйтем',
       university: 'УГАТУ',
       course: 1,
       birthDate: new Date(1959, 05, 1),
       photoUrl: 'img/ava06.jpg'
   },
   {
       fullName: 'Кадыр Рамзанов',
       university: 'ДГТУ',
       course: 4,
       birthDate: new Date(1959, 04, 1),
       photoUrl: 'img/ava04.jpg'
   },
   {
       fullName: 'Анна Рамзанова',
       university: 'ДГТУ',
       course: 3,
       birthDate: new Date(1999, 06, 1),
       photoUrl: 'img/ava05.jpg'
   },
   {
       fullName: 'Елизавета Иванченко',
       university: 'ДГТУ',
       course: 4,
       birthDate: new Date(2001, 12, 1),
       photoUrl: 'img/ava02.jpg'
   }
];

const templateCard = document.querySelector('.template-card').content;
const section = document.querySelector('.section');
const minicard = document.querySelector('.card-mini');


class Student {

    constructor(params) {
        this.fullName = params.fullName;
        this.edu = params.university;
        this.ava = params.photoUrl;
        this.course = params.course;
        this.birthDate = params.birthDate;
    }
    get birthDateStr() {
        var today = new Date();
        var year = today.getFullYear();
        return `${this.birthDate.getDate() || '00'} ${(months[this.birthDate.getMonth() || 0])},  ${year - this.birthDate.getFullYear()} лет`;
    }

    get studyInfo() {
        return `${this.edu || 'Университет'}, ${this.course} курс`;
    } 

    render() {
        const element         = templateCard.cloneNode(true);
        const miniCardElement = minicard.cloneNode(true);
    
        element.querySelector('.fio').innerText = this.fullName;
        element.querySelector('.edu').innerText = this.studyInfo;
        element.querySelector('.user-info-img').setAttribute("src", this.ava);
        element.querySelector('.fio').setAttribute("title", this.fullName);
        element.querySelector('.edu').setAttribute("title", this.studyInfo);
        miniCardElement.querySelector('.card-mini-fio').innerText = this.fullName;
        miniCardElement.querySelector('.birthday').innerText = this.birthDateStr;
        miniCardElement.querySelector('.card-mini-study').innerText = this.studyInfo;    
        miniCardElement.querySelector('.card-mini-info-img').setAttribute("src", this.ava);
        element.querySelector('.user-info').appendChild(miniCardElement);
        return element;
    }


}



studentArr.forEach((item) => {
    const student = new Student(item);
    const block = student.render();
    const studentBlock = appendStudentBlock(block);

    studentBlock.addEventListener('click', (event) => {
        openCard(event.currentTarget);
    });
    studentBlock.querySelector('.close').addEventListener('click', (event) => {
        event.stopPropagation();
        studentBlock.querySelector('.card-mini').classList.toggle('hidden', true); 
    });
}
);

function openCard(currentTarget){
    document.querySelectorAll('.card-mini').forEach((el) => el.classList.toggle('hidden', true)); 
    currentTarget.querySelector('.card-mini').classList.toggle('hidden', false); 
}

function appendStudentBlock(element){
    section.appendChild(element);
    return section.lastElementChild;

}



