import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Alert } from 'react-bootstrap'

import {Question} from '../../question';
import {questionsAttempted, setAnswerKey} from '../../exam';

function Exam() {
  const [userWarning, setUserWarning] = useState(false)
  // Get the active certification selected by the user
  const state = useSelector(state => state)
  // Initialize the dispatch method
  const dispatch = useDispatch();

  const activeCert = state.certificate.active;
  const examStatus = state.exam;

  const markChoice = (number, choice) => {
    dispatch(setAnswerKey({
      number, choice
    }));
  };

  const toggleQuestions = (action) => {
    if (action === 'next' && examStatus.answerKey[examStatus.current] === undefined) {
      setUserWarning(true);
      return;
    }
    setUserWarning(false);
    dispatch(questionsAttempted({
      action
    }));
  }

  let questions = []
  if (activeCert.file.trim() !== "") {
    questions = require('../../../data/' + activeCert.file);
  }

  return (
    <div className="mt-5">
      {userWarning ? (
      <Alert variant={'danger'}>
        Please Select an option from below to proceed.
      </Alert>) : (<React.Fragment />)
      }
      <Card className="exam">
        <Question 
          markChoice={markChoice}
          question={questions[examStatus.current - 1]}
          answerKey={examStatus.answerKey}
        />
        <div className="exam-nav m-2 text-center">
          <Button className="mb-1 mb-sm-1" onClick={e => toggleQuestions('prev')} variant="primary">
            Prev
          </Button>{' '}
          <Button className="mb-1 mb-sm-1" onClick={e => console.log(1)} variant="info">
            Result
          </Button>{' '}
          <Button className="mb-1 mb-sm-1" onClick={e => toggleQuestions('next')} variant="primary">
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
}

export {Exam};
