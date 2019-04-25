import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import RestaurantTypes from './RestaurantTypes';
import RestaurantsOf from './RestaurantsOf';
import RestaurantMenu from './RestaurantMenu';
    export class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                restaurants:{
                    "mediterranean": {
                        "Mediterranean Grill": [
                            "hummus", "tabouli", "dolmas"
                        ],
                        "Yalla": [
                            "hummus wrap", "tabouli wrap", "dolmas"
                        ],
                        "Nik's": [
                            "spanakopita", "gyro", "dolmas"
                        ]
                    },
                    "american": {
                        "Chik fil a": [
                            "chicken biscuit", "chicken sandwich", "chicken salad"
                        ],
                        "Mary Mac's Tea Room": [
                            "biscuit", "fried chicken", "mashed potatoes"
                        ],
                        "Jersey Mike's": [
                            "Big Sandwich", "Bigger Sandwich", "Most Biggerest Sandwich"
                        ]
                    },
                    "mexican": {
                        "Elmyriachi": [
                            "tacos", "burritos", "cheese dip"
                        ],
                        "Mezcalito's Cantina": [
                            "tortas", "tamales", "cheese dip"
                        ],
                        "Matador": [
                            "cheese dip", "cheese dip", "cheese dip"
                        ]
                    }

                },
            whichRestaurants: '',
            whichMenu:''
            
            }
    }
    
    _changeRestaurantState = (e)=>{
        this.setState({
            whichRestaurants: e.target.value,
            whichMenu:''
        })
    }
    _changeMenu = (e)=>{
        this.setState({
            whichMenu: e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        const {restaurants, whichRestaurants, whichMenu} = this.state
        const {_changeRestaurantState, _changeMenu} = this

        return (
        <div className="App">
            <header className="App-header">
            

            <RestaurantTypes types={Object.keys(restaurants)} clickHandler={_changeRestaurantState}></RestaurantTypes>

                {whichRestaurants ? <RestaurantsOf restaurants={restaurants} genre={whichRestaurants} clickHandler={_changeMenu}/>: ''}

                {whichMenu ? <RestaurantMenu restaurants={restaurants} genre={whichRestaurants} theRestaurant={whichMenu}/> : ''}

            
            </header>
        </div>
        )
    }
    }


    export default App
