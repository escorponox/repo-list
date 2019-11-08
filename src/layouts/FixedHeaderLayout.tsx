import React from 'react';
import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  flex-shrink: 0;
  padding: 1rem;
  background-color: var(--primary);
`;

const ContentContainer = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
`;

export const FixedHeaderLayout: React.FC<{
  headerContent: React.ReactElement;
}> = ({ headerContent, children }) => {
  return (
    <Container>
      <HeaderContainer>{headerContent}</HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};
