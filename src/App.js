// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Newscom from './components/Newscom';
import {BrowserRouter as Router, Route,Routes, useSubmit} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
 
 const[progress,setprogress] =useState(0)
  
  
    return (
      <div>
        <Router>
         <Navbar/>
      <LoadingBar
        color='#c33764'
        progress={progress}
        height={3}
      />
        
        

        <Routes>
          
            
            
            <Route exact path="/"   index element={<Newscom setprogress={setprogress} key="Home" pageSize={8} country="us" category="general" />} />
            <Route exact path="/business" index element={<Newscom setprogress={setprogress} key="category" pageSize={8} country="us" category="business" />} />
            <Route exact path="/entertainment"  index element={<Newscom setprogress={setprogress} key="entertainment" pageSize={8} country="us" category="entertainment" />} />
            <Route exact path="/general"  index element={<Newscom setprogress={setprogress} key="general" pageSize={8} country="us" category="general" />} />
            <Route exact path="/health" index element={<Newscom setprogress={setprogress} key="health" pageSize={8} country="us" category="health" />} />
            <Route exact path="/science" index element={<Newscom setprogress={setprogress} key="science" pageSize={8} country="us" category="science" />} />
            <Route exact path="/sports" index element={<Newscom setprogress={setprogress} key="sports" pageSize={8} country="us" category="sports" />} />
            <Route exact path="/technology" index element={<Newscom setprogress={setprogress} key="technology" pageSize={8} country="us" category="technology" />} />

         
        </Routes>
      </Router>
      </div>
    )
  }
export default App;

