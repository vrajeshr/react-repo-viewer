import Repo from "../Repo/Repo";

const Repos = (props) => {
  return props.userRepos.map((repo) => {
    return <Repo repo={repo} />;
  });
};

export default Repos;
