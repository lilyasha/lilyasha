import React from 'react';
import {Header, School} from './componentsLib.js';


class App extends React.Component{
      constructor(container){
        super(container);
        this.container = container;
        this.School = new School();
        this.Header = new Header();
      }

      render(){

        return <div> <div>
             <Header title = 'Tensor School'  description= 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'/>
               </div>
               <div><School/>
               </div>
        </div>
      }

}

export default App;