import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Alert } from 'react-bootstrap'

import {Question} from '../../question';
import {questionsAttempted, setAnswerKey, setResult} from '../../exam';

function Exam() {
  const [userWarning, setUserWarning] = useState(false)
  // Get the active certification selected by the user
  const state = useSelector(state => state)
  // Initialize the dispatch method
  const dispatch = useDispatch();

  const activeCert = state.certificate.active;
  const {exam} = state;

  /**
   * Register the option selected by the user against the question.
   *
   * @param int number
   *   The question number selected by the user.
   *
   * @param string choice 
   *   The option selected by the user.
   */
  const markChoice = (number, choice) => {
    dispatch(setAnswerKey({
      number, choice
    }));
  };

  /**
   * Toggle the questions shown to the user.
   *
   * @param string action
   *   The text of the button which is clciked.
   */
  const toggleQuestions = (action) => {
    if (action === 'next' && exam.answerKey[exam.current] === undefined) {
      setUserWarning(true);
    } else {
      setUserWarning(false);
      dispatch(questionsAttempted({
        action
      }));
    }
  }

  /**
   * Calculate the result.
   *
   * @param array questions 
   *   List of all questions.
   */
  const checkResult = (questions) => {
    let correct = 0, incorrect = 0;
    const {answerKey} = exam;
    dispatch(setResult({incorrect: incorrect, correct: correct}));
    Object.keys(answerKey).forEach((qNum) => {
      if (questions[qNum-1].answer === answerKey[qNum]) {
        correct = correct + 1;
      } else {
        incorrect = incorrect + 1;
      }
    });
    dispatch(setResult({incorrect: incorrect, correct: correct}));
  }

  let questions = []
  if (activeCert.file.trim() !== "") {
    questions = require('../../../data/' + activeCert.file);
  }

  return (
    <div className="mt-5">
      {userWarning ? (
      <Alert variant={'danger'}>
        Please select an option from below to proceed.
      </Alert>) : (<React.Fragment />)
      }
      <Card className="exam">
        <Question 
          markChoice={markChoice}
          question={questions[exam.current - 1]}
          answerKey={exam.answerKey}
        />
        <div className="exam-nav m-2 text-center">
          <Button className="mb-1 mb-sm-1" onClick={e => toggleQuestions('prev')} variant="primary">
            Prev
          </Button>{' '}
          <Button className="mb-1 mb-sm-1" onClick={e => toggleQuestions('next')} variant="primary">
            Next
          </Button>{' '}
          {exam.answered >= exam.total ? 
            <Button className="mb-1 mb-sm-1" onClick={e => checkResult(questions)} variant="secondary">
              Result
            </Button> : <React.Fragment />}
        </div>
      </Card>
    </div>
  );
}

export {Exam};
