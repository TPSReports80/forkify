import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
import useLocalStorage from "../../utils/useLocalStorage";
import {
  BookmarkContainer,
  BookmarkList,
  Message,
  MessageText,
  BookmarkItem,
} from "./BookmarkElements";
import { Link } from "react-router-dom";

const Bookmarks = ({ state }) => {
  if (state.bookmarks.length > 0) {
    return (
      <BookmarkContainer className="bookmark-container">
        <BookmarkList>
          {state.bookmarks.map((item) => {
            return (
              <BookmarkItem key={item.id}>
                <Link className="bookmark-link" to={`/recipe/${item.id}`}>
                  <div className="preview__link">
                    <figure className="preview__fig">
                      <img src={item.image_url} alt={item.title} />
                    </figure>
                    <div className="preview__data">
                      <h4 className="preview__name">{item.title}</h4>
                      <p className="preview__author">{item.publisher}</p>
                    </div>
                  </div>
                </Link>
              </BookmarkItem>
            );
          })}
        </BookmarkList>
      </BookmarkContainer>
    );
  } else {
    return (
      <BookmarkContainer className="bookmark-container">
        <Message className="message">
          <div className="icon-holder">
            <BsExclamationTriangle />
          </div>
          <MessageText>
            No bookmarks yet. Find a nice recipe and bookmark it.
          </MessageText>
        </Message>
      </BookmarkContainer>
    );
  }
};

export default Bookmarks;
