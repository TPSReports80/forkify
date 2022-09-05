import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  SearchForm,
  SearchInput,
  SearchBtn,
  SearchSpan,
  IconHolder,
} from "./HeaderElements";
import Nav from "../Nav";
const Header = ({ dispatch, state }) => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_QUERY", payload: { query } });
    setQuery("");
  };
  return (
    <HeaderContainer>
      <HeaderLogo
        onClick={() => {
          navigate("/");
          dispatch({ type: "CLEAR_STATE" });
        }}
        src="/images/logo.png"
      />
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <SearchInput
          placeholder="Search over 1,000,000 recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchBtn className="btn">
          <IconHolder className="icon-holder">
            <BsSearch />
          </IconHolder>
          <SearchSpan>Search</SearchSpan>
        </SearchBtn>
      </SearchForm>
      <Nav state={state} dispatch={dispatch} />
    </HeaderContainer>
  );
};

export default Header;
