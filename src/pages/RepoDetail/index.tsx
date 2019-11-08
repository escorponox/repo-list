import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { FixedHeaderLayout } from 'Common/layouts/FixedHeaderLayout';
import { NavHeader } from 'Common/components/NavHeader';
import { RepoDetails } from 'Common/components/RepoDetails';

interface RepoRouteProps extends RouteComponentProps {
  owner: string;
  repo: string;
}

const breadcrumbs = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/repos',
    title: 'Repos'
  }
];

const RepoDetail: React.FC<RepoRouteProps> = ({ owner, repo }) => {
  return (
    <FixedHeaderLayout headerContent={<NavHeader breadcrumbs={breadcrumbs} />}>
      <RepoDetails owner={owner} repo={repo} />
    </FixedHeaderLayout>
  );
};

export default RepoDetail;
