import styled from "styled-components";

export const AddRecipeModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100rem;
  background-color: white;
  border-radius: 9px;

  padding: 5rem 6rem;
  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);
  z-index: 1000;
  transition: all 0.5s;
`;

export const CloseModalBtn = styled.button`
  font-family: inherit;
  color: inherit;
  position: absolute;
  top: 0.5rem;
  right: 1.6rem;
  font-size: 3.5rem;
  cursor: pointer;
  border: none;
  background: none;
`;

export const AddRecipeForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem 6rem;

  .upload__column {
    display: grid;
    grid-template-columns: 1fr 2.8fr;
    align-items: center;
    gap: 1.5rem;

    & label {
      font-size: 1.5rem;
      font-weight: 600;
      color: inherit;
    }

    & input {
      font-size: 1.5rem;
      padding: 0.8rem 1rem;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      transition: all 0.2s;

      &::placeholder {
        color: $color-grey-light-3;
      }

      &:focus {
        outline: none;
        border: 1px solid $color-primary;
        background-color: $color-grey-light-1;
      }
    }

    & button {
      grid-column: 1 / span 2;
      justify-self: center;
      margin-top: 1rem;
    }
  }
  .upload__heading {
    font-size: 2.25rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    grid-column: 1/-1;
  }
  .upload__btn {
    grid-column: 1 / -1;
    justify-self: center;
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;