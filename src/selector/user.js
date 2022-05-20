import { selector } from 'recoil';
import { userList } from '../atom/user';

export const getUserListSelector = selector({
	key: 'UserListQuery',
	get: async ({ get }) => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			).then((res) => res.json());
			return response;
		} catch (error) {
			throw error;
		}
	},
	set: ({ set }, newValue) => {
		set([...userList, ...newValue]);
	}, //setter 가 있으니까 해당 셀렉터쓸떄는 useRecoilValue로 못불러 오는듯?
});
