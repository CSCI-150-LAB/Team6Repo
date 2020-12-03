import React, { Component } from 'react';
import axios from 'axios';
import ".././App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

class foodItemView extends Component{

    constructor(props){ 
        super(props);
        this.state ={
          
        }
    }

    
    componentDidMount(){
        axios.get('http://localhost:5000/fooditems/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            chefname: response.data.username,
            description: response.data.description,
            price: response.data.price,
            ethnicity: response.data.ethnicity,
            foodname: response.data.foodname,
            rating: response.data.rating
          });
        })
        .catch(function (error) {
          console.log(error);
        });
        if(this.props.auth.user.role == "buyer"){
            
        }
    }
  onSubmit= e => {  
        e.preventDefault(); 
        console.log(e.value);
    };

  refreshPage() { 
    window.location.reload(true); 
  }
 
  render() {
    return (
      <div>
        <h3></h3>
      </div>
      
    );
  }
}

foodItemView.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(foodItemView);
  
