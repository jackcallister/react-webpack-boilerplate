var React = require('react'),
    Component = require('./component');

var App = React.createClass({

  render: function() {
    return (
      <Component />
    );
  }

});

React.render(<App />, document.body);
