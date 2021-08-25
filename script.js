function askForRadio(radio) {
  console.log('Su radio es: ' + radio);
}
askForRadio(4);

function calculateCircleArea(radio) {
  console.log('Su área es: ' + (Math.pow(radio, 2) * Math.PI).toPrecision(4) + ' cm2.');
}
calculateCircleArea(5);

function calculatePerimeterCircle(radio) {
  console.log('Su perímetro es: ' + (2 * Math.PI * radio).toPrecision(4) + ' cm.');
}
calculatePerimeterCircle(5);
