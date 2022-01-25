import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div style={{display:"flex"}}>
                <Link to='/home'  style={{textDecoration:"none",marginLeft:"202px"}}><h1>Home</h1></Link> 

                <Link to='/students'  style={{textDecoration:"none",marginLeft:"406px"}}><h1>Students</h1></Link>

                <Link to='/contact'  style={{textDecoration:"none",marginLeft:"384px"}}><h1>Contactus</h1></Link>


            </div>
        )
        
    }
}
