const app = document.getElementById("app");

class Counter extends React.Component{
  constructor(...args) {
    super(...args);
  }

  state = { count: 0 };
  handleClick = ()=> {
        this.setState(({ count }) => ({count: count + 1}));
      }

  render() {
    return (
      <button className="big-btn" onClick={this.handleClick}>{this.state.count}</button>
    );
  }
}

const element = <Counter/>
ReactDOM.render(element, app);