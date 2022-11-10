import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux'

function Result() {
  const state = useSelector(state => state)
  const {result} = state.exam;
  if (state.exam.start === true) {
    return (
      <div>
        {result.correct > result.incorrect ? 
          <React.Fragment>
            <h1>
              Correct <Badge bg="success">{result.correct}</Badge>
            </h1>
            <h3>
              Incorrect <Badge bg="danger">{result.incorrect}</Badge> 
            </h3>
          </React.Fragment> 
            : 
          <React.Fragment>
            <h1>
              InCorrect <Badge bg="danger">{result.correct}</Badge>
            </h1>
            <h3>
              Correct <Badge bg="success">{result.incorrect}</Badge> 
            </h3>
          </React.Fragment>
        }
      </div>
    )
  } 
  else {
    return (
      <div className="text-center mt-5">
        <h4>Please start on exam then click on Result to check score.</h4>
      </div>
    );
  }
}

export {Result};
