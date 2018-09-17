import styled from 'styled-components';

// Creating the grid styles mobile first
export const Typing = styled.div`
  .section {
    margin: 1rem 1rem 0 1rem;
    text-align: 'center';

    &.result, &.input, &.status {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    &.result {
      height: calc(100vh / 5);

      h1 {
        font-size: 1.5rem;
        margin-right: 1rem;
      }
    }

    &.input {
      height: calc(100vh / 3);
      flex-direction: column;

      .description {
        margin-bottom: 1rem;
      }
    }

    &.status {
      height: calc(100vh - ((100vh / 5) + (100vh / 3)) - 4rem);

      .status-inner {
        display: flex;
        width: 20rem;
        height: 4rem;
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 960px) {
    .section {
      margin: 1rem;

      &.result, &.input {
        height: calc(100vh / 2 - 2rem);

        h1 {
          font-size: 2.8125rem;
        }
      }

      &.status {
        height: calc(100vh - 2rem);
      }

      &.input {
        .description {
          margin-bottom: 4rem;
        }
      }
    }
  }
`;
