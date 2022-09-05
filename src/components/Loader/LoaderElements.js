import styled from "styled-components";

export const LoaderContainer = styled.div`
  margin: 5rem auto;
  text-align: center;
  .loader-svg {
    height: 6rem;
    width: 6rem;
    fill: $color-primary;
    animation: rotate 2s infinite linear;
  }
`;
