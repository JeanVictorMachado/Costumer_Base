import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 850px;
    height: 50px;

    margin-bottom: 20px;

    position: relative;

    border: 1px solid ${theme.colors.tertiary};
    border-radius: 3px;

    display: flex;

    background-color: ${theme.colors.primary};
  `}
`;

export const Informations = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      height: 100%;
      width: 50px;

      position: absolute;

      font-size: 18px;

      border-radius: 3px 0 0 3px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${theme.colors.tertiary};
    }

    > span {
      width: 50%;
      font-size: 18px;

      padding-left: 70px;
    }
  `}
`;

export const ClearButton = styled.button`
  ${({ theme }) => css`
    height: 100%;
    width: 50px;

    position: absolute;
    right: 0;

    font-size: 18px;

    border-radius: 0 3px 3px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.tertiary};
  `}
`;
