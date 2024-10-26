import React, { Component, Fragment } from 'react'

 class CategoryBarterType extends Component {
    
    render() {
        return (
            <Fragment>
                <h2 className="barter_title">Barter Type</h2>
            
            <form>
                <div className="form_custom">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Any</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Item</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Service</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" for="exampleCheck1">Money</label>
                    </div>        
                </div>
            </form>
        
            
            </Fragment>
        )
    }
}

export default CategoryBarterType;
