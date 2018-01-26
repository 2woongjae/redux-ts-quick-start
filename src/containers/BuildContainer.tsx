import * as React from 'react';
import { bindActionCreators, AnyAction } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as BuildActions from '../actions';
import { Builds } from '../reducers/builds';
import { State } from '../reducers/index';
import Build from '../components/Build';

interface BuildProps {}

type BuildStateProps = Builds;

interface BuildDispatchProps {
  actions: {
    addBuild: (text: string) => AnyAction;
    deleteBuild: (id: number) => AnyAction;
  };
}

const Container: React.SFC<
  BuildProps & BuildStateProps & BuildDispatchProps
> = ({ builds, actions }) => (
  <Build
    builds={builds}
    addBuild={actions.addBuild}
    deleteBuild={actions.deleteBuild}
  />
);

const mapStateToProps = (state: State): BuildStateProps => ({
  builds: state.builds
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): BuildDispatchProps => ({
  actions: bindActionCreators(BuildActions, dispatch)
});

const BuildContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default BuildContainer;
