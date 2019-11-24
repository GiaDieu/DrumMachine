import React from "react";
import { drumPlay } from "../action";
import DrumPad from "../components/DrumPad";
import { connect } from "react-redux";
import "../css/style.css";

class DrumBank extends React.Component {
  render() {
    const Bank = this.props.bank.map(obj => {
      return (
        <div key={obj.keyCode}>
          <DrumPad
            id={obj.id}
            url={obj.url}
            keyTrigger={obj.keyTrigger}
            keyCode={obj.keyCode}
            onHandleClick={this.props.drumPlay}
            display={this.props.display}
          />
        </div>
      );
    });

    return (
      <div>
        <h1>Drum Machine</h1>
        <div className="display">{this.props.display}</div>
        <div className="tab-button">{Bank}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bank: state.bank,
    display: state.switchTrigger
  };
};
export default connect(mapStateToProps, { drumPlay })(DrumBank);
