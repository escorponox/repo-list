import React from 'react';
import styled from '@emotion/styled';
import { Link, RouteComponentProps } from '@reach/router';

const Container = styled.div`
  background-color: var(--white);
  color: var(--primary);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border-radius: 0.5rem;
  & > div {
    margin-bottom: 1rem;
  }
`;

export const ErrorPage: React.FC = ({ children }) => (
  <Container>
    <div>{children}</div>
    <Link to="/">Back to Home</Link>
  </Container>
);

export const NotAllowedPage: React.FC<RouteComponentProps> = () => (
  <ErrorPage>Not Allowed</ErrorPage>
);
export const ServerErrorPage: React.FC<RouteComponentProps> = () => (
  <ErrorPage>Server Error</ErrorPage>
);
export const NotFoundPage: React.FC<RouteComponentProps> = () => (
  <ErrorPage>Not Found</ErrorPage>
);
