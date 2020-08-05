import React from "react";

function Project(props) {
  const DEFAULT_DESCRIPTION =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae voluptatum quas a, numquam mollitia eum velit aliquid perferendis quasi, aut impedit laborum saepe provident hic possimus ratione earum nihil?";
  return (
    <div className="project">
      <h1 className="project__heading">
        <a
          className="project__link"
          href={props.project.url}
          title={props.project.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.project.name}
        </a>
      </h1>
      <div className="project__description">
        {props.project.description
          ? props.project.description
          : DEFAULT_DESCRIPTION}
      </div>
      <div className="project__button">
        <a
          className="btn btn--primary"
          href={props.project.url}
          title={props.project.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        {props.project.homepage && (
          <a
            className="btn btn--primary project__btn"
            href={props.project.homepage}
            title={props.project.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
