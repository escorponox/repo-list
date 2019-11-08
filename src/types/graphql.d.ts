declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const userRepos: DocumentNode;
  const repoDetail: DocumentNode;
  const getUser: DocumentNode;

  export { getUser, userRepos, repoDetail };
}
