import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import CategoryType from './CategoryType';
import CategoryBarterType from './CategoryBarterType';
import CategoryPromatch from './CategoryPromatch';
import CategoryProitem from './CategoryProitem';
import './Category.css';

 class Category extends Component {
    render() {
        return (
            <section className="category">
                 <MDBContainer>
                     <MDBRow>
                         <MDBCol xl="3">
                                 <CategoryType />
                                 <CategoryBarterType />
                                 <CategoryPromatch />
                         </MDBCol>
                         <MDBCol xl="9">
                               <CategoryProitem />
                         </MDBCol>
                     </MDBRow>
                 </MDBContainer>

            </section>
        )
    }
}

export default Category;