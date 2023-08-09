import { styled } from "styled-components";

const NewsItemBlock = styled.div`
display: flex;
.thumbnail{
  margin-right: 1rem;
  img{
    display: block;
    width:160px;
    height: 100px;
    object-fit: cover;
  }
}
.contents{
  h3{
    margin:0;
    a{color: black;
      text-decoration:none;
    }
  }
  p{
    margin:0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
  }
}
& + & {
  margin-top: 3rem;
}
`;
const NewsItem = ({article}) =>{ //NewsList에서 props로 article 받아옴
  //api로 받아온 데이터 중 title, description, url, urlToImage 필요
  const {title, description, url, urlToImage} = article;

  return(
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferer">
            <img src={urlToImage} alt="thumbnail"/>
          </a>
        </div>
      )}
      <div className="contents">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )
};

export default NewsItem;