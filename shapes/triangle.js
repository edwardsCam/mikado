import point from './point.js';

function triangle() {
  if (arguments.length === 6) {
    return [
      point(arguments[0], arguments[1]),
      point(arguments[2], arguments[3]),
      point(arguments[4], arguments[5]),
    ];
  }
  return [
    arguments[0],
    arguments[1],
    arguments[2],
  ];
}

export default triangle;
