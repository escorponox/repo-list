import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { FixedHeaderLayout } from 'Common/layouts/FixedHeaderLayout';
import { NavHeader } from 'Common/components/NavHeader';
import { RepoList } from 'Common/components/RepoList';

const breadcrumbs = [
  {
    to: '/',
    title: 'Home'
  }
];

const Repos: React.FC<RouteComponentProps> = () => {
  return (
    <FixedHeaderLayout headerContent={<NavHeader breadcrumbs={breadcrumbs} />}>
      <RepoList />
    </FixedHeaderLayout>
  );
};

export default Repos;
