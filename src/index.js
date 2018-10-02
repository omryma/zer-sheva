import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/nav-bar';
import WelcomeCarousel from './components/welcome-carousel';
import AboutUs from './components/about-us';
import ProductsList from './components/products-list';
import Contact from './components/contact';

const zerim = ['/photos/zer5.jpeg', '/photos/zer10.jpeg', '/photos/zer8.jpeg',
                '/photos/zer13.jpeg', '/photos/zer12.jpeg', '/photos/zer9.jpeg'];


class App extends Component {
   
    render() {
        return (
            <div className="padding-0">
                <NavBar />
                <WelcomeCarousel />
                <AboutUs />
               <ProductsList photos={zerim} />
                <Contact />
            </div>
        );
    }
} 


ReactDOM.render(<App />, document.querySelector('.container-fluid'));

