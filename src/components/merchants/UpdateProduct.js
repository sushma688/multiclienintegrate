import React, { Component } from 'react'
import {getProduct,updateProduct} from '../../actions/MerchantAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
/**
 * This Component is used update the details of Product .
 * Author: Shakamuri Sushma
 */
 class UpdateProduct extends Component {
     /**
     * Props are variables passed to it by its parent component.
     * States are variables but directly intialized and managed by the component. 
     */
    constructor(props){
        super(props);
        this.state=  {
            "merchantId":"",
            "merchantName":"",
            "productId":"",
            "productName":"",
            "productPrice":"",
            "productQuantity":"",
            "productDescription":""         
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
    onSubmit=(event)=>{
        event.preventDefault();
        const newProduct = {
            merchantId:this.state.merchantId,
            merchantName:this.state.merchantName,
            productId:this.state.productId,
            productName:this.state.productName,
            productPrice:this.state.productPrice,
            productQuantity:this.state.productQuantity,
            productDescription:this.state.productDescription
        }
        this.props.updateProduct(newProduct,this.props.history);
    }
    /**
     * It is used to interact with the DOM to load data.
     */
    componentDidMount(){
       const {productId} = this.props.match.params;
       this.props.getProduct(productId,this.props.history);
    }
    componentWillReceiveProps(nextProps){
        const {
            merchantId,
            merchantName,
            productId,
            productName,
            productPrice,
            productQuantity,
            productDescription
                    
        }=nextProps.merchant;
        this.setState({
            merchantId,
            merchantName,
            productId,
            productName,
            productPrice,
            productQuantity,
            productDescription        
        });
    }
    /**
     * The render method tells react what to display.
     */
    render() {
        return (
            <div className="merchant">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <center>
                                <h3>Edit Product Form</h3>
                            </center>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="merchantId"
                                        name="merchantId" 
                                        pattern="[0-9]+"
                                        onChange={this.onChange}
                                        value={this.state.merchantId}
                                    required/>
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Merchant Name"
                                        name="merchantName"
                                        pattern="[a-zA-Z]+"
                                        onChange={this.onChange}
                                        value={this.state.merchantName}
                                    required/>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="productId"
                                        name="productId"
                                        pattern="[0-9]+" 
                                        onChange={this.onChange}
                                        value={this.state.productId}
                                    required/>
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Product Name"
                                        name="productName"
                                        pattern="[a-zA-Z][a-zA-Z ]+"
                                        // pattern="[a-zA-Z]+"
                                        onChange={this.onChange}
                                        value={this.state.productName}
                                    required/>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="productPrice"
                                        name="productPrice" 
                                        pattern="[0-9]+"
                                        onChange={this.onChange}
                                        value={this.state.productPrice}
                                    required/>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg " 
                                        placeholder="productQuantity"
                                        name="productQuantity"
                                        pattern="[0-9]+" 
                                        onChange={this.onChange}
                                        value={this.state.productQuantity}
                                    required/>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Product Description"
                                        name="productDescription"
                                        pattern="[a-zA-Z][a-zA-Z ]+"
                                        onChange={this.onChange}
                                        value={this.state.productDescription}
                                    required/>
                                </div>
                                <input type="submit" className="btn btn-lg btn-dark btn-block" />
                                <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/**
 * This is used whether user have given correct input or not.
 */
UpdateProduct.propTypes = {
    getProduct:PropTypes.func.isRequired,
    updateProduct:PropTypes.func.isRequired,
    merchant:PropTypes.object.isRequired
}
/**
 *It is the first arguement passed to connect , It is used for selecting part of data from store.
 */
const mapStateToProps = state => ({
    merchant: state.merchants.merchant
  });
//export default UpdateProduct;
 export default connect(mapStateToProps,{getProduct,updateProduct})(UpdateProduct);