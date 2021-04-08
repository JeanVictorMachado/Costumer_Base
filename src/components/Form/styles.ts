import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    width: 900px;

    padding: 20px 20px 0 20px;

    > div {
      display: flex;
      justify-content: space-between;
    }
  `}
`;
