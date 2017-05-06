 var config = {
  apiKey: "AIzaSyB3wngRS_nXbAq1_-Pta0Rw9skhrPJsLdM",
  authDomain: "prinkspot.firebaseapp.com",
  databaseURL: "https://prinkspot.firebaseio.com/"
 };

 firebase.initializeApp(config);

   window.fbAsyncInit = function () {
            FB.init({
                appId: '1175522519135953',
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use graph api version 2.5
            });

            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.

            FB.getLoginStatus(function (response) {
              console.log(response);
                statusChangeCallback(response);
            });

        };

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


$(document).ready(function () {
  $("#test").click(function(evt){
   console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Successful login for: ' , response);
                document.getElementById('status').innerHTML =
                  'Thanks for logging in, ' + response.name + '!';
            });

            FB.api(
    "/me/feed",
    function (response) {
        if (response && !response.error) {
            /* handle the result */
            console.log("fb-feed", response);
        }
    }
);
  });

  $("#btn-fb-login").click(function (evt) {
    var auth = firebase.auth();

    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithRedirect(provider).then(function (result) {
      // User signed in!
      console.log(result);
      var uid = result.user.uid;
    }).catch(function (error) {
      // An error occurred
       console.log(error);
    });
  });


  //initialize swiper when document ready  
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    autoplayDisableOnInteraction: false,
    effect: 'flip',
    autoplay: 3500,
    grabCursor: true,
    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onSlideChangeEnd: function (swiper) {
      $(".swiper-content").css("top", "70%").css("opacity", "1");
    },
    onSlideChangeStart: function (swiper) {
      $(".swiper-content").css("top", "20%").css("opacity", "0");
    },
  });
  var NavBox = React.createClass({
    render: function () {
      var divStyle = {
        background: 'url(' + this.props.url + ') no-repeat center center',
        position: 'relative',
      };
      return (
        <div className="nav-box col-xs-12 col-sm-12 col-md-3 col-lg-3" style={divStyle}>
          <div className="nav-box-content">
            <a className="btn btn-transparent">
              {this.props.caption}
            </a>
          </div>
        </div>
      );
    }
  });

  var NavBoxContainer = React.createClass({
    render: function () {
      return (
        <div className="nav-box-container row">
          <NavBox caption="งานรับปริญญา" url="images/nav-box-graduation.png" />
          <NavBox caption="งานแต่งงาน" url="images/nav-box-wedding.png" />
          <NavBox caption="งานเพื่อนเจ้าสาว/เจ้าบ่าว" url="images/nav-box-wedding-friend.png" />
          <NavBox caption="งานจิปาถะ" url="images/nav-box-other.png"/>
        </div>
      );
    }
  });

  ReactDOM.render(
    <NavBoxContainer />,
    document.getElementById('nav-box-container')
  );
});

// tutorial1.js
