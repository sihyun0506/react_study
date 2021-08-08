import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // ES6 destructing 문법 - array, object에 있던 자료를 변수에 쉽게 담을 때 사용
  var [x,y] = [10, 100];
  // state : 변수대신 쓸 수 있는 데이터 저장 공간
  // 웹앱처럼 쓰기 위해선 자주 바뀌는 데이터(게시글 이름 등)를 저장할 때, 반드시 변수 대신 state를 사용해야함
  // 왜냐하면 변경 사항 있을 때
  // -> 변수에 데이터 저장하면 새로고침이 필요
  // -> state에 저장시 HTML이 자동으로 재렌더링 됨
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [good, increaseGood] = useState(0);
  let posts = '강남 고기 맛집';

  function titleChange2(){
    // react 대 원칙 : 값변경할 때, 1.딥카피 2.카피본수정 3.변경함수(수정본)
    var newArray =  [...title];
    newArray[0] = '여자 코트 추천';
    titleChange( newArray );
  }

  function sortTitle(){
    var newArray = [...title];
    var temp = newArray[0];
    newArray[0] = newArray[1];
    newArray[1] = temp;
    titleChange( newArray );
  }

  let nameStyle =  {color : 'skyblue', fontSize : '30px'};
  // document.getElementById().innerHTML = '';
  function func(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
          <div style={ nameStyle }>
            <div>개발 Blog</div>
          </div>
      </div>
      <button onClick={ sortTitle }>소트</button>
      <button onClick={ titleChange2 }>여자</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ ()=>{ increaseGood(good + 1) } }>👍</span> {good} </h3>
        <p>8월 5일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>8월 5일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>8월 5일 발행</p>
        <hr/>
      </div>
      {/* <h4> { posts } </h4> */}
      {/* <img src={ logo }/> */}
      {/* <h4> { func() } </h4> */}
    </div>
  );
}

export default App;
