import React from 'react';
import Form from 'react-bootstrap/Form';

function Question(props) {
  const question = props.question;
  const answerKey = props.answerKey;
  const choices = question.choices;
  const userSelectedChoice = answerKey[question.number] !== undefined 
    ? answerKey[question.number] : -1;

  if (question) {
    return (
      <div className="question w-100 p-4">
        <div className="question-text">
          <strong>
            {question.number}.  {question.q}
          </strong>
        </div>
        {
          Object.keys(choices).map(choice => {
            return (
              <Form.Check 
                key={Math.random()}
                className="question-option my-3"
                type="radio"
                name="question"
              >
                <Form.Check.Input 
                  type="radio"
                  name="question"
                  onChange={(e) => props.markChoice(question.number, choice)}
                  checked={choice === userSelectedChoice ? 1 : 0}
                  isValid={choice === userSelectedChoice && choice === question.answer ? 1 : 0}
                />
                <Form.Check.Label>{choices[choice]}</Form.Check.Label>
              </Form.Check>
            );
          })
        }
      </div>
    );
  }
  else {
    return (<React.Fragment />)
  }
}

export {Question};
