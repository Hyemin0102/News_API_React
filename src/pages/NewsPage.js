import {useParams} from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Header from '../components/Header';

const NewsPage = () =>{
  const params = useParams();
  const category = params.category || 'all';
  
  return(
    <div className='wrap'>
      <Header />
      <Categories />
      <NewsList category={category} />
    </div>
  )
};

export default NewsPage;