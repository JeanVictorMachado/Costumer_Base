import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    width: 900px;

    padding: 20px 20px 0 20px;

    > div {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 1180px) {
      width: 700px;

      #name {
        width: 320px;
      }

      #lastName {
        width: 320px;
      }

      #email {
        width: 320px;
      }

      #phone {
        width: 320px;
      }

      #cpf {
        width: 320px;
      }

      #date {
        width: 320px;
      }

      #address {
        width: 510px;
      }

      #number {
        width: 130px;
      }

      #district {
        width: 320px;
      }

      #city {
        width: 320px;
      }
    }

    @media (max-width: 900px) {
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        #name {
          width: 100%;
        }

        #lastName {
          width: 100%;
        }

        #email {
          width: 100%;
        }

        #phone {
          width: 100%;
        }

        #cpf {
          width: 100%;
        }

        #date {
          width: 100%;
        }

        #address {
          width: 100%;
        }

        #number {
          width: 100%;
        }

        #district {
          width: 100%;
        }

        #city {
          width: 100%;
        }
      }
    }
  `}
`;
