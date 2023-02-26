import {TAction} from '../types/action';

type THomeReducer = {
  loading: boolean;
  error: string;
};

const initState: THomeReducer = {
  loading: false,
  error: '',
};

export function HomeReducer(state: THomeReducer = initState, action: TAction) {
  const {type, payload} = action;

  switch (type) {
    default:
      return state;
  }
}
