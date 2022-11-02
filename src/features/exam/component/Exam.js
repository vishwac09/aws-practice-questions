import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'

import {Question} from '../../question';

function Exam() {
  // Get the active certification selected by the user
  const state = useSelector(state => state)
  const activeCert = state.certificate.active;
  const examStatus = state.exam;

  let questions = []
  if (activeCert.file.trim() !== "") {
    questions = require('../../../data/' + activeCert.file);
  }

  return (
    <Card className="exam mt-5">
      <Question question={questions[examStatus.current]} />
    </Card>
  );
}

export {Exam};
