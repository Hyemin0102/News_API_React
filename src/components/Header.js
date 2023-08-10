import styled from "styled-components";

const HeaderWrap = styled.div`
  border-bottom: 1px solid lightgray;
  .header-inner{
    max-width: 1296px;
    margin: 0 auto;
    line-height: 80px;
    padding-left: 20px;
.news-img{
  display: flex;
  align-items: center;

  img{width: 36px;
    height: 36px;
    margin-right: 7px;
  }
  strong{font-size: 1.2rem}
}
  }
`


const Header = () =>{
  return (
    <HeaderWrap>
      <div className="header-inner">
        <div className="news-img">
          <img src="news_img.webp"/>
          <strong>뉴스</strong>
        </div>
      </div>
    </HeaderWrap>
  )
}; 

export default Header; 