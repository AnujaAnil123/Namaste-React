import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// const reactHeading = [React.createElement("h1",{id:"heading"},"Hello World from React!!💕💕💕"),React.createElement("h2", { id: "heading2" }, "I am Namaste React🚀")]
//     const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
 


const AppLayout = ()=>{
  return  <div>
   <Header />
   <Body />
   <Footer />
   </div>
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"))
    reactRoot.render(<AppLayout/>)

    