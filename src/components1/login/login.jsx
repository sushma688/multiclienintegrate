
import React from 'react';
import './login.css'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import service from '../service';

toast.configure();
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
          emailvalid:true,
            passwordvalid:true,
            emailMessage:true,
            passwordMessage:true
        }
        this.handlesubmit=this.handlesubmit.bind(this);
        this.handlecheckPassword=this.handlecheckPassword.bind(this);
        this.handleLoginsubmit=this.handleLoginsubmit.bind(this);
        this.handleRegistersubmit=this.handleRegistersubmit.bind(this);
      }

      handleLoginsubmit=()=>{
       var userid=this.state.email;
       var password=this.state.password;

          if(userid!==''&&password!=='')
          {
               service.getUser(userid,password).then(res=>{
               
                   console.log(res.data);
                   toast.success("user Registration Success",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:false})
                  this.props.history.push("/welcome")
               }).catch(res=>{
                toast.error(" Enter correct data",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:false})
                  
               })
           
          }else{
          if(this.state.email===''){
              this.setState({emailMessage:false})
          }
          if(this.state.password===''){
              this.setState({passwordMessage:false})
          }
          }

          console.log(this.state.email);
          console.log(this.state.password);
        
      }
      handleRegistersubmit=()=>{
          this.props.history.push('/register')
      }
      handlesubmit=()=>{
          
this.props.history.push('/register');
      }
    handleEmail=(e)=>{
        this.setState({email:e.target.value,emailMessage:true});
        
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value,passwordMessage:true});
        console.log(this.state.password)
    }
    // handleLogin=(e)=>{
    //     this.setState({loginas:e.target.value,loginasMessage:true});
    // }
    handlecheckEmail=(e)=>{
        if(e.target.value!==''){
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)){
            this.setState({emailvalid:true,emailMessage:true});
           }else{
              this.setState({emailvalid:false});
           }}else
           {
               this.setState({emailMessage:false})
           }
    }
   handlecheckPassword=(e)=>{
       if(e.target.value!==''){
    if (/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.target.value)){

        this.setState({passwordvalid:true,passwordMessage:true});
       }else{
          this.setState({passwordvalid:false});
       }}else{
           this.setState({passwordMessage:false});
       }
   }
//    handlecheckLogin=(e)=>{
//        if(e.target.value!==''){
//            if(/^[a-zA-Z]$/.test(e.target.value)){
//                this.setState({loginasvalid:true,loginasMessage:true});
//            }
//            else{
//                this.setState({loginasvalid:false});
//            }
//        }else{
//            this.setState({loginasMessage:false});
//        }
//    }
  

    render() {
   
    const boolean=this.props.location.state;
   
    console.log(boolean);
 return(

    <div  >
     
     <div className="Login">
     <div className="Login-box">
         <form >
         <h3> Login Form</h3>
         <div className='textbox'>
            
         <input type="email" placeholder="User Id" name="Email" onChange={this.handleEmail} onBlur={this.handlecheckEmail} value={this.state.email} ></input>
         </div>
         <div style={{height:1}}>
        
         {this.state.emailMessage?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',marginLeft:30,top:-16}}>Required</b>}
        
         {this.state.emailvalid?"":<b style={{color:'red',fontSize:10,marginRight:10,position:'relative',marginLeft:-125,top:-10}}>Enter correct Id</b>}
         
         </div>



         <div className='textbox'>
            
         <input type="password" placeholder="Password" name="password" onChange={this.handlePassword} onBlur={this.handlecheckPassword} value={this.state.password}></input>
         </div>
         <div style={{height:1}}>
        
         {this.state.passwordMessage?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',marginLeft:30,top:-16}}>Required</b>}
        
         {this.state.passwordvalid?"":<b style={{color:'red',fontSize:10,marginRight:10,position:'relative',marginLeft:-100,top:-10}}>Enter password correctly</b>}
         
         </div>
        
         <div className="vi">
<button type="button"  style={{marginRight: 20, display: 'inline-block'}} className="but" onClick={this.handleRegistersubmit}>Sign Up</button>
<button type="button"  style={{marginLeft: 35,width: 100, display: 'inline-block'}} className="but2" onClick={this.handleLoginsubmit}>Sign IN</button></div>
      <br></br>  
</form>
</div>
     </div></div>
 )}
  }
  export default Login;