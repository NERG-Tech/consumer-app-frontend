import {TAction} from '../types/action';

type TShareReducer = {
  loading: boolean;
  error: string;
};

const initState: TShareReducer = {
  loading: false,
  error: '',
};

export function ShareReducer(state: TShareReducer = initState, action: TAction) {
  const {type, payload} = action;

  switch (type) {
    default:
      return state;
  }
}
