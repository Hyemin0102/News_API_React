import styled, { css } from "styled-components";
import {NavLink} from 'react-router-dom';

const categoriesArr = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  },
];



const CategoriesBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  max-width: 1296px;
  margin:0 auto;
  list-style:none;

    li{
      display: inline-block;
      margin: 10px 12px 0 0;
      @media screen and (max-width: 768px) {
        display: flex;
      }
    }
`;

const Category = styled(NavLink)`
  display: block;
  height: 44px;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 16px;
  line-height: 43px;
  letter-spacing: -.5px;
  background-color: #eee;
  cursor: pointer;
  text-decoration: none;
  color: inherit;


  &.active{
    font-weight: 700;
    background-color: #000;
    color: #fff;
  }

  & + &{
    margin-left: 1rem;
  }
`;

const Categories = () =>{
  return(
      <CategoriesBlock>
        {categoriesArr.map(c =>(
          <li>
            <Category 
              key={c.name}
              className={({isActive})=>(isActive ? 'active' : undefined)}
              to={c.name === 'all' ? '/' : `/${c.name}`}
              >{c.text}
            </Category>
          </li>
        ))}
      </CategoriesBlock>
  )
};

export default Categories;