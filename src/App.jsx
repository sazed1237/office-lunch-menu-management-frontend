import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Shared/Header';
import Footer from './Shared/Footer';


const App = () => {

  

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;