import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <div className='homepage'>
        <div className='hero-section'>                      
        </div>

        <div className='highlight-section'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete.</p>
          <p>Non enim iam stirpis bonum quaeret, sed animalis. Quod cum dixissent, ille contra. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Nihil sane.</p>
          <p>Quod iam a me expectare noli.</p>
        </div>

        <div className='google-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.005013776951!2d-111.8993669488418!3d40.43088787926213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752802e6aad51d7%3A0x6f05c5abc83b5620!2sMo&#39;+Bettahs+Hawaiian+Style!5e0!3m2!1sen!2sus!4v1550858380714" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}