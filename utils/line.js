import point from './point.js';

function line() {
  if (arguments.length === 4) {
    return [
      point(arguments[0], arguments[1]),
      point(arguments[2], arguments[3])
    ];
  }
  return [
    arguments[0],
    arguments[1],
  ];
}

export default line;
