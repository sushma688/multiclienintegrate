import React, { Component } from 'react'
import { register } from './serviceWorker';
import {connect} from 'react-redux'
import {addCustomer} from '../../actions/actions';
import PropTypes from "prop-types";
class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone: '',
            addressLine1:'',
            addressLine2:'',
            city:'',
            country:'',
            initialBalance:''
        }
        this.changeName = this.changeName.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeAddressLine1 = this.changeAddressLine1.bind(this);
        this.changeAddressLine2 = this.changeAddressLine2.bind(this);
        this.changeCity=this.changeCity.bind(this);
        this.changeCountry=this.changeCountry.bind(this);
        this.changeInitialBalance=this.changeInitialBalance.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);
    }

   
    saveCustomer = (e) => {
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
        this.props.addCustomer(customer);
        this.props.history.push("/customer")
    }
    
        
    changeName= (event) => {
        this.setState({name: event.target.value});
    }

    changePhone= (event) => {
        this.setState({phone: event.target.value});
    }

    changeAddressLine1= (event) => {
        this.setState({addressLine1: event.target.value});
    }

    changeAddressLine2= (event) => {
        this.setState({addressLine2: event.target.value});
    }

    changeCity= (event) => {
        this.setState({city: event.target.value});
    }

    changeCountry= (event) => {
        this.setState({country: event.target.value});
    }

    changeInitialBalance= (event) => {
        this.setState({initialBalance: event.target.value});
    }

    cancel(){
        this.props.history.push('/customer');
    }

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    // this.getTitle()
                                }
                                  <h3 className="text-center" >Add Customer</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Name </label>
                                            <input placeholder="Enter Name" 
                                                   name="name" className="form-control"
                                                   value={this.state.name} 
                                                   onChange={this.changeName}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number </label>
                                            <input placeholder="Enter valid phone number" 
                                                   name="phone" className="form-control" 
                                                   value={this.state.phone} 
                                                   onChange={this.changePhone}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address Line 1 </label>
                                            <input placeholder="Enter address" 
                                                   name="addressLine1" className="form-control" 
                                                   value={this.state.addressLine1} 
                                                   onChange={this.changeAddressLine1}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Address Line 2</label>
                                            <input placeholder="Enter address" 
                                                   name="addressLine2" className="form-control" 
                                                   value={this.state.addressLine2} 
                                                   onChange={this.changeAddressLine2}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>City</label>
                                            <input placeholder="Enter city name" 
                                                   name="city" className="form-control" 
                                                   value={this.state.city} 
                                                   onChange={this.changeCity}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>Country</label>
                                            <input placeholder="Enter country name" 
                                                   name="country" className="form-control" 
                                                   value={this.state.country} 
                                                   onChange={this.changeCountry}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>Initial Balance</label>
                                            <input placeholder="Add your initial balance" 
                                                   name="initialBalance" className="form-control" 
                                                   value={this.state.initialBalance} 
                                                   onChange={this.changeInitialBalance}/>
                                        </div>

                                        <button className="btn btn-success" 
                                                onClick={this.saveCustomer}> Save</button>
                                        <button className="btn btn-danger" 
                                                onClick={this.cancel.bind(this)} 
                                                style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

CreateCustomerComponent.propTypes = {
    addCustomer:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps, { addCustomer })(CreateCustomerComponent);
