//---------------механика-----------------
const game = {    //обьект сдержащий всю игру, все его методы и тп
  area: [  //поле игры -массив o-пустая клеточка, x-заполненая клеточка
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',],
  ]
}


//--------------------отрисовка------------------
const SIZE_BLOCK = 30; //колонка
const container = document.querySelector('.container');

const canvas = document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);
canvas.width = SIZE_BLOCK * 10;
canvas.height = SIZE_BLOCK * 20;

const context = canvas.getContext('2d');//метод отрисовки создается один раз

const showArea = area => {
  console.log(area[0].length);

  context.fillStyle = 'tomato';
  context.fillRect(50, 100, 100, 60); //метод fillRect чтото оттисовать по x (коорX, коорX, ширина, высота) rect-прямоугольник

}; //функция которая будет отрисовывать поле канвас

showArea(game.area);  //передали в функцию наше поле

