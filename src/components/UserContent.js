import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const UserContent = () => {
  const user = useSelector((state) => state.user.data);
  return (
    <div className={`content`}>
      <div className="profile">
        <div className="profile_frame">
          <img
            id="avatar"
            src={user.avatar_url || `./assets/profilePlaceholder.png`}
            alt=""
          />
        </div>
      </div>

      <div className="user">
        <div className="user_info">
          <div className="name">
            <h3 id="name">{user.name}</h3>

            <div className="username">
              <p id="login">@{user.login}</p>
            </div>
          </div>

          <div className="date">
            <p id="date">
              Joined {moment(user.created_at).format("DD MMM YYYY")}
            </p>
          </div>
        </div>

        <div className="bio">
          <p id="bio">{user.bio || "This profile has no bio"}</p>
        </div>

        <div className="stats_container" id="statistics">
          <div className="stats">
            <p>Repos</p>
            <p id="repo">{user.public_repos}</p>
          </div>

          <div className="stats">
            <p>Followers</p>
            <p id="followers">{user.followers}</p>
          </div>

          <div className="stats">
            <p>Following</p>
            <p id="following">{user.following}</p>
          </div>
        </div>

        <div className="links_container">
          <div className="left">
            <div className="info">
              <img src="./assets/icon-location.svg" alt="" />
              <p id="location">{user.location || "Not Available"}</p>
            </div>
            <div className="info">
              <img src="./assets/icon-website.svg" alt="" />
              <a href={user.blog || "link"} id="blog">
                https://github.blog
              </a>
            </div>
          </div>

          <div className="right">
            <div className="info">
              <img src="./assets/icon-twitter.svg" alt="" />
              <p id="twitter">{user.twitter_username || "Not Available"}</p>
            </div>
            <div className="info">
              <img src="./assets/icon-company.svg" alt="" />
              <p id="company">{user.company || "Not Available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
