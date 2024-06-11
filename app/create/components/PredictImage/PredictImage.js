import styles from "./PredictImage.module.scss";

export const PredictImage = (props) => {
  const { source, altText, downloadData } = props;

  const Image = <img className={styles.image} src={source} alt={altText} />;

  const Actions = (
    <div className={styles.actions}>
      <a href={source} download={downloadData}>
        <button>Download ↓</button>
      </a>
    </div>
  );

  if (source) {
    return (
      <div className={styles.module}>
        {Image}
        {Actions}
      </div>
    );
  }
  return null;
};
