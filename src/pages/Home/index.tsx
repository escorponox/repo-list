import React from 'react';
import styled from '@emotion/styled';
import { Link, RouteComponentProps } from '@reach/router';

import { MainLayout } from 'Common/layouts/MainLayout';

const HomeLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
`;

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <MainLayout>
      <HomeLink to="/repos">My Repos</HomeLink>
    </MainLayout>
  );
};

export default Home;
