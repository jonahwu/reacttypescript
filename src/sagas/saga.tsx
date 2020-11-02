import { delay } from 'redux-saga/effects'
import { takeEvery, put } from 'redux-saga/effects'


function* countUpAsync(){
	yield delay(4000); 
	yield put({type: 'INCREMENT_ASYNC'});

}

// here we just monitor original INCREMENT that now become INCREMENT_ASYNC

export function* watchCountUp(){
	yield takeEvery('INCREMENT', countUpAsync);
}
