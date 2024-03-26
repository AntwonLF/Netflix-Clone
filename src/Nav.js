import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
  const [show, hadnleShow] = useState(false);

  const tranisitionNavBar = () => {
    if (window.scrollY > 100) {
      hadnleShow(true);
    } else {
      hadnleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", tranisitionNavBar);
    return () => window.removeEventListener("scrol", tranisitionNavBar);
  }, [])


  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_contents'>
        <img
          className='nav_logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />

        <img
          className='nav_avatar'
          src="https://i.pinimg.com/474x/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.jpg"
          alt=""
        />

      </div>
    </div >
  )
}

export default Nav