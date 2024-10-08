import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "../blog/imports";
import "./blog.css";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="Library">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,</h1>
        <h1 className="gradient__text">We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            imageUrl={blog01}
            date="Sep 26, 2021"
            title="Lexi AI and Open  AI is the future. Let us exlore how it is?"
            size="25px"
            height="30px"
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article
            imageUrl={blog02}
            date="Sep 26, 2021"
            title="Lexi AI and Open  AI is the future. Let us exlore how it is?"
            size="19px"
            height="20px"
          />
          <Article
            imageUrl={blog03}
            date="Sep 26, 2021"
            title="Lexi AI and Open  AI is the future. Let us exlore how it is?"
            size="19px"
            height="20px"
          />
          <Article
            imageUrl={blog04}
            date="Sep 26, 2021"
            title="Lexi AI and Open  AI is the future. Let us exlore how it is?"
            size="19px"
            height="20px"
          />
          <Article
            imageUrl={blog05}
            date="Sep 26, 2021"
            title="Lexi AI and Open  AI is the future. Let us exlore how it is?"
            size="19px"
            height="20px"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
