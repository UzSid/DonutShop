const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    var script_tag = document.getElementById('index_js');
    var redirectUrl = script_tag.getAttribute("data-args");
    fetch(redirectUrl)
    .then(response => response.json())
    .then(json => {
      // loop through the array and use the data property, "name"
      // you could use a regular for loop also, but this syntax
      // is preferred
      let content = "";
      json.forEach(person => {
        content += person.Name;
        content += " is from ";
        content += person.Price;
      }); //end foreach
    return content;
  });
}
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));