import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getUserListSelector } from '../selector/user';

export default function UserList() {
	const [users, setUsers] = useRecoilState(getUserListSelector);

	return (
		<>
			<div>user list..</div>
			{users &&
				users.map((user) => (
					<User
						key={user.id}
						id={user.id}
						name={user.name}
						username={user.username}
						email={user.email}
					/>
				))}
		</>
	);
}

function User({ id, name, username, email }) {
	return (
		<div
			style={{ padding: '5px 10px', backgroundColor: 'pink', margin: '10px' }}
		>
			<div> id : {id}</div>
			<div> name : {name}</div>
			<div> username : {username}</div>
			<div>email : {email}</div>
		</div>
	);
}
