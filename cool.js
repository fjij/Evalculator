var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getInput() {
  return "Nyaeh.";
}

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = { isToggleOn: false };

    // bind this event (or it doesn't work?)
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (state) {
        return {
          isToggleOn: !state.isToggleOn
        };
      });
      console.log(this.state);
      //this.props.onClick();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.handleClick },
        this.props.text + (this.state.isToggleOn ? " ON" : " OFF")
      );
    }
  }]);

  return Button;
}(React.Component);

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

var InputDisplay = function (_React$Component2) {
  _inherits(InputDisplay, _React$Component2);

  function InputDisplay(props) {
    _classCallCheck(this, InputDisplay);

    var _this2 = _possibleConstructorReturn(this, (InputDisplay.__proto__ || Object.getPrototypeOf(InputDisplay)).call(this, props));

    _this2.state = { input: getInput() };
    return _this2;
  }

  _createClass(InputDisplay, [{
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

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(InputDisplay, null),
    React.createElement(NumberPad, null)
  );
}

var element = React.createElement(App, null);
ReactDOM.render(element, document.getElementById('root'));