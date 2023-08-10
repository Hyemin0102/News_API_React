import { styled } from "styled-components";

const NewsItemBlock = styled.div`
width:30%;
display: flex;
flex-direction: column;
margin-bottom:30px;
@media screen and (max-width:768px){
    width: 100%;
  }

.newsitem-inner{
  padding: 20px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 4px 12px 30px 6px rgba(0,0,0,.09);
  &:hover{
    transition: all .3s ease;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    box-shadow: 4px 12px 20px 6px rgba(0,0,0,.18);
  }
  .category{
    img{
      width:36px;
      height: 36px;
      margin-right: 8px;
      vertical-align: top;
    }
    .txt{
      display: inline-block;
      position: relative;
      height: 34px;
      margin:1px 0 16px 0;
      padding: 0 13px;
      border-radius: 13px;
      font-size: 13px;
      line-height: 34px;
      background-color: #eee;
      vertical-align: top;
      &::before{
        position: absolute;
        top: 0;
        left: -4px;
        width: 16px;
        height: 16px;
        background: url("./말풍선.svg");
        content: "";
      }
    }

  }
  .thumbnail{
  margin: 0 auto 16px 0;
  max-width:400px;
  img{
    display: block;
    width: 100%;
    object-fit: cover;
  }
}
.contents{
  h3{
    margin:0 0 16px 0;
    word-break: keep-all;
    text-align: left;
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
}

`;
const NewsItem = ({article, category}) =>{ //NewsList에서 props로 article 받아옴
  //api로 받아온 데이터 중 title, description, url, urlToImage 필요
  const {title, description, url, urlToImage} = article;

  return(
    <NewsItemBlock>
      <div className="newsitem-inner">
        <div class="category">
          <span className="txt">{category}</span>
        </div>
        {urlToImage && (
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail"/>
            </a>
          </div>
        )}
        <div className="contents">
          <h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </NewsItemBlock>
  )
};

export default NewsItem;