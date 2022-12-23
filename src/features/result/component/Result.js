import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux'

function Result() {
  const state = useSelector(state => state)
  const {result} = state.exam;
  const correct = result.correct > result.incorrect ? true : false;
  if (state.exam.start === true) {
    return (
      <div className="">
        <p className={ correct ? "h1" : "h3" }>
          Correct <Badge bg="success">{result.correct}</Badge>
        </p>
        <p className={ !correct ? "h1" : "h3"}>
          Incorrect <Badge bg="danger">{result.incorrect}</Badge> 
        </p>
        <p className="h3">
          Attempted <Badge bg="primary">{Object.keys(state.exam.answerKey).length}</Badge> 
        </p>
        <p className="h3">
          Total <Badge bg="primary">{state.exam.total}</Badge>
        </p>
      </div>
    )
  } 
  else {
    return (
      <div className="text-center mt-5">
        <h4>Please start the exam then click on Result to check your score.</h4>
      </div>
    );
  }
}

export {Result};
