/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: repoDetail
// ====================================================

export interface repoDetail_repo {
  __typename: 'Repo';
  id: string;
  name: string;
  full_name: string;
  description: string | null;
  private: boolean;
  html_url: string;
  fork: boolean;
}

export interface repoDetail_repoPulls {
  __typename: 'PullRequest';
  id: string;
  title: string;
  number: number;
  html_url: string;
  state: PRState;
}

export interface repoDetail {
  repo: repoDetail_repo | null;
  repoPulls: (repoDetail_repoPulls | null)[] | null;
}

export interface repoDetailVariables {
  repoInput: RepoInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userRepos
// ====================================================

export interface userRepos_userRepos {
  __typename: 'Repo';
  id: string;
  name: string;
  full_name: string;
}

export interface userRepos {
  userRepos: (userRepos_userRepos | null)[] | null;
}

export interface userReposVariables {
  userReposInput?: UserReposInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user {
  __typename: 'User';
  id: string;
  login: string;
  email: string;
  avatar_url: string | null;
  html_url: string;
}

export interface getUser {
  user: getUser_user | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepoDetailFragment
// ====================================================

export interface RepoDetailFragment {
  __typename: 'Repo';
  id: string;
  name: string;
  full_name: string;
  description: string | null;
  private: boolean;
  html_url: string;
  fork: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepoPullFragment
// ====================================================

export interface RepoPullFragment {
  __typename: 'PullRequest';
  id: string;
  title: string;
  number: number;
  html_url: string;
  state: PRState;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepoListItemFragment
// ====================================================

export interface RepoListItemFragment {
  __typename: 'Repo';
  id: string;
  name: string;
  full_name: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment {
  __typename: 'User';
  id: string;
  login: string;
  email: string;
  avatar_url: string | null;
  html_url: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Direction {
  asc = 'asc',
  desc = 'desc'
}

export enum PRState {
  closed = 'closed',
  open = 'open'
}

export enum RepoType {
  all = 'all',
  member = 'member',
  owner = 'owner',
  private = 'private',
  public = 'public'
}

export enum Sort {
  created = 'created',
  full_name = 'full_name',
  pushed = 'pushed',
  updated = 'updated'
}

export interface RepoInput {
  owner: string;
  repo: string;
}

export interface UserReposInput {
  type?: RepoType | null;
  sort?: Sort | null;
  direction?: Direction | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
