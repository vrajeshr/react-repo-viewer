const Repos = (props) => {
  return props.userRepos.map((repo) => {
    return <div>{repo.name}</div>;
  });
};

export default Repos;
