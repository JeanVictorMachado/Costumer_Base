import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 100vh;

    padding-top: 70px;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    /* position: fixed; */

    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};

    border-right: 5px solid ${theme.colors.info};

    > div {
      height: 50px;

      border-bottom: 2px solid ${theme.colors.tertiary};

      font-size: 20px;
      font-weight: 600;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.3s;

      &:hover {
        background-color: ${theme.colors.tertiary};
      }
    }
  `}
`;
