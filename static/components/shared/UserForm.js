import Component from "@hydrophobefireman/ui-lib";

export function ErrorPopup(props) {
  return <Popup {...props} title="Something Ain't Right" />;
}

export function SuccessPopup(props) {
  return <Popup {...props} title="Success!" />;
}
export const sanitizeRegExp = /([^\w]|_)/g;

export class Popup extends Component {
  __id = Math.random();
  componentDidMount() {
    const el = document.getElementById(`${this.__id}`);
    el && el.focus();
  }
  render(props) {
    return (
      <div class="app-popup">
        <div class="heading-text clr app-popup-title">{props.title}</div>
        <div>{props.errorHead}</div>
        <div class="err-reasons">
          <div>
            {(props.reasons || []).map((x) => (
              <div> - {x}</div>
            ))}
          </div>
        </div>
        <button id={this.__id} class="app-popup-close" onClick={props.close}>
          OK
        </button>
      </div>
    );
  }
}

export function SocialLinkContainer() {
  return (
    <div class="social-link-container">
      <a
        target="_blank"
        href="https://discord.gg/fz8e6Df"
        class="heading-text clr hoverable"
      >
        Discord
      </a>
      <a
        target="_blank"
        href="https://twitter.com/halocrypt1"
        class="heading-text clr hoverable"
      >
        Twitter
      </a>
    </div>
  );
}
