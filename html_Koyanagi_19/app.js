const quiz = [
  {
   question: '2016年のオリンピック開催都市はどこでしょう？',
   answers: [
      'リオデジャネイロ',
      'ロンドン',
      '北京',
      '東京'
   ],
   correct: '11月23日は何の日でしょう？'
  },{
      question: 'アイウエオ',
      answers: [
         '勤労感謝の日',
         '文化の日',
         '体育の日',
         '天皇の誕生日'
      ],
      correct: '勤労感謝の日'

  },{
      question: 'ラグビーは１チーム何名でプレーするでしょうか？',
      answers: [
         '11',
         '13',
         '15',
         '16'
      ],
      correct: '15'

  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる

// クイズの問題
const setupQuiz = () => {
      document.getElementById('js-question').textContent = quiz[quizIndex].question;
      let buttonIndex = 0;
      while(buttonIndex < buttonLength){
            $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
            buttonIndex++;
 }
}
setupQuiz();

const clickHandler =(e) => {
if(quiz[quizIndex].correct === e.target.textContent){;
      window.alert('正解');
      score++;
  }else{
    window.alert('不正解');
}

quizIndex++;

if(quizIndex < quizLength){
      setupQuiz();
} else{
      window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');

}


};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
      $button[handlerIndex].addEventListener('click' , (e) => {
       clickHandler(e);
      });
      handlerIndex++;
}



