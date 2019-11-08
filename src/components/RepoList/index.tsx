import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';

import { RepoListItemFragment } from 'Common/types/graphql-types';
import { useInput } from 'Common/hooks';
import { userRepos } from './operations.graphql';
import { RepoCard } from './SubComponents/RepoCard';

interface ListQueryData {
  userRepos: RepoListItemFragment[];
}

const FilterInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--primary);
  border-radius: 0.25rem;

  :hover {
    border-color: var(--primary-dark);
  }
  :focus {
    outline: none;
    box-shadow: 2px 2px 6px 0px rgba(250, 186, 218, 1);
  }
`;

export const RepoList: React.FC = () => {
  const { loading, error, data } = useQuery<ListQueryData>(userRepos);
  const [filter, changeFilter] = useInput('');

  return (
    <>
      {loading && 'Loading...'}
      {error && 'Ups'}
      {data && (
        <>
          <label htmlFor="filter-input">Filter: </label>
          <FilterInput
            id="filter-input"
            value={filter}
            onChange={changeFilter}
          />
          <ul>
            {data.userRepos
              .filter((r) =>
                r.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((r) => (
                <RepoCard key={r.id} repo={r} />
              ))}
          </ul>
        </>
      )}
    </>
  );
};
