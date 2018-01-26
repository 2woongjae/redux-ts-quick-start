import { BuildActions } from '../actions';
import * as types from '../constants';

export interface Build {
  text: string;
  completed: boolean;
  id: number;
}

const initialState: Build[] = [];

export interface Builds {
  builds: Build[];
}

export function builds(state: Build[] = initialState, action: BuildActions) {
  switch (action.type) {
    case types.ADD_BUILD:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case types.DELETE_BUILD:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
}
