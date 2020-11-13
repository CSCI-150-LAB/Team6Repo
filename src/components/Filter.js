import React, { Component } from "react";

export default class Filter extends Component {
  render() {
      return (
        <div className="main-filter">
          <div className="container"></div>

            <select id = "dropdown" ref = {(input)=> this.menu = input}>
              <option value="Location">Location</option>
              <option value="North Fresno">North Fresno</option>
              <option value="East Fresno">East Fresno</option>
              <option value="West Fresno">West Fresno</option>
              <option value="South Fresno">South Fresno</option>
              <option value="Clovis">Clovis</option>
          </select>

          <select id = "dropdown" ref = {(input)=> this.menu = input}>
              <option value="Price">Price</option>
              <option value="1">$5-$15</option>
              <option value="2">$15-$30</option>
              <option value="3">$30-$50</option>
              <option value="4">$50 & up</option>
          </select>

          <select id = "dropdown" ref = {(input)=> this.menu = input}>
              <option value="Type of Food">Type of Food</option>
              <option value="1">Chinese</option>
              <option value="2">American</option>
              <option value="3">Mexican</option>
              <option value="4">Vegetarian</option>
              <option value="5">Mediterranean</option>
              <option value="6">Vietnamese</option>
              <option value="7">Breakfast</option>
              <option value="8">Indian</option>
          </select>
          
            {/*<div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Regular link</a>
                <a class="dropdown-item active" href="#">Active link</a>
                <a class="dropdown-item" href="#">Another link</a>
              </div>
            </div>
            
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Regular link</a>
                <a class="dropdown-item active" href="#">Active link</a>
                <a class="dropdown-item" href="#">Another link</a>
              </div>
            </div>
            
            
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Regular link</a>
                <a class="dropdown-item active" href="#">Active link</a>
                <a class="dropdown-item" href="#">Another link</a>
              </div>
            </div>
            <div class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Large button
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Regular link</a>
                <a class="dropdown-item active" href="#">Active link</a>
                <a class="dropdown-item" href="#">Another link</a>
              </div>
      </div>*/}
        </div>
      );
  }
}