import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {HomeReducer} from './homeReducer';
import {ShareReducer} from './shareReducer';
import {FocusReducer} from './focusReducer';

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

export const reducers = {
  home: HomeReducer,
  share: ShareReducer,
  focus: FocusReducer,
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
