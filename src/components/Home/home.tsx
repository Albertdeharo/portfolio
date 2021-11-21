import Navbar from '../Navbar/navbar';
import Card from '../Card/card';
import Card2 from '../Card/card2';
import './../Home/home.scss';

const Home = () => (
    <div className="home-class">
      <Navbar/>
      <Card/>
      <Card2/>
    </div>
);

export default Home;