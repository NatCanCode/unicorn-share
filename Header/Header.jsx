import React from 'react'
// import '.Header.css'

const Header = (props) => {
    return(
        <header className="header">
        <nav className="nav flex">
          <ul className="nav-links flex">
            <button className="upload" onClick={() => {
                props.handleClick()
            }}>Upload</button>
            <img src="../src/images/lens.svg" alt="black-lens-icon">
          </ul>
        </nav>
        <div className="logo flex">
          <h1><a href="homepage.html">Unicorn Share</a></h1>
        </div>
      </header> 
    )
}

export default Header