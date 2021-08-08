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

      {/* 많은 HTML을 한 단어로 줄여서 쓸 수 있는 방법 => 컴포넌트 (리액트의 장점!!)
        1. 사이트 내에서 반복적으로 출현하는 것들을 컴포넌트로
        2. 자주 변경되는(재랜더링이 많이 일어나는) HTML UI 들은 컴포넌트로 하면 성능 올라감
        3. 페이지를 만들때도 컴포넌트로
       장점   : 컴포넌트 안에 컴포넌트 만드는 등, HTML을 묶어서 '관리' 가능
       단점   : state 를 사용할 때 복잡해짐 다른 컴포넌트의 state를 가져올 수 없음.
                -> state를 활용하고 싶은 컴포넌트에 데이터를 전달 해줘야함
                (상위 컴포넌트의 state 쓰려면 props 문법이용해야함)
       주의점 : 이름의 시작은 대문자! 
                return()안에는 하나의 태그만 ex. <div></div>, <></> <-프레그먼트
                컴포넌트 만드는 위치는 function App() 과 나란히! 사실 function App()도 컴포넌트
      */}
      <Modal></Modal>
      <Modal/>


      {/* <h4> { posts } </h4> */}
      {/* <img src={ logo }/> */}
      {/* <h4> { func() } </h4> */}
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>title</h2>
      <p>date</p>
      <p>context</p>
  </div>
  )
}

export default App;
