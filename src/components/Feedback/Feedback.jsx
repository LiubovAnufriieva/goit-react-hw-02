import css from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    return (
        <div className={css.container}>
        <p className={css.feedRow}>Good: {feedback.good}</p>
        <p className={css.feedRow}>Neutral: {feedback.neutral}</p>
        <p className={css.feedRow}>Bad: {feedback.bad}</p>
        <p className={css.feedRow}>Total: {totalFeedback}</p>
        <p className={css.feedRow}>Positive feedback: {positiveFeedback}%</p>
      </div>
    )
}

export default Feedback;