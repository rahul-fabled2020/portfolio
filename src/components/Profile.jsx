import React from "react";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__image-wrapper">
        <img src={props.user.avatar_url} alt="" className="profile__image" />
      </div>
      <div className="profile__user">
        <h1 className="profile__name">{props.user.name}</h1>
        <div className="profile__user-name">{props.user.login}</div>
      </div>
      <p className="profile__bio">{props.user.bio}</p>
      <div className="profile__info">
        <span className="profile__follow-text">
          <i className="fas fa-users"></i> {props.user.followers} Followers
        </span>
        <span className="profile__follow-text">
          {props.user.following} Following
        </span>

        <div className="profile__location">
          <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
          {props.user.location}
        </div>
        {props.user.twitter_username && (
          <div className="profile__twitter">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${props.user.twitter_username}`}
              className="profile__link"
            >
              <i className="fab fa-twitter"></i>&nbsp;
              {props.user.twitter_username}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
