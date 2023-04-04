const navigationTemplate = document.createElement('template');

navigationTemplate.innerHTML = `
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
  /*#########################################___HEADER____#####################################*/

     .header-bottom {
      align-self: flex-start;
      position: -webkit-sticky; /* Safari */
      position: sticky;
      top: 0;
      height: max-content;
      border-top: 10px solid rgba(239, 28, 36, 1);
      background-color: rgba(0, 174, 239, 1);
      color: rgba(46, 48, 146, 1);
    }
     .header-bottom .menu-cont {
      display: none;
      display: absolute;
      right: 0;
      top: 0;
    }
    .header-bottom .main-nav{
        padding: 0.5rem 0 0.8rem;
    }
     .header-bottom nav .main-nav li {
      height: 100%;
      display: inline-block;
      position: relative;
      margin: 0 0.75rem;
    }
     .header-bottom nav .main-nav li span.material-icons {
      font-size: 24px;
    }
     .header-bottom nav .main-nav li a {
      padding: 0 0.5rem;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1rem;
    }
     .header-bottom nav .main-nav a:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 4px;
      bottom: -8px;
      left: 0;
      background-color: rgb(46, 48, 146, 1);
      transform-origin: bottom right;
      transition: transform 0.4s ease-out;
    }
     .header-bottom nav .main-nav a:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
     .header-bottom nav .main-nav a:hover {
      color: rgb(46, 48, 146, 1);
      transition: color 0.4s ease-in-out;
    }

    </style>
    <div class="header-bottom center">
      <div class="menu-cont">
        <!--a href=""><span class="material-icons">menu</span></a-->
      </div>
      <nav>
        <ul class="main-nav center">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#aim">Aim</a></li>
          <li><a href="#Benefits">Benefits</a></li>
        </ul>
      </nav>
    </div>
    `;

class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(navigationTemplate.content);
  }
}

customElements.define('nav-component', Navigation);