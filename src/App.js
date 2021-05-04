
import './App.css';

import Home from './components/layout/Home';
import Dashboard from './components/Dashboard';

import CreateCustomerComponent from './components/customer/CreateCustomerComponent';
import ListCustomerComponent from './components/customer/ListCustomerComponent';
import ViewCustomerComponent from './components/customer/ViewCustomerComponent';
import UpdateCustomerComponent from './components/customer/UpdateCustomerComponent';
import CustomerHome from './components/customer/CustomerHome';
import adp from './components/merchants/adp';
import UpdateProduct from './components/merchants/UpdateProduct';
import Login from './components1/login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components1/Header';
import welcome from './components1/login/welcome'
import Register from './components1/registration/registration';
import { Provider } from 'react-redux';
import store from './store';
import {Router,Route} from "react-router-dom";
import {history} from './components1/login/history'

import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Merchant from './Merchant';
import Products from './components/cart/section/Products';
import Cart from './components/cart/section/Cart';
import Header from './components/cart/Header';
import { DataProvider} from './components/cart/Context'
import Section from './components/cart/Section';

toast.configure();


function App() {
  return (
    <div className="App">
      <div>
      <Router history={history} forceRefresh={true} >
       <switch>
         <Route  path="/" component={NavBar}></Route>
         <Route  path="/login" component={Login}></Route>
         <Route  path="/register" component={Register}></Route>
         <Route path="/welcome" component={Merchant}/>
          <Provider store={store}>
            <Route  path="/home" component={Home}></Route>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/addProduct" component={adp}/>
            <Route exact path="/updateProduct/:productId" component={UpdateProduct}/>
            <Route path="/home1" component ={CustomerHome}></Route> 
            <Route path = "/customer" exact component = {ListCustomerComponent}></Route>
            <Route path = "/addCustomer" component = {CreateCustomerComponent}></Route>
            <Route path = "/viewCustomer" component = {ViewCustomerComponent}></Route>
            <Route path = "/updateCustomer" component = {UpdateCustomerComponent}></Route>
          </Provider>
          <DataProvider>
          {/* <Header/> */}
          <Section />
          </DataProvider>
        </switch>
      </Router>    
    </div>
   </div>
  );
}

export default App;
