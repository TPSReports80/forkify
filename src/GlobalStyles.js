import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
:root {
  box-sizing: border-box;
    --color-primary: #f38e82;
    --color-grad-1: #fbdb89;
    --color-grad-2: #f48982;

    --color-grey-light-1: #f9f5f3; // Light background
    --color-grey-light-2: #f2efee; // Light lines
    --color-grey-light-3: #d3c7c3; // Light text (placeholder)
    --color-grey-dark-1: #615551; // Normal text
    --color-grey-dark-2: #918581; // Lighter text

    --gradient: linear-gradient(to right bottom, var(--color-grad-1), var(--color-grad-2));

    --bp-large: 78.15em; // 1250px
    --bp-medium: 61.25em; // 980px
    --bp-small: 37.5em; // 600px
    --bp-smallest: 31.25em; // 500px
}


body {
  font-size: 1rem;
  font-family: nunito-sans, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-grey-dark-1);
  background-image: var(--gradient);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 2 * 4vw);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}
.btn, .btn--small {
  background-image: var(--gradient);
  border-radius: 10rem;
  border: none;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  & > *:first-child {
    margin-right: 1rem;
  }
}

.btn {


  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 600;

  .icon-holder {
    svg {
      height: 2rem;
    width: 2rem;
    fill: currentColor;
    }
  }
}

.btn--small {
  &,
  &:link,
  &:visited {


    font-size: 1.4rem;
    font-weight: 600;
    padding: 1.25rem 2.25rem;
    text-decoration: none;

    .icon-holder {
      height: 1.75rem;
      width: 1.75rem;
      fill: currentColor;
    }
  }
}

.btn--inline {
  color: var(--color-primary);
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  background-color: var(--color-grey-light-1);
  padding: 0.8rem 1.2rem;
  border-radius: 10rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  transition: all 0.2s;

  .icon-holder {
    height: 1.6rem;
    width: 1.6rem;
    fill: currentColor;
    margin: 0 0.2rem;
  }

  span {
    margin: 0 0.4rem;
  }

  &:hover {
    color: var(--color-grad-2);
    background-color: var(--color-grey-light-2);
  }

  &:focus {
    outline: none;
  }
}

.btn--round {
  background-image: var(--gradient);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 4.5rem;
  width: 4.5rem;
  // margin-left: auto;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.07);
  }

  &:focus {
    outline: none;
  }

  .icon-holder {
    height: 2.5rem;
    width: 2.5rem;
    fill: #fff;
  }
}

.btn--tiny {
  height: 2rem;
  width: 2rem;
  border: none;
  background: none;
  cursor: pointer;

  .icon-holder {
    height: 100%;
    width: 100%;
    fill: var(--color-primary);
    transition: all 0.3s;
  }

  &:focus {
    outline: none;
  }

  &:hover .icon-holder {
    fill: var(--color-grad-2);
    transform: translateY(-1px);
  }

  &:active .icon-holder {
    fill: var(--color-grad-2);
    transform: translateY(0);
  }

  &:not(:last-child) {
    margin-right: 0.3rem;
  }
}

.heading--2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  text-align: center;
  // transform: skewY(-3deg);
}

.link:link,
.link:visited {
  color: var(--color-grey-dark-2);
}

.spinner {
  margin: 5rem auto;
  text-align: center;

  .icon-holder {
    height: 6rem;
    width: 6rem;
    fill: var(--color-primary);
    animation: rotate 2s infinite linear;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.message,
.error {
  max-width: 40rem;
  margin: 0 auto;
  padding: 5rem 4rem;

  display: flex;

  .icon-holder svg {
    height: 3rem;
    width: 3rem;
    fill: var(--color-primary);
    transform: translateY(-0.3rem);
  }

  p {
    margin-left: 1.5rem;
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 600;
  }
}
`;
