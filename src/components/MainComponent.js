//importing main links
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Gallery from './GalleryComponent';
import Available from './AvailableComponent';
import Sold from './SoldComponent';
import Landscape from './LandscapeComponent';
import Seascape from './SeascapeComponent';
import Floral from './FloralComponent';
import PaintingDetail from './PaintingDetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { PAINTINGS } from '../shared/paintings';
import { Switch, Route, Redirect, Link } from 'react-router-dom'

//---MAIN COMPONENT-----
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paintings: PAINTINGS
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    painting1={this.state.paintings.filter((painting) => painting)[0]} 
                    painting2={this.state.paintings.filter((painting) => painting)[1]} 
                    painting3={this.state.paintings.filter((painting) => painting)[2]} 
                    painting4={this.state.paintings.filter((painting) => painting)[3]} 
                    painting5={this.state.paintings.filter((painting) => painting)[4]} 
                    painting6={this.state.paintings.filter((painting) => painting)[5]} 
                    available1={this.state.paintings.filter((painting) => painting.isAvailable)[2]} 
                    available2={this.state.paintings.filter((painting) => painting.isAvailable)[4]} 
                    available3={this.state.paintings.filter((painting) => painting.isAvailable)[5]} 
                />
            );
        }

        const PaintingWithId = ({match}) => {
            return (
                <PaintingDetail
                    painting={this.state.paintings.filter((painting) => painting.id === parseInt(match.params.id, 10))[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route exact path='/gallery' component={ () => <Gallery paintings={this.state.paintings} />} />
                    <Route exact path='/gallery/available' component={ () => <Available paintings={this.state.paintings} />} />
                    <Route exact path='/gallery/sold' component={ () => <Sold paintings={this.state.paintings} />} />
                    <Route exact path='/gallery/landscape' component={ () => <Landscape paintings={this.state.paintings} />} />
                    <Route exact path='/gallery/seascape' component={ () => <Seascape paintings={this.state.paintings} />} />
                    <Route exact path='/gallery/floral' component={ () => <Floral paintings={this.state.paintings} />} />
                    <Route exact path='/gallery/:id' component={ PaintingWithId } />
                    <Route exact path='/about' component={ () => <About 
                                        available1={this.state.paintings.filter((painting) => painting.isAvailable)[2]} 
                                        available2={this.state.paintings.filter((painting) => painting.isAvailable)[4]} 
                                        available3={this.state.paintings.filter((painting) => painting.isAvailable)[5]} 
                    />} />
                    <Route exact path='/contact' component={ () => <Contact />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;