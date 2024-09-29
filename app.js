const question = '1+1=?'
const answers = [
  '1',
  '4',
  '3',
  '2'

];
const corect = '2';
const $button = document.getElementsByTagName('button')
document.getElementById('jsquestion').textContent = question;
let ButtonIndex = 0;
let Buttonlength = $button.length;
while (ButtonIndex < Buttonlength) {
  $button[ButtonIndex].textContent = answers[ButtonIndex];
  ButtonIndex++;
}
const click = (e) => {
  if (corect == e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }

}
let clickIndex = 0;
while (clickIndex < Buttonlength) {
  $button[clickIndex].addEventListener('click', (e) => {

    click(e);

  });

  clickIndex++;
}
