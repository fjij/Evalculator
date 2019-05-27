'use strict';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result : 0};
  }

  render() {
    return React.createElement(ResultDisplay)
    return (
      <ResultDisplay value = "8"/>
    );
  }
}

class ResultDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: 0 };
  }
  render(){
    return this.state.value;
  }
}

const domContainer = document.querySelector('#calculator_container');
ReactDOM.render(React.createElement(Calculator), domContainer);
