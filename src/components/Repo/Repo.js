import styles from "./styles.module.css";

const Repo = (props) => {
  return (
    <div className={styles.Repo}>
      <div className={styles.avatar}>
        <img src={props.repo.owner.avatar_url} width={75} />
      </div>
      <div className={styles.descriptions}>
        <a href={props.repo.html_url}>{props.repo.name}</a>
        <p>{props.repo.description}</p>
      </div>
    </div>
  );
};

export default Repo;
