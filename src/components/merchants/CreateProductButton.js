import React  from 'react';
import {Link} from 'react-router-dom';
/**
 * This is used to add addProduct button in the design.
 * React.Fragement tag is used to create invisible HTML Tags.
 * Author: Shakamuri Sushma
 */
const CreateProductButton = () =>{
    return(
        <React.Fragment>
            <Link to="/addProduct" className="btn btn-lg btn-dark btn-info" style={{backgroundColor : 'purple'}}>
                Create a Product
            </Link>
        </React.Fragment>        
    );
}
export default CreateProductButton;
