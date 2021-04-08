import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 900px;
    height: 500px;

    padding: 20px;

    border-radius: 3px;

    color: ${theme.colors.text};

    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h2 {
      margin-bottom: 20px;
    }

    span {
      margin-bottom: 20px;
    }
  `}
`;
