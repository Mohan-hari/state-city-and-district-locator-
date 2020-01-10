import React, { Component } from 'react'
import { StateDropdown, RegionDropdown } from 'react-indian-state-region-selector';



export default class location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            State: [], City: [],
            District :[]

        };

    }
    selectState(val) {
        this.setState({ State: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    componentDidMount() {
        fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities')
            .then(res => res.json())
            .then((json => {
                this.setState({ List: json })
            })
            )
    }
    render() {
        console.log("hello",this.state.List[1])
        if(this.state.List[1]==='Rajasthan' || this.state.List[1]==='Uttar Pradesh'){
            return (
                <div>
                    <form className="myform container">
                        <select size="1">
                        {
                        this.state.List.map(item => (
                            <option value=""> {item.State}</option>
                            
                        ))} 
                        </select>
                        <select size="1">
                              {
                        this.state.List.map(item => (
                            <option value=""> {item.City}</option>
                            
                        ))} 
                
                        </select>
                        <select size="1">
                              {
                        this.state.List.map(item => (
                            <option value=""> {item.District}</option>
                        ))} 
                        </select>
                    </form>
    
                </div>
            )

        }
       
            return (
                <div>
                    <form className="myform">
                        <select size="1">
                        {
                        this.state.List.map(item => (
                            <option value=""> {item.State}</option>
                            
                        ))} 
                        </select>
                        <select size="1">
                              {
                        this.state.List.map(item => (
                            <option value=""> {item.City}</option>
                            
                        ))} 
                
                        </select>
                        <select size="1">
                              {
                        this.state.List.map(item => (
                            <option value=""> {item.District}</option>
                        ))} 
                        </select>
                    </form>
    
                </div>
            

        )
       
                }
            }