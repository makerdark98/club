import React, { Component } from "react";
import { Color } from "csstype";
import Indicator from "../Components/indicator";

interface Position {
    top: number,
    left: number,
}

interface Size {
    width: number,
    height: number,
}

interface Properties {
    position: Position,
    size: Size,
    color: Color
}

interface Props {
    properties: Properties,
}

interface State {
  isLoading: Boolean,
}

class Widget extends Component<Props, State> {
  constructor (props:Props) {
    super(props);
    this.setState({
      isLoading: true,
    });
  }

  componentWillMount () {
    
  }

render() {
  const { isLoading } = this.state;
  return (<div className="Widget">
    <Indicator on={ isLoading } />
  </div>);
}
};

export default Widget;
