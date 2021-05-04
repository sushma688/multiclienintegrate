import React from 'react'
/**
 * This HeaderComponent is used to design the Header for all pages.
 * Author: Shakamuri Sushma
 */
class HeaderComponent extends React.Component {
    /**
     * The render method tells react what to display.
     */
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#5d5de9'}}>
                <div className="container">
                    {/* <a className="navbar-brand" href="Dashboard.html">
                       Product Management Tool
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button> */}
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="col-md-6" href="/home">
                                    Product Management Tool
                                </a>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="col-md-6" href="/dashboard">
                                        Product List
                                    </a>
                                </li>
                            </ul>
                            {/* <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link " href="register.html">
                                        Sign Out
                                    </a>
                                </li>
                               
                            </ul> */}
                        </div>
                    </div> 
                </div>
            </nav>
        )
    }
}
export default HeaderComponent;
