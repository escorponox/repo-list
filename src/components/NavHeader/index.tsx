import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import { useAppContext } from 'AppContext';

export interface BreadCrumbs {
  to: string;
  title: string;
}

export interface HeaderProps {
  breadcrumbs: BreadCrumbs[];
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  &:not(:first-of-type) {
    margin-left: 1rem;
    &:before {
      content: '>';
      margin-right: 1rem;
    }
  }
`;

export const NavHeader: React.FC<HeaderProps> = ({ breadcrumbs }) => {
  const {
    state: { user }
  } = useAppContext();

  return (
    <NavContainer>
      <nav>
        {breadcrumbs.map((bc) => (
          <NavLink key={bc.to} to={bc.to}>
            {bc.title}
          </NavLink>
        ))}
      </nav>
      {user && <span>{user.login}</span>}
    </NavContainer>
  );
};
