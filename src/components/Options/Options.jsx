import styles from './Options.module.css'

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.container}>
      
      <button type='button' className={styles.optionBtn} onClick={() => onFeedback('good')}>Good</button>
      <button type='button' className={styles.optionBtn} onClick={() => onFeedback('neutral')}>Neutral</button>
      <button type='button' className={styles.optionBtn} onClick={() => onFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button type='button' className={styles.optionBtn} onClick={onReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;