/**
 *  Функция выполняет следующие действия:
 *1. Создать массив arr1 из 100 элементов и заполнить его числами от 1 до 100 в случайном порядке. Каждое число должно встречаться в массиве ровно один раз.
 *2. Создать массив arr2, который формируется из массива arr1 следующим образом:
 *первым элементом нового массива становится последний элемент массива arr1, вторым элементом - предпоследний, и т.д.
 *3. Создать третий  массив arr3, который формируется как разность соответствующих элементов массива arr1 и arr2.
 *4. Для третьего массива посчитать среднее арифметическое значение всех элементов.
 */
function createArr() {

  // Массив из 100 элементов, значения уникальны, заполнены в случайном порядке. 
  const arr1 = shuffle((Array.from({length: 100}, (v, i) => i + 1)));
  // Массив, сформированный на основании arr1, но значения в обратном порядке
  const arr2 = [...arr1].reverse();
  // Массив, сформированный на основании разности значений элеметов массивов arr1 и arr2.
  const arr3 = arr1.map((num, index) => num  - arr2[index]);
  
  // Среднее арифметическое значение всех элементов arr3.
  return averageArr3 = arr3.reduce((sum, item) => sum + item, 0) / arr3.length;

}

/**
* Функция принимает на вход массив с произвольной сортировкой
* и возвращает массив, отсортированный в случайном порядке.
* @param {Array} arr1 
* 
* @returns {Array} arr1
*/
function shuffle(arr1) {

  let currentIndex = arr1.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr1[currentIndex];
    arr1[currentIndex] = arr1[randomIndex];
    arr1[randomIndex] = temporaryValue;
  }

  return arr1;
}


createArr();
