import React from 'react';

import { RepoPullFragment } from 'Common/types/graphql-types';

export const PullCard: React.FC<{ pulls: RepoPullFragment[] }> = ({
  pulls
}) => {
  return (
    <>
      <h2>Pull Requests</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>State</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          {pulls.map((pr) => (
            <tr key={pr.id}>
              <td>{pr.number}</td>
              <td>{pr.title}</td>
              <td>{pr.state.toUpperCase()}</td>
              <td>
                <a href={pr.html_url}>See on GitHub</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
