import React from "react";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Hello there</div>
        <button onClick={() => console.log(`Hello WORLD`)}>Click Me</button>
      </div>
    );
  }
}

export default InfoCard;
