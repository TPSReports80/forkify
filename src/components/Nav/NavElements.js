import styled from "styled-components";

export const NavContainer = styled.nav`
  align-self: stretch;
  margin-right: 2.5rem;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavBtn = styled.button`
  height: 100%;
  font-family: inherit;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 1.5rem;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--color-grey-light-2);
  }
`;

export const NavBtnSpan = styled.span``;
export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 2.4rem;
    width: 2.4rem;
    fill: var(--color-primary);
    margin-right: 0.7rem;
    transform: translateY(-1px);
  }
`;
