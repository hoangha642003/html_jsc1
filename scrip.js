let width = 9;
let height = 9;

tamgiacvuong1();
function tamgiacvuong1() {
  for (let index = 0; index < width; index++) {
    for (let j = 0; j <= index; j++) {
      document.write('*');
    }
    document.write('</br> ');
  }
}
document.write('------------</br>');

tamgiacvuong2();
function tamgiacvuong2() {
  for (let index = 0; index < width; index++) {
    for (let j = 0; j < height; j++) {
      if (index <= j) {
        document.write('*');
      }
    }
    document.write('</br> ');
  }
}
tamgiacvuong3();
function tamgiacvuong3() {
  let middle = parseInt(width / 2);
  console.log(middle);
  for (let index = 0; index < width; index++) {
    let middleNext = middle + index;
    let middlePre = middle - index;
    if (index < middle + 1) {
      for (let j = 0; j < height; j++) {
        if (j >= middlePre && j <= middleNext) {
          // i = 0 | 2
          // i = 1 // 123
          // i =2 // 01234
          document.write('*');
        } else {
          document.write('-');
        }
      }
      document.write('</br> ');
    }
  }
}
