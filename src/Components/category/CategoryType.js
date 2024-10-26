import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";

class CategoryType extends Component {
    render() {
        return (
            <Fragment>
            <h1 className="cate_Title">All Category</h1>
           
             <div className="cate_type">
             <ul className="nav flex-column">
                    <li className="nav-item"><Link to="/">Used Car </Link></li>
                    <li className="nav-item"><Link to="/">Houses & Apartments </Link></li>
                    <li className="nav-item"><Link to="/">Cars </Link></li>
                    <li className="nav-item"><Link to="/">Commercial Vehicles </Link></li>
                    <li className="nav-item"><Link to="/"> Spare Parts </Link></li>
                    <li className="nav-item"><Link to="/">Other Vehicles </Link></li>
                    <li className="nav-item"><Link to="/">Mobile Phones </Link></li>
                    <li className="nav-item"><Link to="/">Accessories </Link></li>
                    <li className="nav-item"><Link to="/">Tablets</Link></li>
                    <li className="nav-item"><Link to="/">Used Car</Link></li>
                    <li className="nav-item"><Link to="/">Houses & Apartments </Link></li>
                    </ul>
             </div>

             </Fragment>
        )
    }
}

export default CategoryType;

        
        
        
       
        
        
        
        
        
        