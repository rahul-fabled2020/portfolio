import React from 'react';

function Project(props) {
  const DEFAULT_DESCRIPTION = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae voluptatum quas a, numquam mollitia eum velit aliquid perferendis quasi, aut impedit laborum saepe provident hic possimus ratione earum nihil?";
  return (
    <div className="project">
      <h1 className="project__heading"><a className="project__link" href={props.project.url} title={props.project.name} target="_blank" rel="noopener noreferrer">{props.project.name}</a></h1>
      <div className="description">
        {props.project.description? props.project.description: DEFAULT_DESCRIPTION}
      </div>
    </div>
  )
}

export default Project;