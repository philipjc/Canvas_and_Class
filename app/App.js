import Main from './Main';
import Square from './Square';

let component = new Main();
let square = new Square(10, 10, 50, 50, 'plum');

let pageElements = [];

let mainHeading = component.make('Hello World', 'h1', 'h1');
pageElements.push(mainHeading);
let section = component.make('New Section', 'section', 'section');
pageElements.push(section);
let canvas = component.make('New canvas', 'canvas', 'canvas');
pageElements.push(canvas);
let addSquare = component.make('Add Square', 'button', 'add-button');
pageElements.push(addSquare);
let deleteSquare = component.make('Delete Square', 'button', 'delete-button');
pageElements.push(deleteSquare);
let moveSquareRight = component.make('Move Right', 'button', 'move-right-button');
pageElements.push(moveSquareRight);

pageElements.forEach((element) => {
  run(element);
});

function run(piece) {
  let app = document.createElement('div');
  document.body.appendChild(app);
  app.appendChild(piece);
};


addSquare.addEventListener('click', (e) => {
  square.draw();
});
moveSquareRight.addEventListener('click', (e) => {
  square.moveRight();
});
deleteSquare.addEventListener('click', (e) => {
  square.deleteSquare();
  deleteSquare.removeEventListener('click');
});

// square.draw();
// square.deleteSquare();
