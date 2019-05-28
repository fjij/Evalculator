
function Button(props){
  return <button onClick={props.onClick}>{props.text}</button>;
}
function NumberPad(props){
  return (
    <div>
      <Button text = "7" />
      <Button text = "8" />
      <Button text = "9" />
      <br />
      <Button text = "4" />
      <Button text = "5" />
      <Button text = "6" />
      <br />
      <Button text = "1" />
      <Button text = "2" />
      <Button text = "3" />
      <br />
      <Button text = "0" />
      <Button text = "." />
    </div>
  );
}
class InputDisplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {input: "no input"};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      input: new Date().toLocaleTimeString()
    })
  }

  render(){
    return <h2>{this.state.input}</h2>;
  }
}

class ClassComponent extends React.Component {
  render(){
    return <h3>hiya, {this.props.name}</h3>;
  }
}
function testOutput () {
  console.log("Yeet.");
}
const name = "coolio";
const element = (
  <div>
    <InputDisplay />
    <NumberPad />
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);
