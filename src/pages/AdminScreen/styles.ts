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

    padding-top: 90px;

    display: flex;
    justify-content: center;

    background-color: ${theme.colors.secondary};
  `}
`;

export const Form = styled.div`
  ${() => css`
    width: 900px;

    padding: 20px 20px 0 20px;

    > div {
      display: flex;
      justify-content: space-between;
    }
  `}
`;
