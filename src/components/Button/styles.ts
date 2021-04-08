import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 35px;

    font-size: 16px;

    border-radius: 3px;
    box-shadow: 0 0 5px ${theme.colors.tertiary};

    background-color: #f6c208;
    color: ${theme.colors.text};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
