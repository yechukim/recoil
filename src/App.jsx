import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Counter from './component/Counter';
import { TodoList } from './component/TodoList';
import ErrorBoundary from './component/ErrorBoundary';
import UserList from './component/UserList';

function App() {
	return (
		<RecoilRoot>
			<ErrorBoundary>
				<React.Suspense
					fallback={
						<div style={{ fontSize: '2em', margin: '30px auto' }}>
							로딩중...
						</div>
					}
				>
					<UserList />
					{/* <Counter /> */}
					{/* <TodoList /> */}
				</React.Suspense>
			</ErrorBoundary>
		</RecoilRoot>
	);
}

export default App;
