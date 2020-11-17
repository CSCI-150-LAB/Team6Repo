import React from 'react';
import { getPrice } from "../actions/cartActions";
class foodCart  extends Component{

    constructor(props){ 
        super(props); 

        
        this.onSubmit = this.onSubmit(this); 
    }


    onSubmit= e => {  

        e.preventDefault(); 
        const userID = { 

        }


    this.props.getPrice(userID);
    };



  render() {
    return (
      <div className='app'>
        <p>Scotch School rocks!</p>
      </div>
    );
  }
}

foodCart.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps)(foodCart);
  

export default connect(mapStateToProps, {getPrice})