import React, {Component} from 'react';


export default class FooterContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
            <div class="footer">
                <img src="https://files.slack.com/files-pri/T208051T5-FGDNRC7B2/monty_s_ice_cream_logo_.png"></img>
                <div class="social-media-icons-wrapper">
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-vimeo-square"></i>
                    </a>
                </div>
                <p> &copy; 2019 Montys IceCream &#124; all rights reserved</p>
            </div>

    )}
}