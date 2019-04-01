const app = document.getElementById("app");

function tick() {
  const time = new Date().toLocaleTimeString();
  const element = <div>It is {time}</div>;
  ReactDOM.render(element, app);
}
setInterval(tick, 1000);