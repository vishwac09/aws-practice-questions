import React from 'react';
import Form from 'react-bootstrap/Form';

function Question(props) {
  const question = props.question;
  const choices = question.choices;

  const markChoice = (number, choice) => {
    console.log('QN', number);
    console.log('QNC', choice);
  }

  if (question) {
    return (
      <div className="question w-100 p-4">
        <div className="question-text">
          <strong>
            {question.number}.  {question.q}
          </strong>
        </div>
        {
          Object.keys(choices).map(option => {
            return (
              <Form.Check 
                key={Math.random()}
                className="question-option my-2"
                type="radio"
                name="question"
              >
                <Form.Check.Input 
                  type="radio"
                  name="question"
                  onChange={(e) => markChoice(question.number, option)}
                  checked={option === 'a' ? 1 : 0}
                />
                <Form.Check.Label>{choices[option]}</Form.Check.Label>
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
