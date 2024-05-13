import { Outlet } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';
import Header from './Header';

function Root() {
  return (
    <div className="Wrapper">
     <Header />
      <div className='main'><Outlet /></div>
      <Footer />
    </div>
  );
}

export default Root;
