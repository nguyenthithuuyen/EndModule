function tryRemoveFromArray(array, elem) {
    let index = array.indexOf(elem);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elem) {
            array.splice(index, 1);
        }
    }
}
let arr = [1, 2, 3, 4, 5,6,7];
document.getElementById('before').innerHTML = ("Mảng trước khi xóa :"+ arr.toString());
tryRemoveFromArray(arr, 5);
document.getElementById('after').innerHTML = ("Mảng sau khi xóa :"+ arr.toString());