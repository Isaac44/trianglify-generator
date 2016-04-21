/*
	Defines a component that allows the user to create custom color palettes.
*/

let React = require('react/addons');
let Modal = require('react-modal');
let ColorPicker = require('react-color');
let ColorItem = require('./ColorItem.jsx');

module.exports = class CustomColors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.paletteList = [];
    this.state.palette = [];
    this.state.modalIsOpen = false;

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.addColor = this.addColor.bind(this);
    this.addPalette = this.addPalette.bind(this);
  }

  /* Open the dialog box and set up parameters */
  openModal() {
    this.state.modalIsOpen = true;
    this.currentColor = "ffffff";
    this.state.palette = [];
    this.setState(this.state);
  }

  /* Close dialog box */
  closeModal() {
    this.state.modalIsOpen = false;
    this.setState(this.state);
  }

  /* Keep track of what the color picker selects */
  changeColor(color) {
    this.currentColor = color.hex;
  }

  /* Add the current color to the custom palette */
  addColor() {
    this.state.palette.push("#" + this.currentColor);
    this.setState(this.state);
  }

  /* Add the custom palette to the list and close the dialog */
  addPalette() {
    this.state.paletteList.unshift(this.state.palette);
    this.closeModal();
  }

  /* Render the component */
  render() {
    var disableAdd = this.state.palette.length < 2;

    return(
      <div>
        <div className="color-title">
          <h3>Color</h3>
        </div>
        <div className="color-custom">
          <input type="button" value="Add Custom Palette" onClick={this.openModal} />
        </div>

        <br /><br />

        {this.state.paletteList.map((palette) =>
          <ColorItem name='custom' onSelect={this.props.onSelect} colors={palette} />)}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style = {{
            content: {
              top: '50%',
              bottom: 'auto',
              left: '50%',
              right: 'auto',
              transform: 'translate(-50%, -50%)',
            }
          }} >

          <ColorPicker.default
            type="sketch"
            color = {this.currentColor}
            onChangeComplete = {this.changeColor} />
          <br />
          <input type="button" value="Add Color" onClick={this.addColor} />
          <br />
          <ColorItem name='preview' onSelect={function(){}} colors={this.state.palette} />

          <br />

          <div className="modal-add">
            <input type="button" value="Add Palette" onClick={this.addPalette} disabled={disableAdd} title={disableAdd ? 'please add at least 2 colors to your palette' : ''} />
          </div>
          <div className="modal-cancel">
            <input type="button" value="Cancel" onClick={this.closeModal} />
          </div>
        </Modal>
      </div>
    );
  }
};
