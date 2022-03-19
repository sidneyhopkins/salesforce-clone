import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import WhatsNew from './components/WhatsNew';
import LearnProducts from './components/LearnProducts';
import Content from './components/Content';
import VirtualEvents from './components/VirtualEvents';
import NewSkills from './components/NewSkills';
import ExploreGroups from './components/ExploreGroups';
import DiscoverApps from './components/DiscoverApps';
import Updates from './components/Updates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <WhatsNew/>
      <LearnProducts/>
      <Content/>
      <VirtualEvents/>
      <NewSkills/>
      <ExploreGroups/>
      <DiscoverApps/>
      <Updates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
