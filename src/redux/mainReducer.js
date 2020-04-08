import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth27066Reducer from '../features/EmailAuth27066/redux/reducers';
import CalendarView27064Reducer from '../features/CalendarView27064/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth27066: EmailAuth27066Reducer,
CalendarView27064: CalendarView27064Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});