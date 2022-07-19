import React from 'react'
import LoginIcon from '@mui/icons-material/Login';

const Topbar = () => {
  return (
    <div className='top-bar'>
        <div className="logo-container">
            <img src="images/betstar-edited.jpg" className="company-logo" alt="betstar main logo" />
        </div>
        <div className="links-container">
            <a href="#jackpot">Jackpot</a>
            <a href="#shinda247">Shinda247</a>
        <div className="login-button-container">
            <button className='login-button'>
            <LoginIcon style={{marginRight: "4px", fontSize: "20px",}}/>
                LOG IN
            </button>
        </div>
        </div>
    </div>
  )
}

export default Topbar