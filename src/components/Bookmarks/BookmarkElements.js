import styled from "styled-components";

export const BookmarkContainer = styled.div`
  padding: 1rem 0;
  position: absolute;
  // right: 0;
  right: -2.5rem;
  z-index: 10;
  width: 40rem;
  background-color: #fff;
  box-shadow: 0 0.8rem 5rem 2rem rgba(var(--color-grey-dark-1), 0.1);

  visibility: hidden;
  opacity: 0;
  transition: all 0.5s 0.2s;

  &:hover,
  .nav__btn--bookmarks:hover + & {
    visibility: visible;
    opacity: 1;
  }
`;

export const BookmarkList = styled.ul`
  list-style: none;
`;
export const BookmarkItem = styled.li`
  .bookmark-link {
    text-decoration: none;
  }
  .preview__link,
  &:link,
  &:visited {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1.5rem 3.25rem;
    transition: all 0.3s;
    border-right: 1px solid #fff;
    text-decoration: none;
    &:hover {
      background-color: var(--color-grey-light-1);
      transform: translateY(-2px);
    }
  }
  .preview__Link--active {
    background-color: var(--color-grey-light-1);
  }
  .preview__fig {
    flex: 0 0 5.8rem;
    border-radius: 50%;
    overflow: hidden;
    height: 5.8rem;
    margin-right: 2rem;
    position: relative;
    backface-visibility: hidden;

    &::before {
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
      opacity: 0.4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s;
    }
  }
  .preview__data {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2rem;
    row-gap: 0.1rem;
    align-items: center;
  }
  .preview__name {
    grid-column: 1/-1;
    font-size: 1.45rem;
    color: var(--color-primary);
    text-transform: uppercase;
    font-weight: 600;

    // This is how text is truncated!
    text-overflow: ellipsis;
    max-width: 25rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .preview__author {
    font-size: 1.15rem;
    color: var(--color-grey-dark-2);
    text-transform: uppercase;
    font-weight: 600;
  }
  .preview__user-generated {
    background-color: darken(var(--color-grey-light-2), 2%);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 10rem;

    margin-left: auto;
    margin-right: 1.75rem;

    svg {
      height: 1.2rem;
      width: 1.2rem;
      fill: var(--color-primary);
    }
  }
`;
export const Message = styled.div``;

export const MessageText = styled.p``;
