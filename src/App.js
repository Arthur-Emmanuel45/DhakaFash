import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    // <div className="App">
    //   <SignUpPage />
    // </div>
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <HomePage></HomePage>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;