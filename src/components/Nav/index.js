import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import Bookmarks from "../Bookmarks";
import {
  NavContainer,
  NavList,
  NavItem,
  NavBtn,
  NavBtnSpan,
  IconHolder,
} from "./NavElements";
const Nav = ({ state, dispatch }) => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavBtn onClick={() => dispatch({ type: "TOGGLE_FORM" })}>
            <IconHolder>
              <BiEdit />
            </IconHolder>
            <NavBtnSpan>Add recipe</NavBtnSpan>
          </NavBtn>
        </NavItem>
        <NavItem>
          <NavBtn className="nav__btn--bookmarks">
            <IconHolder>
              <BsBookmark />
            </IconHolder>
            <NavBtnSpan>Bookmarks</NavBtnSpan>
          </NavBtn>
          <Bookmarks state={state} />
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Nav;
