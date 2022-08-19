import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Pagination = ({ className, page, results, dispatch }) => {
  const curPage = page;
  const numPages = Math.ceil(results.length / 10);
  const handlePagination = (e) => {
    if (
      e.target.closest("button").classList.contains("pagination__btn--prev")
    ) {
      dispatch({ type: "PREV_PAGE" });
    } else if (
      e.target.closest("button").classList.contains("pagination__btn--next")
    ) {
      dispatch({ type: "NEXT_PAGE" });
    } else console.log("cmon not hitting");
  };
  if (curPage === 1 && numPages > 1) {
    return (
      <div className={className}>
        <button
          onClick={(e) => handlePagination(e)}
          className="btn--inline pagination__btn--next"
        >
          <span>Page {curPage + 1}</span>
          <AiOutlineArrowRight className="search__icon" />
        </button>
      </div>
    );
  } else if (curPage === numPages && numPages > 1) {
    return (
      <div className={className}>
        <button
          onClick={(e) => handlePagination(e)}
          className="btn--inline pagination__btn--prev"
        >
          <AiOutlineArrowLeft className="search__icon" />

          <span>Page {curPage - 1}</span>
        </button>
      </div>
    );
  } else if (curPage < numPages) {
    return (
      <div className={className}>
        <button
          onClick={(e) => handlePagination(e)}
          className="btn--inline pagination__btn--prev"
        >
          <AiOutlineArrowLeft className="search__icon" />

          <span>Page {curPage - 1}</span>
        </button>
        <button
          onClick={(e) => handlePagination(e)}
          className="btn--inline pagination__btn--next"
        >
          <span>Page {curPage + 1}</span>
          <AiOutlineArrowRight className="search__icon" />
        </button>
      </div>
    );
  } else return "";
};

export default Pagination;
