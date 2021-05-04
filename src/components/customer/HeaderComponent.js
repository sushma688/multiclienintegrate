import React, { Component } from 'react'
//import {Cart} from './components/Cart'
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#5d5de9'}}>
            <div className="container">
                <a className="col-md-6" href="/home1">
                   Multiclient Service Application
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
   <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
   <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
   </svg> 
                            </a>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="col-md-6" href="/customer">
                                    Customer
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="col-md-6" href="/product">
                                    Products
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

//         return (
//             <div>
//                 <header>
//                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand>Trading Service </Navbar.Brand>
//   <Nav>
//   <Nav.Link href="/home"> <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
//   <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
// </svg> </Nav.Link>
 
//  </Nav>

//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
   
     
//       <NavDropdown title="Services" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="/">
//         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bar-chart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <rect width="4" height="5" x="1" y="10" rx="1"/>
//   <rect width="4" height="9" x="6" y="6" rx="1"/>
//   <rect width="4" height="14" x="11" y="1" rx="1"/>
// </svg> Stock</NavDropdown.Item>
        
//       </NavDropdown>
     
//     </Nav>
//     <Nav>
//       <Nav.Link href="#action">My Profile</Nav.Link>
      
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//                 </header>
//             </div>
//         )
    }
}

export default HeaderComponent