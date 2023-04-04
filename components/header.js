const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&display=swap");
  .center {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
    color: rgba(5,5,5, 1);
    cursor: pointer;
  }
  h1{
    all: unset;
  }
  p{
    all: unset;
  }
  ul{
    all: unset;
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  /*#########################################___HEADER____#####################################*/
  header {
    color: rgba(5,5,5,1);
    font-size: 1.1rem;
    margin-top: -20px;
    padding-top: 10px;
    background-color: rgba(240, 240, 240, 1);
    z-index: 5;
    width: 100%;
    font-weight: 600;
    transition: all 0.4s ease-in-out;
    height: max-content;
  }
  
  .header-container {
    height: max-content;
  }
  .header-container .header-top {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
  .header-container .header-top .center-top {
    margin: 0 auto;
    padding-top: 20px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin-bottom: 1rem;
  }
  .header-container .header-top .center-top img {
    height: 10;
  }
  .header-container .header-top .center-top .spacer {
    width: 2rem;
  }
  .header-container .header-top .center-top .head-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header-container .header-top .center-top .head-title h1 {
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }
  .header-container .header-top .center-top .head-title p {
    color: rgb(5, 5, 5, 0.8);
    font-size: 1.2rem;
  }
  .header-container .header-top .left-top img {
    width: 80px;
  }
  .header-container .header-top .right-top img {
    width: 130px;
  }


  /*#########################################___RESPONSIVENESS____#####################################*/
@media only screen and (min-width: 0px) and (max-width: 800px) {
  header {
    margin-top: 0px;
    padding-top: 0px;
    font-weight: 600;
  }
  .header-container {
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }
  .header-container .header-top {
    padding-bottom: 1em;
    display: block;
  }
  .header-container .header-top .center-top {
    flex-direction: column;
    margin: 0 auto;
  }
  .header-container .header-top .center-top img {
    height: 100px;
  }
  .header-container .header-top .center-top .spacer {
    height: 0.4rem;
  }
  .header-container .header-top .center-top .head-title h1 {
    font-size: 1.5rem;
  }
  .header-container .header-top .center-top .head-title p {
    font-size: 1.2rem;
  }
  .header-container .header-top .left-top {
    display: none;
  }
  .header-container .header-top .right-top {
    display: none;
  }


  </style>

  <header>
  <div class="header-container">
    <div class="header-top">
      <div class="left-top center">
        <img src="assets/images/Anna_University_Logo.png" alt="" />
      </div>
      <div class="center-top center">
        <div class="logo-cont">
          <img
            class="logo"
            src="assets/images/ncc_logo.png"
            alt="NCC logo"
            style="width: 20"
          />
        </div>
        <div class="spacer">
          <p></p>
        </div>
        <div class="head-title">
          <h1>National Cadet Corps</h1>
          <p>Anna University</p>
        </div>
      </div>
      <div class="right-top center">
        <img src="assets/images/azadi_ka_amrit_1.png" alt="" />
      </div>
    </div> 
  </div>
  </header>
  
`;



    // .header-container .header-bottom {
    //   position: -webkit-sticky; /* Safari */
    //   position: sticky;
    //   top: 0;
    //   height: 8vh;
    //   border-top: 10px solid rgba(239, 28, 36, 1);
    //   background-color: rgba(0, 174, 239, 1);
    //   color: rgba(46, 48, 146, 1);
    // }
    // .header-container .header-bottom .menu-cont {
    //   display: none;
    //   display: absolute;
    //   right: 0;
    //   top: 0;
    // }
    // .header-container .header-bottom nav {
    //   margin: 0.8rem 0;
    // }
    // .header-container .header-bottom nav .main-nav li {
    //   height: 100%;
    //   display: inline-block;
    //   position: relative;
    // }
    // .header-container .header-bottom nav .main-nav li span.material-icons {
    //   font-size: 24px;
    // }
    // .header-container .header-bottom nav .main-nav li a {
    //   margin: 0 1em;
    //   padding: 10px 10px;
    //   text-transform: uppercase;
    //   font-weight: 700;
    //   font-size: 1rem;
    // }
    // .header-container .header-bottom nav .main-nav a:after {
    //   content: "";
    //   position: absolute;
    //   width: 100%;
    //   transform: scaleX(0);
    //   height: 4px;
    //   bottom: -8px;
    //   left: 0;
    //   background-color: rgb(46, 48, 146, 1);
    //   transform-origin: bottom right;
    //   transition: transform 0.4s ease-out;
    // }
    // .header-container .header-bottom nav .main-nav a:hover:after {
    //   transform: scaleX(1);
    //   transform-origin: bottom left;
    // }
    // .header-container .header-bottom nav .main-nav a:hover {
    //   color: rgb(46, 48, 146, 1);
    //   transition: color 0.4s ease-in-out;
    // }

    // <div class="header-bottom center">
    //   <div class="menu-cont">
    //     <a href=""><span class="material-icons">menu</span></a>
    //   </div>
    //   <nav>
    //     <ul class="main-nav center">
    //       <!-- <li>
    //         <a href="#home">Home</a>
    //       </li> -->
    //       <li><a href="#aim">Aim</a></li>
    //       <li><a href="#Benefits">Benefits</a></li>
    //       <li><a href="#">About</a></li>
    //     </ul>
    //   </nav>
    // </div>

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);