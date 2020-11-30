import { getRepos, getUserData } from "../../github-api";
import { useState, useEffect } from "react";
import Repos from "../Repos/Repos";

const Content = (props) => {
  let [userRepo, setUserRepo] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const onChangeHandler = (e) => {
    setCurrentUser(e.target.value);
  };

  const onSubmitHandler = () => {
    getRepos(currentUser).then((result) => {
      setUserRepo(result);
    });
  };

  return (
    <div className="Content">
      <input
        type="text"
        placeholder="Enter Github Username"
        onChange={onChangeHandler}
      />
      <button onClick={onSubmitHandler}>Submit</button>
      <Repos userRepos={userRepo} />
    </div>
  );
};

export default Content;
