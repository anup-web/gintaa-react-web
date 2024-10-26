import React, { Component} from 'react'
import { MDBContainer} from "mdbreact";
import createHistory from 'history/createBrowserHistory';

 class HomeBanner extends Component {

      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) { 
        const history = createHistory();
        history.push('/verify');
      }

    render() {
        return (
            
                   <section className="home_banner">
                      <MDBContainer>
                        <div className="banner_content float-left">
                        <h1 className="text-white">500+people are waiting</h1>
                        <h2 className="font-weight-bold text-white text-uppercase">to get your Old Phone</h2>

                       <form className="register-start" onSubmit={this.handleSubmit}>
                       <div className="input-group custom_control">
                          <div className="input-group-prepend">
                            <div className="input-group-text">91</div>
                          </div>
                          <input type="text" 
                           pattern="[0-9]*"
                           value={this.state.value}
                           onChange={this.handleChange}
                          className="form-control" 
                          placeholder="9002978651" required />

                          <button type="submit"
                          value="Submit" 
                           className="btn btn-success">
                           Get started <img src="assets/images/next-page.png" alt="next page" />
                         </button>
                         
                        </div>
                      </form> 

                      </div>
                     </MDBContainer> 
                      </section> 
        )
    }
}

export default HomeBanner;


