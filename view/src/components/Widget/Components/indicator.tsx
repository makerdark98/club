import React from 'react';

interface Props {
  on: Boolean,
}

const Indicator : React.FC<Props> = ({ on }) => {
  return <div className="indicator" style={ { display: on ? "flex" : "none" }}/>;
};

export default Indicator;
