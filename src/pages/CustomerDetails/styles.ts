import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
  `}
`;

export const MainContent = styled.div`
  ${() => css`
    width: 100%;
    height: 100vh;

    display: flex;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding-top: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${theme.colors.secondary};
  `}
`;
