import React from 'react';
import './register.css'

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import service from '../service';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Register extends React.Component {
    constructor(props) {

        super(props);
        // Don't call this.setState() here!
  this.state={
    show:false,
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    passwordMatch:false,
    passwordValidate:true,
    emailValidate:true,
    mobileNumberValidate:true,
    firstNameValidate:true,
    lastNameValidate:true,
    passwordMatch1:true,
    emailMessage:true,
    mobilenumberMessage:true,
    passwordMessage:true,
    dataSubmitted:false,
    submittedsuccess:false
  }
      }
      handlefirstName=(e)=>{
         this.setState({firstName:e.target.value});
         this.setState({firstNameValidate:true});
      }
      handlelastName=(e)=>{
          this.setState({lastName:e.target.value});
          this.setState({lastNameValidate:true});
      }
      handleMobile=(e)=>{
          this.setState({phoneNumber:e.target.value});
          this.setState({mobileNumberValidate:true});
      }
      handleEmail=(e)=>{
          this.setState({email:e.target.value});
          this.setState({emailValidate:true});

      }
      handleconfirmPassword=(e)=>{
          var c=e.target.value;
          var v=this.state.password;
          if(v===c){
            this.setState({passwordMatch:false})
              this.setState({confirmPassword:e.target.value});
          }
          else{
              
              this.setState({passwordMatch:true})
          }
      }
      
      checkdata=(e)=>{
      
        this.setState({show:true});
        console.log(this.state.show);
        
        
      }


    handlesubmit=(e)=>{
        e.preventDefault();

        if(this.state.firstName&&this.state.lastName&&this.state.phoneNumber&&this.state.email&&this.state.password&&this.state.confirmPassword)
       {
        let data={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,phoneNumber:this.state.phoneNumber,password:this.state.password,confirmPassword:this.state.confirmPassword};
        console.log('data=>' + JSON.stringify(data));
        service.createUserData(data).then(res=>{
            console.log(res.data);
            this.props.history.push({pathname:"/login",state:{submitted:this.state.dataSubmitted}});
            this.setState({submittedsuccess:true});
            toast.success("Registration Success",{
                position: toast.POSITION.TOP_CENTER,
                autoClose:false
            })
            this.setState({dataSubmitted:true})
           
            
        }).catch(res=>{
            toast.error("Something went Wrong Try agian later",{
                position: toast.POSITION.TOP_CENTER
            })

            if(this.state.submittedsuccess){
                toast.success("Registration Success",{
                    position: toast.POSITION.TOP_CENTER,
                    transition:5000 
                })
            }
           
        });
    }else{
        if(this.state.firstName===''){
            this.setState({firstNameValidate:false});
        } if(this.state.lastName===''){
            this.setState({lastNameValidate:false});
        }if(this.state.email===''){
            this.setState({emailValidate:false});
        }if(this.state.phoneNumber===''){
            this.setState({mobileNumberValidate:false});
        }if(this.state.password===''){
            this.setState({passwordValidate:false});
        }
    
    }
        


    }


checkEmail=(e)=>{
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)){
     this.setState({emailMessage:true});
    }else{
       this.setState({emailMessage:false});
    }
}
checkNUmber=(e)=>{
    if ( /^[0-9\b]{10,12}$/.test(e.target.value)){
     this.setState({mobilenumberMessage:true});
    }else{
       this.setState({mobilenumberMessage:false});
    }
}
checkPassword=(e)=>{
    if (/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e.target.value)){
     this.setState({passwordMessage:true});
    }else{
       this.setState({passwordMessage:false});
    }
}



      checkdata1=()=>{
          this.setState({show:false});
          console.log(this.state.show);
      }
      setPassword=(event)=>{
          console.log(event.target.value);
          var v=event.target.value;
        console.log(v.length)
        console.log(this.state.password)
       
          this.setState({password:event.target.value,
        passwordValidate:true});
        
         
       
      }
     
    render() {
        
 return(
  <div className="Login1">
     <div className="Login-box1">
         <form >
         <h1>Registration Form</h1>
        
         
         <div className='textbox1'>
            
         <input type="text" placeholder="FIrst Name" name='FirstName' onChange={this.handlefirstName}  required></input>
         </div>
         <div style={{height:1}}>
       
         {this.state.firstNameValidate?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',top:-8}}>Required</b>}
         </div> <div className='textbox1'>
            
         <input type="text" placeholder="Last Name" name="LastName" onChange={this.handlelastName}  required></input>
         </div> <div style={{height:1}}>
         
         {this.state.lastNameValidate?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',top:-8}}>Required</b>}
        </div>
         <div className='textbox1'>
          
         <input type="email" placeholder="Email Id" name="Email" onChange={this.handleEmail} onBlur={this.checkEmail} required></input>
         </div> <div style={{height:1}}>
        
         {this.state.emailValidate?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',top:-8}}>Required</b>}
        
         {this.state.emailMessage?"":<b style={{color:'red',fontSize:10,marginLeft:10,float:'left',top:-8}}>Enter Valid MailId</b>}
        </div>
         <div className='textbox1'>
          
         <input type="tel" placeholder="Mobile NUmber" name="PhoneNumber" onChange={this.handleMobile}  onBlur={this.checkNUmber} required></input>
         </div> <div style={{height:1}}>
        
         {this.state.mobileNumberValidate?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',top:-8}}>Required</b>}
         
         {this.state.mobilenumberMessage?"":<b style={{color:'red',fontSize:10,marginLeft:10,float:'left',top:-8}}>Enter Valid MobileNumber</b>}
        </div>
         <div className='textbox1'>
            {this.state.show? <VisibilityOffIcon onClick={this.checkdata1}
             style={{
               width:36,
               
               position:'absolute',
               marginLeft:100,
               float:'right',
               textAlign:'center',
              
              }}
              ></VisibilityOffIcon>:
             <VisibilityIcon onClick={this.checkdata}
             style={{
               width:36,
               
               position:'absolute',
               marginLeft:100,
               float:'right',
               textAlign:'center',
              
              }}
             ></VisibilityIcon>}
         <input type={this.state.show?'text':'password'} placeholder="Password"  onChange={this.setPassword}  onBlur={this.checkPassword} value={this.state.password} ></input>
         </div> <div style={{height:1}}>
        
         {this.state.passwordValidate?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',top:-8}}>Required</b>}
        
         {this.state.passwordMessage?"":<b style={{color:'red',fontSize:10,marginLeft:10,float:'left',top:-8}}>Enter Valid Password</b>}
        </div>
         <div className='textbox1'>
            
         <input type="password" placeholder="Confirm Password" name="Password" onBlur={this.handleconfirmPassword} required></input>
         </div>
         {this.state.passwordMatch?<span style={{color:'red',fontSize:10,position:'relative',marginBottom:10,marginLeft:8,float:'left'}} ><b style={{marginLeft:40}}>* Password Must Match</b></span>:''}
         <div style={{height:1}}>
         
         {this.state.passwordValidate?"":<b style={{color:'red',fontSize:10,marginRight:225,position:'relative',top:-8}}>Required</b>}
        </div>
<button type="button" className="but1" onClick={this.handlesubmit}>Sign Up</button>
                   

</form></div>
     </div>

 )}}
 export default Register