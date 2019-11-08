import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
  RepoDetailFragment,
  RepoPullFragment
} from 'Common/types/graphql-types';
import { repoDetail } from './operations.graphql';
import { RepoDetailCard } from './SubComponents/RepoDetailCard';

interface DetailsProps {
  owner: string;
  repo: string;
}

interface DetailQueryData {
  repo: RepoDetailFragment;
  repoPulls: RepoPullFragment[];
}

interface DetailQueryVars {
  repoInput: DetailsProps;
}

export const RepoDetails: React.FC<DetailsProps> = ({ owner, repo }) => {
  const { loading, error, data } = useQuery<DetailQueryData, DetailQueryVars>(
    repoDetail,
    {
      variables: {
        repoInput: {
          owner,
          repo
        }
      }
    }
  );

  return (
    <>
      {loading && 'Loading...'}
      {error && 'Ups'}
      {data && <RepoDetailCard repo={data.repo} pulls={data.repoPulls} />}
    </>
  );
};
