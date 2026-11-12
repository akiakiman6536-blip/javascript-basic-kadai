// id="text"のHTML要素を取得し、定数に代入する
const text = document.querySelector('#text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // 変更前のテキストを出力する
console.log(text.textContent);
  // 取得したHTML要素のテキストを変更する
  text.textContent = 'ボタンをクリックしました';
});