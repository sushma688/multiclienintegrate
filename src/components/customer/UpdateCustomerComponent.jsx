import React, { Component } from 'react'
import CustomerService from '../customer/config/CustomerService';
import {updateCustomers, getView} from '../../actions/actions';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            phone: '',
            addressLine1: '',
            addressLine2:'',
            city:'',
            country:'',
            initialBalance:''
        }
    }

    /**
     * OnChange event in React detects when the value of an input element changes. 
     */
     onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }
    /**
     * OnSubmit event is used to submit the details of Product.
     */
     updateCustomerDetails = (e) => {
        e.preventDefault();
        let customer = {
                     name: this.state.name, 
                     phone: this.state.phone, 
                     addressLine1: this.state.addressLine1,
                     addressLine2: this.state.addressLine2,
                     city:this.state.city,
                     country:this.state.country,
                     initialBalance:this.state.initialBalance
                     };
        console.log('customer => ' + JSON.stringify(customer));
        this.props.updateCustomers(customer);
        this.props.history.push("/customer")
    }
    /**
     * It is used to interact with the DOM to load data.
     */
    componentDidMount(){
       const {id} = this.props.match.params;
       this.props.getView(id);
    }
    componentWillReceiveProps(nextProps){
        const {
            id,
            name,
            phone,
            addressLine1,
            addressLine2,
            city,
            country,
            initialBalance
                    
        }=nextProps.customer;
        this.setState({
            id,
            name,
            phone,
            addressLine1,
            addressLine2,
            city,
            country,
            initialBalance        
        });
    }

    cancel(){
        this.props.history.push('/customer');
    }

    render() {
        return (
            <div className="customer">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Customer Details</h3>
                                <div className = "card-body">
                                    <form> 
                                    <div className = "form-group">
                                            <label> Customer Name </label>
                                            <input placeholder="Enter Name" 
                                                   name="name" className="form-control"
                                                   value={this.state.name} 
                                                   onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number </label>
                                            <input placeholder="Enter valid phone number" 
                                                   name="phone" className="form-control" 
                                                   value={this.state.phone} 
                                                   onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address Line 1 </label>
                                            <input placeholder="Enter address" 
                                                   name="addressLine1" className="form-control" 
                                                   value={this.state.addressLine1} 
                                                   onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Address Line 2</label>
                                            <input placeholder="Enter address" 
                                                   name="addressLine2" className="form-control" 
                                                   value={this.state.addressLine2} 
                                                   onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>City</label>
                                            <input placeholder="Enter city name" 
                                                   name="city" className="form-control" 
                                                   value={this.state.city} 
                                                   onChange={this.onChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>Country</label>
                                            <input placeholder="Enter country name" 
                                                   name="country" className="form-control" 
                                                   value={this.state.country} 
                                                   onChange={this.onChange}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>Initial Balance</label>
                                            <input placeholder="Add your initial balance" 
                                                   name="initialBalance" className="form-control" 
                                                   value={this.state.initialBalance} 
                                                   onChange={this.onChange}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateCustomerDetails}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"/>
  <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
</svg> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
UpdateCustomerComponent.propTypes = {
    getView:PropTypes.func.isRequired,
    updateCustomers:PropTypes.func.isRequired,
    customer:PropTypes.object.isRequired
}
/**
 *It is the first arguement passed to connect , It is used for selecting part of data from store.
 */
const mapStateToProps = state => ({
    errors: state.errors
  });

export default connect(mapStateToProps, { updateCustomers, getView })(UpdateCustomerComponent);
      