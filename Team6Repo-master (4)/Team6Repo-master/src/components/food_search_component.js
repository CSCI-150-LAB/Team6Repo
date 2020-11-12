import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSearchQuary  extends Component{
    
    constructor(props){
        super(props);

        this.onCreateSearch = this.onCreateSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search : '',
        }

    }
    
    onCreateSearch(e){
        this.setState({
        search: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const food_search
         = {
            search: this.state.search,
        }

        console.log(food_search
            );

        axios.post('http://localhost:5000/search/find',food_search
        )
            .then(res => console.log(res.data));
        this.setState({
            search: ''
        })
    }

    render() {
        return (
          <div>
            <h3>Create New food_search
                
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
          </div>
        )
      }
    }