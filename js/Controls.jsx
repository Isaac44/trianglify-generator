let React = require('react/addons');
let Trianglify = require('trianglify');
let ColorList = require('./ColorList.jsx');

module.exports = class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let handleOptionChange = this.props.handleOptionChange;

    return (
      <div className="controls">
        <div className="options">
          <p>Hi! You've stumbled across a pre-release tool I'm not quite done with yet. Beware, there be <a href="http://i.imgur.com/rvcJNup.jpg">bugs</a>! Currently, you'll have the best luck with this site in the latest version Chrome or Safari on OSX</p>
          <h3>Width</h3>
          <input type="text" className="option-input" value={this.props.opts.width} 
            onChange={(e) => handleOptionChange({width: parseInt(e.target.value) || 0})}/>
          <h3>Height</h3>
          <input type="text" className="option-input" value={this.props.opts.height} 
            onChange={(e) => handleOptionChange({height: parseInt(e.target.value)})}/>
          <h3>Variance <span className="option-value">{this.props.opts.variance}</span>
          </h3>
          <input type="range" min="0" max="1" step="0.01"
                 value={this.props.opts.variance}
                 onChange={(e) => handleOptionChange({variance: e.target.value})}/>
          <h3>Cell Size <span className="option-value">{this.props.opts.cell_size}</span>
          </h3>
          <input type="range" min="10" max="400" step="5"
                 value={this.props.opts.cell_size}
                 onChange={(e) => handleOptionChange({cell_size: parseInt(e.target.value)})}/>
        </div>
        <ColorList colors={Trianglify.colorbrewer}
        onSelect={(c) => handleOptionChange({x_colors: c})} />
      </div>
    );
  }
};
