import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSearchQuery  extends Component{
    
    constructor(props){
        super(props);

        this.onCreateSearch = this.onCreateSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search : '',
            fooditems: []
        }

    }
    
    onCreateSearch(e){
        this.setState({
        search: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const food_search = {description : this.state.search};
        
        axios.get("http://localhost:5000/searchfood/name",food_search).then(response =>{
          this.setState({fooditems: response.data}); 
          console.log(response.data);
      });

    }

    render() {
        return (
          <div>
            <h3>Food Search
                
            </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>search: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.search}
                    onChange={this.onCreateSearch}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create food_search
                " className="btn btn-primary" />
              </div>
            </form>
            <div>
              <h3> Name of Chef </h3>
              <p>{this.state.fooditems.name}</p>
              <h3> Item Description: {this.state.fooditems.description} </h3>
              <h3> PRICE IS : {this.state.fooditems.price} </h3>
            </div>
          </div>
        )
      }
    }