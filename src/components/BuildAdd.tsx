import * as React from 'react';
import { AnyAction } from 'redux';

interface BuildAddProps {
  addBuild: (text: string) => AnyAction;
}

const BuildAdd: React.SFC<BuildAddProps> = props => {
  let input: HTMLInputElement;
  function addBuild() {
    props.addBuild(input.value);
    input.value = '';
  }
  return (
    <div>
      <input
        type="text"
        ref={ref => {
          input = ref as HTMLInputElement;
        }}
      />
      <button onClick={addBuild}>추가</button>
    </div>
  );
};

export default BuildAdd;
