const app = document.getElementById("app");
class StopWatch extends React.Component{
  state = { lapse: 0, running: false };
  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          });
        });
      }
      return { running: !state.running };
    });
  };

  handleResetClick = () => {
    clearInterval(this.timer);    
    this.setState({lapse:0, running: false});
  };
  
  // To stop memory leaks
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { lapse, running } = this.state;
    const buttonStyle = {
      border: '2px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200,
    };
    return (
      <div style={{textAlign: 'center'}}>
        <label style={{ fontSize: '5em', display: 'block' }}>
          { lapse } ms
        </label>
        <button style={buttonStyle} onClick={this.handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button style={buttonStyle} onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}



const element = <StopWatch/>;

ReactDOM.render(element, app);
