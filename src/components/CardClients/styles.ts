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

    cursor: pointer;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.95);
    }

    @media (max-width: 1200px) {
      width: 600px;
    }

    @media (max-width: 900px) {
      width: 500px;
    }
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

    transition: background-color 0.3s;

    &:hover {
      background-color: #d48206;
    }
  `}
`;
