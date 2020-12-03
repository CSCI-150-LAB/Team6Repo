import React, { Component } from "react";
import axios from "axios";
import ".././App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import "fontsource-roboto";
const FoodItems = (props) => (
  <tr>
    <th scope="row" className="border-0">
      <div className="p-2">
        <h5 className="text-dark">{props.fooditem.foodname}</h5>
        <span className="text-muted font-weight-normal font-italic d-block">
          {props.fooditem.description}
        </span>
      </div>
    </th>
    {/* <td>{props.fooditem.description}</td> */}
    <td className="border-0 align-middle">{props.fooditem.chefname}</td>
    <td className="border-0 align-middle">${props.fooditem.price}</td>
    <td className="border-0 align-middle">
      <a
        href="#"
        onClick={() => {
          props.deleteFoodItem(props.fooditem._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

class foodCart extends Component {
  constructor(props) {
    super(props);

    //this.deleteFoodItem = this.deleteFoodItem.bind(this);
    this.state = {
      userCart: "",
      fooditems: [],
      price: 0,
      tax: 0,
      foodlist: [],
    };
  }

  componentDidMount() {
    console.log(this.props.auth);
    axios
      .get(
        "http://localhost:5000/foodcart/getcart/" + this.props.auth.user.id,
        { username: this.props.auth.user.name }
      )
      .then((response) => {
        this.setState({ userCart: response.data });
        this.setState({ fooditems: response.data.foodItems });
        console.log(response.data);
        if (response.data.foodItems.length > 0) {
          var temp = 0;
          for (var i = 0; i < response.data.foodItems.length; i++) {
            temp = response.data.foodItems[i].price + temp;
          }

          var tax = temp * 0.07;
          tax = Math.floor(tax * 100) / 100;
          this.setState({ tax: tax });
          this.setState({ price: temp });
        }
      });
  }

  deleteFoodItem(foodID) {
    //axios.delete("http://localhost:5000/foodcart/deletefromcart/" + this.props.auth.user.id,{})
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.value);
  };
  deleteCart = (e) => {
    axios
      .delete(
        "http://localhost:5000/foodcart/deletecart/" + this.props.auth.user.id
      )
      .then(() => {
        console.log("cart has been deleted");
      });
  };
  foodList() {
    return this.state.fooditems.map((currentfood) => {
      return (
        <FoodItems
          fooditem={currentfood}
          key={currentfood._id}
          deleteFoodItem={this.deleteFoodItem}
        />
      );
    });
  }

  refreshPage() {
    window.location.reload(true);
  }

  render() {
    return (
      <div className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <h3 className="text-uppercase">
                {this.props.auth.user.name}'s cart
              </h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-success">
                        <div className="text-uppercase">Item</div>
                      </th>
                      <th scope="col" className="border-0 bg-success">
                        <div className="text-uppercase">Chef</div>
                      </th>
                      {/* <th scope="col" className="border-0 bg-success">
                        <div className="text-uppercase">Description </div>
                      </th> */}
                      <th scope="col" className="border-0 bg-success">
                        <div className="text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-success">
                        <div className="text-uppercase">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.foodList()}</tbody>
                </table>
              </div>
              <h2>Price: ${this.state.price}</h2>
              <h2>Tax: ${this.state.tax}</h2>
              <h2>Total Price: ${this.state.price + this.state.tax}</h2>

              <PayPalButton
                amount={this.state.price + this.state.tax}
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + this.props.auth.user.name
                  );
                  this.deleteCart();
                  this.refreshPage();
                }}
                options={{
                  clientId:
                    "AfX37SWBIHQyn3WOrVxzbNg3fvq5kAnUpEqhG7CHqUvc8Mla5po49GJWuLblE1X1Ybs9hIpHF3JjVulX",
                  merchantId: "698584Y22ED8E",
                  currency: "USD",
                }}
              />
            </div>
          </div>

          <div class="row py-5 p-4 bg-white rounded shadow-sm">
            <div class="col-lg-6"></div>
          </div>
        </div>
      </div>
    );
  }
}

foodCart.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(foodCart);
