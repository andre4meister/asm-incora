/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import DashboardService, { FetchRoomsProps, FetchRoomsType } from 'services/DashboardService';
import { addNotification } from 'store/alert';
import { setRooms } from 'store/booking';

function* workerGetRooms({ payload }: PayloadAction<FetchRoomsProps>) {
  try {
    const response: AxiosResponse<AxiosResponse<FetchRoomsType>> = yield call(
      DashboardService.fetchRooms,
      {
        officeId: payload.officeId,
        soonestBookingsDays: payload.soonestBookingsDays,
      },
    );

    const { rooms } = response.data.data;
    yield put(setRooms(rooms));
  } catch (err) {
    const result = (err as Error).message;
    yield put(addNotification({ message: result, type: 'error' }));
  }
}

function* watchDashboardSaga() {
  yield takeEvery('dashboard/getRooms', workerGetRooms);
}

export default watchDashboardSaga;
