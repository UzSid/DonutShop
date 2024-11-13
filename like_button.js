/*function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, title: 'Post 1', description: 'This is the first post.' },
      { id: 2, title: 'Post 2', description: 'This is the second post.' }
    ]);
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));*/

/*const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));*/

const root = ReactDOM.createRoot(
  document.getElementById('like_button_container')
);
const element = <h1>Hello, world</h1>;
root.render(element);