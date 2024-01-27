import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <h1>LOADING....</h1>;
  }
  return (
    <>
      <h1>My Story Page</h1>
      <div className="stories-div">
        {hits &&
          hits.map((curData) => {
            const { title, author, objectID, url, num_comments } = curData;
            return (
              <>
                <div className="card">
                  <h2>{title}</h2>
                  <p>
                    By <span>{author}</span> |{" "}
                    <span>{num_comments} - Comments</span>
                  </p>
                  <div className="card-button">
                    <a href={url} target="_blank">
                      Read More
                    </a>
                    <a href="#" onClick={() => (removePost(objectID))}> 
                    Remove
                    </a>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Stories;
