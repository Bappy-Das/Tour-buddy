// import logo from './logo.svg';
import './App.css';
import Banner from './component/Banner/Banner';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
