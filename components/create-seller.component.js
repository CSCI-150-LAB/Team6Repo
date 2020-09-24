import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSeller  extends Component{
    
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeItemLinker = this.onChangeItemLinker.bind(this);
        this.onChangeEthnicity = this.onChangeEthnicity.bind(this);
        this.onChangeAboutMe = this.onChangeAboutMe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            password : '',
			email: '',
            name: '',
            phone: '',
            address: '',
            itemLinker : '',
            ethnicity: '',
            //signUpDate: new Date(),
            aboutMe: 'Please Put shit in here',
            certified: false,
        }

    }
    
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone: e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            address: e.target.value
        })
    }
    onChangeItemLinker(e){
        this.setState({
            itemLinker: e.target.value
        })
    }
    onChangeEthnicity(e){
        this.setState({
            ethnicity: e.target.value
        })
    }
    onChangeAboutMe(e){
        this.setState({
            aboutMe: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();

        const seller = {
            username:   this.state.username,
            password:   this.state.password,
            email:      this.state.email,
            name:      this.state.name,
            phone:      this.state.phone,
            address:      this.state.address,
            itemLinker:      this.state.itemLinker,
            ethnicity:      this.state.ethnicity,
            aboutMe:      this.state.aboutMe,
        }

        console.log(seller);

        axios.post('http://localhost:5000/sellers/add',seller)
            .then(res => console.log(res.data));
        this.setState({
            username: '',
            password: '',
            email: '',
            name: '',
            phone: '',
            address: '',
            itemLinker : '',
            ethnicity: '',
            //signUpDate: new Date(),
            aboutMe: '',
            certified: false,
        })
    }

    render() {
        return (
          <div>
            <h3>Create New Seller</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
              </div>
              <div className="form-group"> 
                <label>Email: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
              </div>
              <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group"> 
                <label>Phone: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    />
              </div>
              <div className="form-group"> 
                <label>Address: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    />
              </div>
              <div className="form-group"> 
                <label>ItemLinker: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.itemLinker}
                    onChange={this.onChangeItemLinker}
                    />
              </div>
              <div className="form-group"> 
                <label>Ethnicity: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.ethnicity}
                    onChange={this.onChangeEthnicity}
                    />
              </div>
              <div className="form-group"> 
                <label>AboutMe: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.aboutMe}
                    onChange={this.onChangeAboutMe}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create Seller" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
    }