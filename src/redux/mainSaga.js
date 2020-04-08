import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth27066Saga from '../features/EmailAuth27066/redux/sagas';
import CalendarView27064Saga from '../features/CalendarView27064/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth27066Saga,
CalendarView27064Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}