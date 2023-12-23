import './App.css';
import { Blog, Features, Footer, Header, Possibility, WhatAvenir } from './containers'
import { Brand, CTA, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAvenir />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
