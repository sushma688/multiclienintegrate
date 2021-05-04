import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct } from '../actions/MerchantAction';
/**
 * This Component is used to display the details of Employee on DashBoard.
 * Author: Shakamuri Sushma
 */
class ProductItemComponent extends React.Component {

    onDeleteClick=(productId)=>{
      console.log('--------ProductItemComponent:onDeleteClick Called--------')
      this.props.deleteProduct(productId);
    }
    /**
     * The render method tells react what to display.
     */
    render() {
        const {merchant} = this.props;
        return (            
            <div className="container">
                <div class="p-3 mb-2 bg-secondary text-white">Product Details</div>
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{merchant.productId}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{merchant.productName}</h3>
                            <p>{merchant.productDescription}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                {/* <a href="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1">Product Board </i>
                                    </li>
                                </a> */}
                                <Link to={`/updateProduct/${merchant.productId}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1">Update</i>
                                    </li>
                                </Link>
                                <li className="list-group-item delete" 
                                    onClick={this.onDeleteClick.bind(this,merchant.productId)}>
                                    <i className="fa fa-minus-circle pr-1">Delete Product</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

ProductItemComponent.propTypes = {
    deleteProduct:PropTypes.func.isRequired  
}

 export default connect(null,{deleteProduct})(ProductItemComponent);
