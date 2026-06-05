import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Các component Portfolio và Contact sẽ được ghép vào ở các bài sau
function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;