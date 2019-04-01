const app = document.getElementById("app");

const state = { eventCount: 0, username: '' };

function App() {
  return (
    <div>
      <p>There have been {state.eventCount} events</p>
      <div><button onClick={increment}>HIT!</button></div>
      <p>You typed: {state.username}</p>
      <p><input onChange={updateUsername} /></p>
    </div>
  );
}



function renderApp() {
  ReactDOM.render(<App/>, app);
}

function setState(newState) {
  Object.assign(state, newState);
  renderApp();
}

function increment() {
  setState({eventCount: state.eventCount + 1});
}

function updateUsername(event) {
  setState({username: event.target.value});
}
renderApp();