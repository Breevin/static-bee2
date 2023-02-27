import React from "react";
import queryString from "query-string";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Styles/details.css"

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: {},
        }
    }
    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { restauranta } = qs;

        axios({
            method: 'GET',
            url: 'https://bee-node105.onrender.com/restaurants/',restauranta,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log(this.state.restaurants);
                this.setState({ restaurants : response.data.restaurants[1]});
                
            })
            .catch(err => console.log(err));
    }
    render() {
        // const { restaurants } = this.state;
        return (
            <div>
                
                    <img className="snack" src="./Assets/kfc.jpg" alt="no img" />
                 
                
                
                <div className="heading">Name</div>


                <Tabs className="tabs">
                    <TabList className="buttoons">
                        <Tab type="button" className="buttoon">Overview</Tab>
                        <Tab type="button" className="buttoon">Contact</Tab>
                    </TabList>
                

                <TabPanel>
                    <p className="about">About this place</p>
                    <p className="head">Cusine:</p>
                    <p className="value">Bakery, Fast-food</p>
                    <p className="head">Average cost:</p>
                    <p className="value">Min price for two people(approx)</p>
                </TabPanel>

                <TabPanel>
                    <p className="about">Contact</p>
                    <p className="head">+8888888888</p>
                    <p className="value">The Big Chill Cakery</p>
                    <p className="heada">Shop 1, Plot D, JJ Complex, Delhi</p>
                    <p className="value">700 for two people(approx)</p>
                </TabPanel>
                </Tabs>
                
            </div>
        )
    }
}


export default Details;