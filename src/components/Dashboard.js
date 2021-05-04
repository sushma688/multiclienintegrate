import React from 'react'
import ProductItemComponent from './ProductItemComponent';
import CreateProductButton from './merchants/CreateProductButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProducts} from '../actions/MerchantAction';

/**
 * This Dashboard Component is used for design of UI
 * Author: Shakamuri Sushma
 */
class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            merchants:[]
        }
    }
    /**
     * This method is used to interact with DOM to load Data.
     */
    componentDidMount(){
        this.props.getProducts();
    }
    render() {

        const {merchants} =  this.props.merchants;
      
        return (
            <div className="merchants">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <center>
                                <h3>Products</h3>
                            </center>                       
                            <br />
                            <CreateProductButton/>
                            <br />
                            <hr />
                            {
                                merchants.map((merchant)=>{
                                    return  <ProductItemComponent key={merchant.productId} merchant={merchant}/>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/**
 * This PropTypes is used to check whether the user entered details or not.
 * MapStateToProps is used to give as first arguement to connect , It is used for selecting part of data from store.
 */
Dashboard.propTypes={
    getProducts:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
    merchants:state.merchants
});
export default connect(mapStateToProps,{getProducts})(Dashboard);
// export default Dashboard;