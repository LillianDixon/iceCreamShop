import React, { Component } from 'react';
import FooterContainer from "../footer/footer"

import NavigationContainer from "../navigation/navigation-container"

export default class Home extends Component {
  render() {
    return(
      <div className='homepage'>
        <NavigationContainer url=""/>


        <div className='highlight-section'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete.</p>
          <p>Quod iam a me expectare noli. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Nescio quo modo praetervolavit oratio. At ille pellit, qui permulcet sensum voluptate.</p>
          <p>Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Nihil sane.</p>
        </div>

        <div className='google-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.005013776951!2d-111.8993669488418!3d40.43088787926213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752802e6aad51d7%3A0x6f05c5abc83b5620!2sMo&#39;+Bettahs+Hawaiian+Style!5e0!3m2!1sen!2sus!4v1550858380714" style={{width: '100%', height: '450px'}}></iframe>
        </div>
      </div>
    );
  }
}