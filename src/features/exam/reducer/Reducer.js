import { createSlice } from '@reduxjs/toolkit'

export const exam = createSlice({
  name: 'exam',
  initialState: {
    current: 1,
    start: false,
    total: 0,
    answerKey: {},
    result: {
      correct: 0,
      incorrect: 0,
    }
  },
  reducers: {
    questionsAttempted: (state, action) => {
      const move = action.payload.action
      if (state.current < (state.total) && move === 'next') {
        state.current +=  1
      }
      if (state.current > 1 && move === 'prev') {
        state.current -=  1
      }
    },
    startExam: (state, action) => {
      state.start = action.payload.action
      if (state.start === false) {
        state.current = 1;
      }
      state.total = action.payload.total
    },
    setAnswerKey: (state, action) => {
      state.answerKey[action.payload.number] = action.payload.choice
    },
    setResult: (state, action) => {
      state.result.correct = action.payload.correct;
      state.result.incorrect = action.payload.incorrect;
    }
  }
});

/** Action creators are generated for each case reducer function  */
export const { 
  questionsAttempted,
  startExam,
  setAnswerKey,
  setResult
} = exam.actions

export default exam.reducer
