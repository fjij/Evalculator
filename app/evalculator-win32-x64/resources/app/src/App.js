import React from 'react';
import './App.css';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    /* Replaces handleChange with a version of handleChange where
    'this' always refers to this inputField (instead of just calling 'this' from
    the scope in which the function is called (probably html global scope))

    This happens because when we say onInput={this.handleChange},
    we pass the function without passing the context. This happens whenever
    you pass a function without using the (), calling it. Another way we could
    have passed context would be to do onInput={(e) => this.handleChange()}*/
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // The value of the text should effectively mirror our 'value'.
    // Whenever the input is changed (onInput), value is updated to match
  }

  handleSubmit(event) {
    this.props.onInputUpdated(this.state.value);
    event.preventDefault(); // Stops the html page from sending data or whatever
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: 0,
    };
  }

  handleInputUpdated(input) {
    const output = evalutateExpression(input)
    this.setState({
      output: output
    });
  }

  render() {
    const title = "Evalculator";
    const output = this.state.output;
    let result;
    if (output === null){
      result = "Cannot compute.";
    } else {
      result = output;
    }
    return (
      <div className="App">
        <h1>{title}</h1>
        <InputField onInputUpdated={(input) => this.handleInputUpdated(input)}/>
        <h3>{result}</h3>
      </div>
    );
  }
}

function evalutateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    // Could not evaluate, return null
    return null;
  }
}

export default App;
