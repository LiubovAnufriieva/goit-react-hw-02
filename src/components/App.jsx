import './App.css';
import { useEffect, useState } from 'react';
import Options from './Options/Options';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options
          onFeedback={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
        />
      </div>
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
