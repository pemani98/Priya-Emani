import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
//import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import './styles.css'; // Optional for styling
import pdf from '/Users/padmavatiemani/Documents/Priya-Emani-Portfolio/public/Padmavati-Emani-CP.pdf';



const App = () => (
  <>
  <Router>
    <Header />
    <section id = "home"><Home id = "home" /></section>
    <section id = "about"><About/></section>
    <section id = "projects"><Projects/></section>
    <section id = "contact"><Contact/></section>
  </Router>
 

</>
);

//ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
