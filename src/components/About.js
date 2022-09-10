import React from 'react'
import about from '../Images/about.png'

function About(props) {
  return (
    <div style={{ minHeight: "calc(100vh - 56px)", backgroundColor: props.theme==="dark"?"#0f0923":"#ededed", color: props.theme==="dark"?"white":"black", padding: "50px 10px" }}> 
      <div className="container" style={{ minHeight: "500px", backgroundColor: props.theme==="dark"?"rgba(106, 81, 142, 0.15)":"#f5f5f5", display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <h1 className="text-center my-4">About GoCalci</h1>
        <img src={about} alt="" width={"200px"} style={{filter: props.theme==="dark"?"invert(0.9)":""}}/>
        <div className='my-4' style={{ maxWidth: "800px", textAlign: "justify", fontSize: "20px", fontWeight: "500"}}>GoCalci is a simple, useful & powerful GUI calculator that can do various mathematical calculations such as additon, subtraction, multiplication, division, square root, trignometric funtions etc. It provides a very clean GUI based look that provides the feel of using physical calculator. Also the Dark Mode feature makes its usage during night very comfortable without giving strain to your eyes.</div>
      </div>
    </div>
  )
}

export default About