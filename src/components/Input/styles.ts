import styled, { css } from 'styled-components';

import { Field } from 'formik';

type WrapperProps = {
  width: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ width, theme }) => css`
    width: ${width};

    margin-bottom: 20px;
    border-radius: 3px;
    border: 1px solid ${theme.colors.tertiary};

    display: flex;
    justify-content: space-between;
  `}
`;

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 35px;

    padding: 10px;

    border-radius: 3px 0 0 3px;

    background-color: ${theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 35px;

    font-size: 16px;
    /* padding-left: 10px; */
    border-radius: 0 3px 3px 0;

    background-color: ${theme.colors.primary};
    /*
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text}; */
  `}
`;
