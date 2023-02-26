import {TAction} from '../types/action';

type TFocusReducer = {
  loading: boolean;
  error: string;
};

const initState: TFocusReducer = {
  loading: false,
  error: '',
};

export function FocusReducer(state: TFocusReducer = initState, action: TAction) {
  const {type, payload} = action;

  switch (type) {
    default:
      return state;
  }
}
