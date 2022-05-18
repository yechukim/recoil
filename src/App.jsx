import { RecoilRoot } from 'recoil';
import './App.css';
import Counter from './component/Counter';

function App() {
	return (
		<RecoilRoot>
			<Counter />
		</RecoilRoot>
	);
}

export default App;
