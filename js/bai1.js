let score = [1, 3, 5, 7, 9, 10];
let max = score[0];
let position = 0;
for (let i = 0; i < 10; i++) {
    if (score[i] > max) {
        max = score[i];
        position = i;
    }
}
position += 1;
alert('Điểm cao nhất là ' + max + ' nằm ở vị trí thứ ' + position);