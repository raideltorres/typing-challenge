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

    &.result, &.input {
      height: calc(100vh / 6);
    }

    &.input {
      padding-bottom: 2rem;
      flex-direction: column;

      .description {
        margin-bottom: 4rem;
      }
    }

    &.status {
      height: calc(100vh - ((100vh / 6) * 2) - 4rem);

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
      }

      &.status {
        height: calc(100vh - 2rem);
      }
    }
  }
`;
