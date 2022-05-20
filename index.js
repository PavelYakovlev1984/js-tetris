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
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'x',],
  ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'x',],
  ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'x', 'x',],
  ],

  activeTetromino: {  //активная фигура    : так как бьект
    x: 3,
    y: 0,
    block: [
      ['o','x','o',],
      ['o','x','o',],
      ['x','x','o',],
    ]
  },

  moveLeft() {
    this.activeTetromino.x -= 1;
  },

  moveRight() {
    this.activeTetromino.x += 1;
  },

  moveDown() {
    this.activeTetromino.y -= 1;
  },

  rotateTetromino() {

  },

  viewArea() { //метод который будет возвращать арея(копирвать его?)
    const area = JSON.parse(JSON.stringify(this.area));  //скопировал, сначала сделал его стройкой , потом снва бьектов- анешним json.parse
  }
}


//--------------------отрисовка------------------
const SIZE_BLOCK = 40; //колонка
const container = document.querySelector('.container');

const canvas = document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);
canvas.width = SIZE_BLOCK * 10;
canvas.height = SIZE_BLOCK * 20;

const context = canvas.getContext('2d');//метод отрисовки создается один раз


  const showArea = area => {
  for (let y = 0; y < area.length; y++) {
      const line = area[y];
      
      for (let x = 0; x < line.length; x++) {
          const block = line[x];
          if (block === 'x') {
          context.fillStyle = 'tomato';
          context.strokeStyle = 'white';
          context.fillRect(x * SIZE_BLOCK, y  * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
          context.strokeRect(x * SIZE_BLOCK, y  * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
          }
      }
      
  }
      console.log(area.length);

 //метод fillRect чтото оттисовать по x (коорX, коорX, ширина, высота) rect-прямоугольник

}; //функция которая будет отрисовывать поле канвас

showArea(game.area);  //передали в функцию наше поле

