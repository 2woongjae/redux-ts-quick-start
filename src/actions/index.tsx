import * as types from '../constants';

export interface AddBuild {
  type: types.ADD_BUILD;
  text: string;
}

export interface DeleteBuild {
  type: types.DELETE_BUILD;
  id: number;
}

export type BuildActions = AddBuild | DeleteBuild;

export const addBuild = (text: string): AddBuild => ({
  type: types.ADD_BUILD,
  text
});
export const deleteBuild = (id: number): DeleteBuild => ({
  type: types.DELETE_BUILD,
  id
});
