import { RecoilRoot } from 'recoil';
import './App.css';
import Counter from './component/Counter';
import { TodoList } from './component/TodoList';

function App() {
	return (
		<RecoilRoot>
			{/* <Counter /> */}
			<TodoList />
		</RecoilRoot>
	);
}

export default App;
