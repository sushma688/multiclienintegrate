import '../components1/header.css'
import {Button} from '@material-ui/core'

import {history} from './login/history'


const handle=()=>{
history.push("/login")
}

const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item' style={{fontSize:60, fontfamily:'Arial, sans-serif',color:'white'}}> &nbsp;&nbsp;Multi-Client Application</div>
        {/* <Button className='navbar__item' onClick={contact} variant='outlined' style={{left:-120,color:'white'}}>Contact</Button>
        <Button className='navbar__item'variant='outlined' style={{left:-110,color:'white'}}>Help</Button>          */}
        {/* <Button className='navbar__item'variant='outlined' style={{left:-60,color:'white'}} onClick={this.login}>Sign In</Button>    */}
        {/* <Button className='navbar__item'variant='outlined' style={{left:-40,color:'white'}}>Register</Button>   */}
        <Button className='navbar__item' onClick={handle} variant='outlined' style={{left:-130,color:'white'}}>sign In</Button>
        
       
    </header>
);


export default NavBar;
