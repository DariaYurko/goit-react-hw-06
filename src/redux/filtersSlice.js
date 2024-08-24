import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filterValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

// ---------- Reducer
export const filterReducer = filterSlice.reducer;

// --------------  Action creators
export const { changeFilter } = filterSlice.actions;
// ----------------------------------------------------------------------------------/


// /**
//  *  ------- Reducer
//  *
//  */
// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'filter/setFilterValue': {
//       return {
//         ...state,
//         filterValue: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// /**
//  * -------- Action creators
//  *
//  */
// export const setFilterValue = (filterValue) => {
//    return {
//      type: 'filter/setFilterValue',
//      payload: filterValue,
//    };
// }
