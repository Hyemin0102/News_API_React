import { styled } from "styled-components";
import NewsItem from "./NewsItem";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  max-width:1296px;
  margin: 0 auto;
  padding-bottom: 3rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width:768px){
    padding-left:1rem;
    padding-right:1rem;
  }
`;

const NewsList = ({category}) =>{
  const [loading, response, error] = usePromise(()=>{
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&pagesize=12&apiKey=c7a0fb7cf1d543cf9e122c4cad63dcc0`
    );
  },[category]);


  //대기중일때
  if(loading){
    return <NewsListBlock>대기 중입니다.</NewsListBlock>
  }

  //아직 response 값이 설정되지 않았을 때
  if(!response){
    return null;
  }

  //오류 발생 시
  if(error){
    return <NewsListBlock>에러 발생!!!!</NewsListBlock>
  }

  //받아온 데이터 중 response.data.articles 값
  const articles = response.data.articles;
  return(
    <NewsListBlock>
      {articles.map(article =>(
        <NewsItem key={article.url} article={article} category={category} />
      ))}
    </NewsListBlock>
  )
};

export default NewsList;