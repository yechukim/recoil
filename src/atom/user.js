import { atom } from 'recoil';

export const userList = atom({
	key: 'userListAtom',
	default: [],
});
