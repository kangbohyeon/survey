import { atom } from 'recoil';

const answersState = atom<string[]>({
  key: 'answersState',
  default: [],
});

export default answersState;
