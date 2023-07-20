import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./home.scss"
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
// import React from 'react';

const Home = () => {
  return <div className="home">
      <Navbar/>
      <Featured />
      <List/>
      <List/>
      <List/>

      
  </div>;
};

export default Home;
