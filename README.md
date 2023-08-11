<div align="center">
  <img src="https://github.com/Hyemin0102/News_API_React/assets/128768462/f9b7aebd-ba35-48b2-87a0-cee3ef798dbf" width="80%"/>
</div>
# News_API
실시간 뉴스 데이터를 제공하는 외부 API를 연동한 뉴스 웹사이트입니다. 

## 🔎프로젝트 소개
한국의 실시간 뉴스 데이터를 제공하는 외부 API를 연동하여 카테고리 별로 제공하는 웹사이트로, 외부 API 연동을 위해 axios 라이브러리를 사용하였으며 Promise 비동기 작업을 처리하기 위해 async/await 구문을 사용하였습니다.

styled-components, sass 라이브러리로 스타일을 구현하였고, react-router-dom 를 활용해 SPA 프로젝트를 만들었습니다.


## ⏳개발 기간
2023.08.09 ~ 2023.08.10

## ⚙개발 환경
React, styled-components, react-router-dom, NewsApi, axios

## 🚩주요 기능
- 리액트 라우터를 활용한 페이지 이동
- styled-components를 활용한 active별 스타일 적용
- axios를 활용해 외부 API 데이터 활용(Promise async/await사용) -> 커스텀 훅으로 만들어 재사용성 높임
- 카테고리별 뉴스 데이터 따로 가져오기 가능


## 📌코드 리뷰
이번 프로젝트에서 가장 중요한 부분은 axios로 외부 api 데이터를 가져오는 것이었다. 
이 부분을 커스텀 훅으로 작성해 다른 소스에서도 사용 가능 할 수 있도록 만들었고, 로딩중, 완료 처리, 에러 처리를 관리한다.
```javascript
const usePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const process = async () =>{
      setLoading(true);
      try{
        const resolved = await promiseCreator();
        setResolved(resolved);
      }catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  // eslint-disable-next-line 
  },deps);

  return [loading,resolved,error];
};
```
usePromis 라는 커스텀 훅을 만들고 필요한 곳에 파라미터를 넣어 함수를 호출한다.
```javascript
const NewsList = ({category}) =>{
  const [loading, response, error] = usePromise(()=>{
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&pagesize=12&apiKey=c7a0fb7cf1d543cf9e122c4cad63dcc0`
    );
  },[category]);
```
++ api 데이터를 가져올 때 카테고리 부분을 변수처리 해주어 원하는 카테고리를 지정할 수 있도록 설정함

그리고 선택 된 카테고리는 스타일을 다르게 적용시키는데 이때 styled-components의 isActice 상태 정보를 활용해 간단하게 적용시켰다.
```javascript
const Category = styled(NavLink)`
  display: block;
  height: 44px;
  padding: 0 20px;
 //....생략

  &.active{
    font-weight: 700;
    background-color: #000;
    color: #fff;
  }
`;

const Categories = () =>{
  return(
      <CategoriesBlock>
        {categoriesArr.map(c =>(
          <li key={c.name}>
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
```


## 😊프로젝트를 마치며..
자바스크립트에서 외부 데이터를 가져올 때는 fetch를 주로 사용했었는데 리액트같은 프레임워크에선 axios를 더 많이 활용하는 것 같아 공부용으로 간단한 뉴스 뷰어 프로젝트를 구현해보았다.
비동기 작업에 대해 개념 정리가 많이 되었고, 특히 외부 데이터를 가져오는 함수를 커스텀훅으로 만들어 재사용성을 높이는 코드를 만드는 것이 재미있었다.

아쉬운 점은 내가 데이터를 가져온 newsapi.org 는 개인용으론 활용이 가능하지만 상업용으로 배포가 불가능해서 웹사이트 배포 시 제대로 연동이 되지 않았다. 로컬호스트로 확인했을 때는 작동이 잘 되기 때문에 이 부분은 좀 더 고민해서 로컬호스트를 외부접근이 가능하도록 설정을 하던지 다른 api를 연결해서 웹사이트 배포까지 완료될 수 있도록 방법을 더 찾아보아야겠다. 
