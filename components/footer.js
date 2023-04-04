const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&display=swap");
    footer {
      height: content-max;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      background-color: #dfdfe2;
    }
    .social-handle{
      display: flex;
      width: min-content;
      align-items: center;

    }
    ul {
      margin: 15px 0;
      padding: 0;
      display: flex;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      background: #dfdfe2;
      font-family: "Rubik", sans-serif;
      font-weight: 400;
      font-size: 15px;
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
      padding: 4px 8px;
      border-radius: 5px;
      transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out, color 0.3s ease-in-out;
    }
    a:hover {
      color: #fefefe;
      box-shadow: 1px 1px 5px  #999;
      transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.5s ease-in-out, color 0.3s ease-in-out;
    }
    .fb:hover{
      background: #4e71ba;
    }
    .ig:hover{
      background: #cd486b;
    }
    .in:hover{
      background: #0A66C2;
    }
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
    li a p{
      margin: 0;
    }

    /*#########################################___HEADER____#####################################*/

    @media only screen and (min-width: 0px) and (max-width: 400px) {
      a{
        color: #fefefe;
      }
      .fb{
        background: #4e71ba;
      }
      .ig{
        background: #cd486b;
      }
      .in{
        background: #0A66C2;
      }
      li a p{
        display: none;
      }
  }
  </style>

  <footer>
    <ul class="social-row">
      <li>
        <a class="social-handle fb" href="https://www.facebook.com/nccarmy.annauniv" target="_blank">
        <i class="fab fa-facebook-square"></i> <p>&nbsp;&nbsp;Facebook</p>
        </a>
      </li>
      <li>
        <a class="social-handle ig" href="https://www.instagram.com/nccarmyannauniv/" target="_blank">
          <i class="fab fa-instagram"></i> <p>&nbsp;&nbsp;Instagram</p>
        </a>
      </li>
      <li>
        <a class="social-handle in" href="https://www.linkedin.com/company/ncc-army-anna-university/" target="_blank">
          <i class="fab fa-linkedin"></i> <p>&nbsp;&nbsp;LinkedIn</p>
        </a>
      </li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);