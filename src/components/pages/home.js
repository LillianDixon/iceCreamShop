import React, { Component } from 'react';
import FooterContainer from "../footer/footer"

import NavigationContainer from "../navigation/navigation-container"

export default class Home extends Component {
  render() {
    return(
      <div className='homepage'>
        <NavigationContainer url="url(https://files.slack.com/files-pri/T208051T5-FGE63FQJV/screenshot_2019-02-22_16.21.45.png)"/>


        <div className='highlight-section'>
          <h1>Welcome to Monty’s Ice Cream</h1>
          <h3>Monty’s hand made ice cream stems from a family tradition of using local products including farm-fresh cream and garden-ripened fruit. Wholesome ingredients have been a staple in the Montague household for decades.</h3>
          <h3>Monty’s ice cream is best enjoyed with family and friends.</h3>
          <h3>Hand made and 100% real. Enjoy!</h3>
        </div>

        <div className='google-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.005013776951!2d-111.8993669488418!3d40.43088787926213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752802e6aad51d7%3A0x6f05c5abc83b5620!2sMo&#39;+Bettahs+Hawaiian+Style!5e0!3m2!1sen!2sus!4v1550858380714" style={{width: '100%', height: '450px'}}></iframe>
        </div>
      </div>
    );
  }
}