import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './Componenets/HomeScreen';
import SigninScreen from './Componenets/SigninScreen';
import RegisterScreen from './Componenets/RegisterScreen';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
 <div className='grid-container'>
        <header>
          <div className="header">
            <div className='brand'>
  <Link to="/">aInnoApps Technologies</Link>
            </div>

            <div className='header-links'>
              <Link to=''>About</Link>
              <Link to=''>Contact Us</Link>
              <Link to="/signin">LogIn</Link>
              <Link to="/register">SignIn</Link>
            </div>
          </div>
        </header>

     
    
    <main>
        <div className="main">
              <Route path="/" exact={true} component={HomeScreen}/> 
              <Route path="/register" component={RegisterScreen}/> 
              <Route path="/signin" component={SigninScreen}/>           
        </div>
    </main>


    <footer className="footer">
           <p>@2020 by Munish Kumar- Reserved All</p>
           <div className="Social-Icon-Container">
           <i class="fa fa-facebook-square" aria-hidden="true"></i>
           <i class="fa fa-instagram" aria-hidden="true"></i>
           <i class="fa fa-envelope" aria-hidden="true"></i>
           <i class="fa fa-twitter" aria-hidden="true"></i>
           </div>
    </footer>
    </div>
    </BrowserRouter>
    );
}

export default App;
