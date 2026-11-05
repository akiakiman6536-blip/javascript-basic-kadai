//　変数numに値を設定
let num = 45;

// numの値がどの倍数となるかを判定
if (num % 3 === 0) {
   if (num % 5 === 0) {
    // numの値が3と5の倍数である場合の処理
    console.log('3と5の倍数です');
   } else {
  // numの値が3の倍数である場合の処理
    console.log('3の倍数です');
   }

} else if (num % 5 === 0) {
  // numの値が5の倍数である場合の処理
    console.log('5の倍数です');
} else {
    // numの値が3でも5でもない場合の処理
    console.log(num);
}