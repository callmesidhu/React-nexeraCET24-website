import './App.css';
import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer';
import CardSection1 from './Components/CardSection1';
import CardSection2 from './Components/CardSection2';
import CardSection3 from './Components/CardSection3';
import CardSection4 from './Components/CardSection4';

import SubContent from './Components/SubContent';

function App() {
  return (
  <div>
    <Header/>
    <SubContent/>
    <CardSection1/>
    <CardSection2/>
    <CardSection3/>
    <CardSection4/>
    <Footer/>
    
  </div>
  );
}
export default App;
