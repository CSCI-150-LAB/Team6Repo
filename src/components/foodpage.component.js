import React from "react";
import ".././App.css";

import Button from "react-bootstrap/Button";

class FoodPage extends Component {
    constructor(props){
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            chefname:'',
            description: '',
            foodID: '',
            reviews: [],
        }
    }

    render(){
            return (
                <>
                <br />
                <h1 className="text-center">
                    <b>Food item</b>
                </h1>
                <h3 className="text-center">Food experience with locals</h3>
                <hr className="hrline" />
                <br />
                </>
            );
    }
}
