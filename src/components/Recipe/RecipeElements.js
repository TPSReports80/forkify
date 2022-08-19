import styled from "styled-components";
import RecipeView from "./RecipeView";
export const RecipeContainer = styled.div`
  background-color: var(--color-grey-light-1);
`;

export const Message = styled.div``;

export const MessageText = styled.p``;

export const IconHolder = styled.div``;

export const RecipeViewStyled = styled(RecipeView)`
  svg {
  }
  .recipe__fig {
    height: 32rem;
    position: relative;
    // transform: scale(1.04) translateY(-1px);
    transform-origin: top;

    &:before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        to right bottom,
        var(--color-grad-1),
        var(--color-grad-2)
      );
      opacity: 0.6;
    }
    .recipe__img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
    }
    .recipe__title {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 20%) skewY(-6deg);
      color: #fff;
      font-weight: 700;
      font-size: 3.25rem;
      text-transform: uppercase;
      width: 50%;
      line-height: 1.95;
      text-align: center;

      span {
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        padding: 1.3rem 2rem;
        background-image: linear-gradient(
          to right bottom,
          var(--color-grad-1),
          var(--color-grad-2)
        );
      }

      @media screen and (max-width: var(--bp-medium)) {
        width: 70%;
      }
    }
  }
  .recipe__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7.5rem 8rem 3.5rem 8rem;
  }
  .recipe__info {
    font-size: 1.65rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 4.5rem;
    }
  }
  .recipe__info-icon {
    height: 2.35rem;
    width: 2.35rem;
    fill: var(--color-primary);
    margin-right: 1.15rem;
  }
  .recipe__info-data {
    margin-right: 0.5rem;
    font-weight: 700;
  }
  .recipe__info-buttons {
    display: flex;
    margin-left: 1.6rem;
    gap: 0.5rem;
    transform: translateY(-1px);
  }
  .recipe__user-generated {
    background-color: darken(var(--color-grey-light-2), 2%);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 10rem;

    margin-left: auto;
    margin-right: 1.75rem;

    svg {
      height: 2.25rem;
      width: 2.25rem;
      fill: var(--color-primary);
    }
  }
  .bookmark-icon {
    margin: 0;
    fill: #fff;
  }
  .recipe__ingredients {
    padding: 5rem 8rem;
    font-size: 1.6rem;
    line-height: 1.4;
    background-color: var(--color-grey-light-2);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .recipe__ingredient-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 3rem;
    list-style: none;
  }
  .recipe__ingredient {
    display: flex;
  }
  .recipe__icon {
    height: 2rem;
    width: 2rem;
    fill: var(--color-primary);
    margin-right: 1.1rem;
    flex: 0 0 auto;
    margin-top: 0.1rem;
  }
  .recipe__quantity {
    margin-right: 0.5rem;
    flex: 0 0 auto;
  }
  .recipe__directions {
    padding: 5rem 10rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .recipe__directions-text {
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 3.5rem;
    color: var(--color-grey-dark-2);
  }
  .recipe__publisher {
    font-weight: 700;
  }
`;