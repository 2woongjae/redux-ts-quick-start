import { combineReducers } from 'redux';
import { builds, Builds } from './builds';

export type State = Builds;

const reducer = combineReducers<State>({
  builds
});

export default reducer;
