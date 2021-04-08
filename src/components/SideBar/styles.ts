import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 100vh;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    /* position: fixed; */

    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};

    border-right: 5px solid ${theme.colors.info};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
