import styles from "./page.module.css";

const Spinner = () => {
  return (
    <>
      <div className={styles.spinner_bg}>
        <div className={styles.spinner} />
      </div>
    </>
  );
};

export default Spinner;
