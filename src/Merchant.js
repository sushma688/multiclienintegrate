
import React from 'react';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


toast.configure();
class Merchant extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
        }
        this.handlesubmit=this.handlesubmit.bind(this);
        this.handlecheckMerchant=this.handlecheckMerchant.bind(this);
        
      }

      
      handlesubmit=()=>{
          
this.props.history.push('/home');
      }
      handlesubmitcustomer=()=>{
          
        this.props.history.push('/home1');
              }
   
    handlecheckMerchant=(e)=>{
        if(e.target.value!==''){
        if (/^[a-zA-Z]+$/.test(e.target.value)){
            this.setState({merchantvalid:true,merchantMessage:true});
           }else{
              this.setState({merchantvalid:false});
           }}else
           {
               this.setState({merchantMessage:false})
           }
    }
    handlecheckCustomer=(e)=>{
        if(e.target.value!==''){
        if (/^[a-zA-Z]+$/.test(e.target.value)){
            this.setState({customervalid:true,customerMessage:true});
           }else{
              this.setState({customervalid:false});
           }}else
           {
               this.setState({customerMessage:false})
           }
    }
   
   
  

    render() {
   
    const boolean=this.props.location.state;
   
    console.log(boolean);
 return(

    <div  >
     
     <div className="Merchant">
     <div className="Merchant-box">
         
        
         <div className="vi">
<button type="button"   className="button" onClick={this.handlesubmit}>Merchant</button>
<button type="button"   className="button1" onClick={this.handlesubmitcustomer}>Customer</button>

      <br></br>  

</div>
</div>
     </div></div>
 )}
  }
  export default Merchant;
