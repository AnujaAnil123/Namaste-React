import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constant'

const Header = ()=>{

    const [btnName,setBtnName] = useState("SignIn")  
      return <div className='header'>
        <div className='logo'> <img src={LOGO_URL}></img></div>
        <div className='navItems'>
         <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact Us</li>
             <li>Cart</li>
             <button onClick={() => setBtnName(btnName === "SignIn" ? "LogOut" : "SignIn")}>
  {btnName}
</button>
         </ul>
        </div>
     </div>
 }

export default Header