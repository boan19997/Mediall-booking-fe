// import React, { Component, component } from 'react'
// import { connect } from 'react-redux'
// import { FormattedMessage } from 'react-intl'
// import { LANGUAGES } from '../../../utils'

// class LikeAndShare extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }

//     initFacebookSDK() {
//         if (window.FB) {
//             window.FB.XFBML.parse()
//         }

//         let { language } = this.props
//         let locale = language === LANGUAGES.VI ? 'vi_VN' : 'en_US'
//         window.fbAsyncInit = function () {
//             window.FB.init({
//                 appId: process.env.REACT_APP_FACEBOOK_APP_ID,
//                 status: true,
//                 xfbml: true,
//                 version: 'v2.5'
//             })
//         }

//             (function (d) {
//                 var js, id = 'facebook-jssdk'; if (d.getElementById(id)) { return; }
//                 js = d.createElement('script'); js.id = id; js.async = true;
//                 js.src = `https://connect.facebook.net/${locale}/all.js`;
//                 d.getElementsByTagName('head')[0].appendChild(js);
//             }(document));

//         // (function (d, s, id) {
//         //     var js, fjs = d.getElementsByTagName(s)[0]
//         //     if (d.getElementsByTagName(id)) return
//         //     js = d.createElement(s); js.id = id
//         //     js.src = `//connect.facebook.net/${locale}//sdk.js`
//         //     fjs.parentNode.inserBefore(js, fjs)
//         // }(document, 'script', 'facebook-jssdk'))
//     }

//     componentDidMount() {
//         this.initFacebookSDK()
//     }

//     async componentDidUpdate(prevProps, prevState, snapshot) {
//         if (this.props.language !== prevProps.language) {
//             this.initFacebookSDK()
//         }
//     }
// }

// const mapStateToProps = state => {
//     return {
//         language: state.app.language,

//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LikeAndShare);