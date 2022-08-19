import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: head;
  background-color: var(--color-grey-light-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  margin-left: 4rem;
  height: 4.6rem;
  display: block;
`;

export const SearchForm = styled.form`
  background-color: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all 0.3s;

  &:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(var(--color-grey-dark-1), 0.08);
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.7rem;
  width: 30rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey-light-3);
  }

  @media only screen and (max-width: var(--bp-medium)) {
    width: auto;

    &::placeholder {
      color: white;
    }
  }
`;

export const SearchBtn = styled.button``;

export const SearchSpan = styled.span`
  font-weight: 400;
`;

export const IconHolder = styled.div``;
