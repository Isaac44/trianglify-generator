/*
	Defines a component that displays a palette for the user to select.
*/

let React = require('react/addons');

module.exports = class ColorItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div key={this.props.name}
        className='color-item'
        alt={this.props.name}
        onClick={this.props.onSelect.bind(this, this.props.colors)}>
        {this.props.colors.map((c) => <div style={{background: c}}/>)}
      </div>
    );
  }
};
