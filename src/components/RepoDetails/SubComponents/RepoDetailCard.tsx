import React from 'react';
import styled from '@emotion/styled';

import {
  RepoDetailFragment,
  RepoPullFragment
} from 'Common/types/graphql-types';

import { PullCard } from './PullCard';

interface DetailsProps {
  repo: RepoDetailFragment;
  pulls: RepoPullFragment[];
}
const Card = styled.div`
  padding: 1rem;
  background-color: var(--primary-lighter);
  border-radius: 0.25rem;
  border: 1px solid var(--primary);
`;

export const RepoDetailCard: React.FC<DetailsProps> = ({ repo, pulls }) => {
  return (
    <Card>
      <h1>
        {repo.name}
        {repo.private && ' (private)'}
      </h1>
      <p>{repo.description}</p>
      {repo.fork && <p>This repo is a fork</p>}
      <a href={repo.html_url}>Go to GitHub</a>

      {pulls && pulls.length === 0 ? (
        <p>This repo has no pull requests</p>
      ) : (
        <PullCard pulls={pulls} />
      )}
    </Card>
  );
};
