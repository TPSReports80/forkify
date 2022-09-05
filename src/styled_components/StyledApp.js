import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 120rem;
  min-height: 117rem;
  margin: 4vw auto;
  background-color: #fff;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0 2rem 6rem 0.5rem rgba(var(--color-grey-dark-1), 0.2);

  display: grid;
  grid-template-rows: 10rem minmax(100rem, auto);
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "head head"
    "list recipe";

  @media screen and (max-width: 1250px) {
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;
