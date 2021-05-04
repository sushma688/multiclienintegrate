import React from 'react';
import HeaderComponent from './HeaderComponent';
/**
 * This Component is used to create Home Page
 * Author: Janani S
 */
class CustomerHome extends React.Component {
    /**
     * props are variabes passed to it by parent component. 
     */
    constructor(props) {
        super(props);
    }
    /**
     * The render method tells react what to display.
     */
    render() {
        /**
         * This return method gives the output of method or a function.
         */
        return (
            <div className="bng">
            <HeaderComponent/>
                <center>
                    <h1>Multi-Client Offering Client Services</h1>
                    <br/>
                    <h5>Experience the life style......</h5>
                    <br/>
                </center>            
                <div className="home">       
                </div>
                <div>
                    <center><h2>Thank You For visiting :)</h2></center>
                </div>               
            </div>
        );
    }
}
export default CustomerHome;