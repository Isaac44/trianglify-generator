let React = require('react/addons');
let ColorItem = require('./ColorItem.jsx');
let CustomColors = require('./CustomColors.jsx');

module.exports = class ColorList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    console.log('colors');

    return (
      <div className="color-list">
        <CustomColors onSelect={this.props.onSelect} />
        {Object.keys(this.props.colors).map((k) =>
          <ColorItem name={k} onSelect={this.props.onSelect} colors={this.props.colors[k]} />)}
      </div>
    );
  }
};
