import React from "react";

const DrumPad = props => {
  const { keyTrigger, url, id } = props;

  return (
    <div className="card">
      <button onClick={() => props.onHandleClick(url, id)}>
        <audio id={keyTrigger} src={url} />
        {keyTrigger}
      </button>
    </div>
  );
};

export default DrumPad;
