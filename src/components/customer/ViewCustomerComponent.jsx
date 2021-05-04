import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getView} from '../../actions/actions'
class ViewCustomerComponenet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
       this.props.getView(this.state.id);
    }
    back(){
        this.props.history.push('/customer');
    }

    render() {
        const customers=this.props.data;
        console.log(customers);
        return (
            <div>
                <br></br>
                <h3 className = "text-center"> View Customer Details</h3>
                <div className = "card col-md-6 offset-md-3">
                    <div className = "card-body">
                    <div className = "row">
                            <label className = "col-md-4 offset-md-1"> Customer Id </label>
                            <div> { customers.id }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-1"> Customer Name </label>
                            <div> { customers.name }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-1"> Phone Number </label>
                            <div> { customers.phone }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-1"> Address Line 1</label>
                            <div> { customers.addressLine1 }</div>
                        </div>
                    <div className = "row">
                            <label className = "col-md-4 offset-md-1"> Address Line 2 </label>
                            <div> { customers.addressLine2 }</div>
                        </div>
                    <div className = "row">
                            <label className = "col-md-4 offset-md-1"> City </label>
                            <div> { customers.city }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-1"> Country</label>
                            <div> { customers.country }</div>
    
                        </div>
                        </div>
                        </div>
                        <center><button className="btn btn-danger" 
                                                onClick={this.back.bind(this)} 
                                                style={{marginTop: "20px", }}>Back</button></center>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('state'+state.getUpdatedData);
    return { data: state.getView }
    }
export default connect(mapStateToProps, { getView })(ViewCustomerComponenet);

