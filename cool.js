var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Button(props) {
  return React.createElement(
    "button",
    { onClick: props.onClick },
    props.text
  );
}
function NumberPad(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Button, { text: "7" }),
    React.createElement(Button, { text: "8" }),
    React.createElement(Button, { text: "9" }),
    React.createElement("br", null),
    React.createElement(Button, { text: "4" }),
    React.createElement(Button, { text: "5" }),
    React.createElement(Button, { text: "6" }),
    React.createElement("br", null),
    React.createElement(Button, { text: "1" }),
    React.createElement(Button, { text: "2" }),
    React.createElement(Button, { text: "3" }),
    React.createElement("br", null),
    React.createElement(Button, { text: "0" }),
    React.createElement(Button, { text: "." })
  );
}

var InputDisplay = function (_React$Component) {
  _inherits(InputDisplay, _React$Component);

  function InputDisplay(props) {
    _classCallCheck(this, InputDisplay);

    var _this = _possibleConstructorReturn(this, (InputDisplay.__proto__ || Object.getPrototypeOf(InputDisplay)).call(this, props));

    _this.state = { input: "no input" };
    return _this;
  }

  _createClass(InputDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        input: new Date().toLocaleTimeString()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "h2",
        null,
        this.state.input
      );
    }
  }]);

  return InputDisplay;
}(React.Component);

var ClassComponent = function (_React$Component2) {
  _inherits(ClassComponent, _React$Component2);

  function ClassComponent() {
    _classCallCheck(this, ClassComponent);

    return _possibleConstructorReturn(this, (ClassComponent.__proto__ || Object.getPrototypeOf(ClassComponent)).apply(this, arguments));
  }

  _createClass(ClassComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "hiya, ",
        this.props.name
      );
    }
  }]);

  return ClassComponent;
}(React.Component);

function testOutput() {
  console.log("Yeet.");
}
var name = "coolio";
var element = React.createElement(
  "div",
  null,
  React.createElement(InputDisplay, null),
  React.createElement(NumberPad, null)
);
ReactDOM.render(element, document.getElementById('root'));