import * as React from 'react';
import { AnyAction } from 'redux';
import { Build } from '../reducers/builds';
import BuildAdd from './BuildAdd';
import BuildCard from './BuildCard';

interface BuildProps {
  builds: Build[];
  addBuild: (text: string) => AnyAction;
  deleteBuild: (id: number) => AnyAction;
}

const Build: React.SFC<BuildProps> = props => (
  <div>
    <BuildAdd addBuild={props.addBuild} />
    <div>
      {props.builds.map(build => (
        <BuildCard
          key={build.id}
          id={build.id}
          text={build.text}
          delete={props.deleteBuild}
        />
      ))}
    </div>
  </div>
);

export default Build;
