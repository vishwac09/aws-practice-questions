import { createSlice } from '@reduxjs/toolkit'

export const exam = createSlice({
  name: 'exam',
  initialState: {
    current: 1,
    start: false,
    total: 0,
    answerKey: {}
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
        state.current = 0;
      }
      state.total = action.payload.total
    },
    setAnswerKey: (state, action) => {
      state.answerKey[action.payload.number] = action.payload.choice
    }
  }
});

/** Action creators are generated for each case reducer function  */
export const { 
  questionsAttempted,
  startExam,
  setAnswerKey
} = exam.actions

export default exam.reducer
