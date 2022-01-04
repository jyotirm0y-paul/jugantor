import logo from './logo.svg';
import './App.css';
import './test.css'
import TopHeader from './TopHeader/TopHeader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import BackToTop from './BackToTop/BackToTop';
import Test from './Test/Test';

function App() {
  return (
    <>
    <TopHeader/>
    <Header/>
    <div class="spacebar"></div>
    <Main/>
    <div className="d-print-none">
    <Footer/>
    <BackToTop/>
    </div>
    {/* <Test/> */}
    </>
  );
}

export default App;
