import * as React from 'react';

interface BuildCardProps {
  id: number;
  text: string;
  delete: Function;
}

const BuildCard: React.SFC<BuildCardProps> = props => (
  <div>
    <h2>build</h2>
    <p>{props.text}</p>
    <button onClick={() => props.delete(props.id)}>delete</button>
  </div>
);

export default BuildCard;
