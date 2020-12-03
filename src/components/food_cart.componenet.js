import React, { Component } from "react";
import axios from "axios";
import ".././App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import Button from "react-bootstrap/Button";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

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
      <Button
        variant="outline-success"
        onClick={() => {
          props.deleteFoodItem(props.fooditem._id);
        }}
      >
        <DeleteOutlinedIcon />
      </Button>
    </td>
  </tr>
);

class foodCart extends Component {
  constructor(props) {
    super(props);
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
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
    axios
      .post(
        "http://localhost:5000/foodcart/deletefromcart/" +
          this.props.auth.user.id,
        { fooditem: foodID }
      )
      .then((response) => {
        console.log(response.data);
      });
    this.setState({
      fooditems: this.state.fooditems.filter((el) => el._id !== foodID),
    });
    var temp = 0;
    for (var i = 0; i < this.state.fooditems.length; i++) {
      temp = this.state.fooditems[i].price + temp;
    }

    var tax = temp * 0.07;
    tax = Math.floor(tax * 100) / 100;
    this.setState({ tax: tax });
    this.setState({ price: temp });
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
        <div className="container form-fix">
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
            </div>
          </div>

          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Instructions for seller
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  If you have some information for the seller you can leave them
                  in the box below
                </p>
                <textarea
                  name=""
                  cols="30"
                  rows="2"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Order Summary{" "}
              </div>
              <div className="p-4">
                <p className="font-italic mb-4">
                  Delivery and taxes are calculated below:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Order Subtotal</strong>
                    <strong> ${this.state.price}</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Tax</strong>
                    <strong> ${this.state.tax}</strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Delivery</strong>
                    <strong> FREE </strong>
                  </li>
                  <li className="d-flex justify-content-between py-3 border-bottom">
                    <strong className="text-muted">Total</strong>
                    <strong> ${this.state.price + this.state.tax}</strong>
                  </li>
                </ul>
                <h5 className="text-muted text-center">Our Payment Options</h5>
                <br />
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
