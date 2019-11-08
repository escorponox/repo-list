import React from 'react';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';

import { RepoListItemFragment } from 'Common/types/graphql-types';

const Card = styled.li`
  padding: 1rem;
  background-color: var(--primary-lighter);
  border-radius: 0.25rem;
  box-shadow: 2px 2px 6px 0px rgba(250, 186, 218, 1);
  cursor: pointer;

  &:hover {
    background-color: var(--primary-light);
  }
  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

export const RepoCard: React.FC<{ repo: RepoListItemFragment }> = ({
  repo
}) => {
  return (
    <Card onClick={() => navigate(`/repos/${repo.full_name}`)}>
      {repo.name}
    </Card>
  );
};
