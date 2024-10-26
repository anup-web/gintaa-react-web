import React, { Component, Fragment } from 'react'


 class SelectCountry extends Component {

    constructor(props) {
        super(props);
        this.state = {
          countries: []
           };
      }
    
      componentDidMount() {
        this.setState({
          countries: [
            {id: 'AFG', name: 'Kolkata'},
            {id: 'ALA', name: 'Åland Islands'},
            {id: 'ALB', name: 'Albania'}
          ]
        });
      }


    render() {
        const { countries } = this.state;

    let countriesList = countries.length > 0
    	&& countries.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

        return (
           <Fragment>
                <select>
                 {countriesList}
                </select>
        </Fragment>
        )
    }
}

export default SelectCountry;