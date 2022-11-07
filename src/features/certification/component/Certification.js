import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'

import {startExam, Exam} from '../../exam'

function Certification() {
  // Get the active certification set by the user
  const state = useSelector(state => state)
  const activeCert = state.certificate.active;
  const exam = state.exam;
  // Initialize the dispatch method
  const dispatch = useDispatch();
  // Method sets the exam status
  const setExamStatus = (status) => {
    dispatch(startExam({
      action: status,
      total: activeCert.format
    }));
    if (status === true) {
      const elem = document.getElementById('scroll-to');
      elem.scrollIntoView({block: 'end', 'behavior': 'auto'});
    }
  }

  return (
    <div className="certification m-3">
      <Card bg="light" text="dark" className="certification-info col-md-4 col-sm-6 col-xs-12">
        <Card.Header as="h6">{activeCert.title.toUpperCase()}</Card.Header>
        <Card.Body className="text-center">
          <Card.Link href={activeCert.links[0]}>
            <Card.Img style={{width: '100%'}} variant="top" src={"./images/" + activeCert.img} />
          </Card.Link>
          <Button className="mb-1 mb-sm-1" onClick={e => setExamStatus(true)} variant="primary">
            Start
          </Button>{' '}
          <Button className="mb-1 mb-sm-1" onClick={e => setExamStatus(false)} variant="secondary">
            End
          </Button>
        </Card.Body>
      </Card>
      <div className="certification-exam w-100">
        {exam.start === true ?
          <Exam /> : <React.Fragment />
        }
      </div>
      <span id="scroll-to" style={{display: 'none'}}>&nbsp;</span>
    </div>
  );
}

export {Certification};
