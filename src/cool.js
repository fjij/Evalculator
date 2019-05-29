function getInput() {
  return "Nyaeh.";
}


class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: false};

    // bind this event (or it doesn't work?)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(this.state);
    //this.props.onClick();
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.text + (this.state.isToggleOn?" ON":" OFF")}</button>;
  }
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
    this.state = {input: getInput()};
  }
  render(){
    return <h2>{this.state.input}</h2>;
  }
}

function App() {
  return (
    <div>
      <InputDisplay />
      <NumberPad />
    </div>
  )
}

const element = <App />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
