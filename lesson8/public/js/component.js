export class Component {
   'use strict';

   constructor(options) {
      this.options = options;
      this.container = undefined;
   }

   render() {
      return `<div></div>`;
   }

   /**
    * помещает верстку компонента в dom
    * @param {DOMElement} container контейнер в котором строится верстка, куда поместить
    * @param {String} position insertAdjacentElement позиция куда помесить, до, в, вконец, после
    */
   mount(container, position) {

      this.beforeMount();

      const newComponent = document.createElement('div');

      newComponent.innerHTML = this.render(this.options);

      this.container = newComponent.firstElementChild;

      container.insertAdjacentElement( position || 'beforeend', newComponent.firstElementChild);

      newComponent.remove();

      this.afterMount();
   }


   update() { }

   unmount() {
      this.beforeUnmount();

      this.removeContainer();

      this.afterUnmount();
   }

   removeContainer() {
      if (this.container) {
         this.container.remove();
         this.container = undefined;
      }
   }

   // прехук до монтирования
   beforeMount() {}

   // прехук после монтирования
   afterMount() {}

   // прехук до размонтирования
   beforeUnmount() {}

   // прехук после размонтирования
   afterUnmount() {}
}
