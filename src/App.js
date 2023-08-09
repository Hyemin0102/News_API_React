import { useCallback, useState } from 'react';
import './App.css';
import axios from '../node_modules/axios/index';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import {Routes,Route} from 'react-router-dom';

/* //증가할 숫자, 콜백 함수 인자로 받음
function increase(number,callback){
  setTimeout(()=>{ //1초 후에 내부 코드 실행
    const result = number + 10;
    if(callback){
      callback(result);
  }
  },1000)
};
//콜백 안에 또 콜백, 콜백 지옥.. 지양해야함
console.log('작업 시작');
increase(0,result => {
  console.log(result);
  increase(result, result =>{
    console.log(result);
    increase(result, result =>{
      console.log(result)
      increase(result, result=>{
        console.log(result);
      })
    });
  });
}); */

/* function increase(number){
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const result = number + 10;
      //결과가 40까지만 출력되도록 오류 발생 
      if(result > 50){
        const e = new Error('50넘었음');
        return reject(e);
      }
      resolve(result); //number값에 +10 후 성공 처리
    },1000);
  });
  return promise;
}

async function runTasks(){
  try{
    let result = await increase(0);
    console.log('result',result);
    result = await increase(result);
    console.log('result1',result);
    result = await increase(result);
    console.log('result2',result);
    result = await increase(result);
    console.log('result3',result);
  } catch (e) {
    console.log('error',e)
  }
}

runTasks(); */

/* increase(0)
  .then(number => { //promise에서 resolve 된 값은 .then으로 받아옴
    console.log(number);
    return increase(number);//return을 또하면 다음에도 계속 .then으로 받아올 수 있음
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  }) */


function App() {

  return (
    <Routes>
      <Route path="/" element={<NewsPage />}/>
      <Route path="/:category" element={<NewsPage />}/>
    </Routes>
  );
}

export default App;
