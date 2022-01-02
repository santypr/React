import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';
import './index.css';

class XSearch extends HTMLElement {
  connectedCallback() {
    const host = document.createElement('span');
    const styles = {
        'display': 'inline-block',
        'padding': "20px",
        'margin': "20px",
        'text-align': "center",
        'line-height': '32px',
        'border': '1px solid cyan',
        'border-radius': '20px',
        '&:hover': {
          'background': 'navy',
          'color': '#fff'
        }
      };
    this.attachShadow({ mode: 'open' }).appendChild(host);

    const name = this.getAttribute('name') as string;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(
      <a href={url} style={styles}>
        <slot></slot>{name}
      </a>, host);
  }
}
customElements.define('x-search', XSearch);

class XButton extends HTMLElement {
  styles = {
    'padding': "20px",
    'margin': "20px",
    'text-align': "center",
    'line-height': '32px',
    'border': '1px solid cyan',
    'border-radius': '20px'
  };

  connectedCallback() {
    const host = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(host);

    const text = this.getAttribute('text') as string;
    ReactDOM.render(
      <button style={this.styles}>
        {text} 
        <div>
          <slot name='slot-icon'></slot>
          <slot></slot>
        </div>
      </button>
      , host);
  }
}
customElements.define('x-button', XButton);