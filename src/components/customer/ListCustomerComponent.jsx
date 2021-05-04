import React, { Component } from 'react'
import CustomerService from '../../components/customer/config/CustomerService'
import {getCustomers, deletedCustomer, getView} from '../../actions/actions'
import {connect} from 'react-redux'
import history from './history'
 class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            customers: []
    }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewcustomer=this.viewcustomer.bind(this);
    }
    deleteCustomer(id){
        this.props.deletedCustomer(id);
        this.props.history.push("/customer")
    }
    viewcustomer(id){
        this.props.getView(id);
        this.props.history.push('/viewCustomer');
    }
    editCustomer(){
        this.props.history.push('/updateCustomer');
    }

    componentDidMount(){
        this.props.getCustomers();
    }

    addCustomer(){
        this.props.history.push('/addCustomer');
    }

    render() {
        const customers=this.props.customers1;
        console.log(customers)
        return (
            <div>
                 <h2 className="text-center"style={{textAlign:'center', color:'grey', marginTop:'30px', fontFamily: 'sans-serif-medium'}}>Customer Details</h2>
                 <div className = "row"  style={{fontFamily: 'sans-serif-medium'}}>
                    <button className="btn btn-lg btn-dark btn-info" onClick={this.addCustomer} style={{fontSize:"20px", marginLeft:'30px'}} > Add a Customer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                     <table className = "table table-striped table-bordered" style={{textAlign: 'center', marginRight:'30px', marginLeft:'30px'}}>

                            <thead>
                                <tr>
                                    <th> Id</th>
                                    <th> Name</th>
                                    <th> Mobile No.</th>
                                    <th> Address Line1</th>
                                    <th> Address Line2</th>
                                    <th> City </th>
                                    <th> Country </th>
                                    <th> Balance</th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {    
                                    customers.map(
                                        customer => 
                                        <tr key = {customer.id}>
                                             <td> { customer.id } </td>   
                                             <td> {customer.name}</td>
                                             <td> {customer.phone}</td>
                                             <td> {customer.addressLine1}</td>
                                             <td> {customer.addressLine2}</td>
                                             <td> {customer.city}</td>
                                             <td> {customer.country}</td>
                                             <td> {customer.initialBalance}</td>
                                             <td>
                                                 {/* <button onClick={ () => this.editCustomer(customer.id)} className="btn btn-primary"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-brush-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
</svg> Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.id)} className="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar3-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0z"/>
  <path fillRule="evenodd" d="M0 3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3z"/>
</svg> Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewcustomer(customer.id)} className="btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path fillRule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg> View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { customers1: state.getlist, data:state.getUpdatedData, deleted:state.getDeleteCustomer
        
     }
}
export default connect(mapStateToProps, { getCustomers, deletedCustomer, getView })(ListCustomerComponent);