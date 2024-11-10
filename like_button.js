const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    return 'amogus';
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));