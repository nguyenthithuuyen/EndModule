let a = [1, 3, 5, 7, 9, 10];
let max = a[0];
let position = 0;
for (let i = 0; i < 10; i++) {
    if (a[i] > max) {
        max = a[i];
        position = i;
    }
}
position += 1;
alert('Giá trị lớn nhất trong mảng là ' + max + ' nằm ở vị trí thứ ' + position);