import React, { Component, Fragment } from 'react'
import HomeBanner from './HomeBanner';
import HomeAppStore from './HomeAppStore';
import HomeProductCategory from './HomeProductCategory';
import HomeRecentItem from './HomeRecentItem';
import HomeTrandingItems from './HomeTrandingItems';
import HomeProductSlider from './HomeProductSlider';



class Home extends Component {
  render() {
    return (
      <Fragment>             
             <HomeBanner />
             <HomeAppStore />
             <HomeProductSlider />
             <HomeTrandingItems />
             <HomeProductCategory />
             <HomeRecentItem />  
          </Fragment>
    )
  }
}



export default Home;