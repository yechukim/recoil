import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../atom';
import { charCountState } from '../selector';

export default function Counter() {
	return (
		<div style={{ border: '3px solid green', width: '300px' }}>
			<TextInput />
			<CharacterCount />
		</div>
	);
}

function TextInput() {
	const [text, setText] = useRecoilState(textState);
	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<input type="text" value={text} onChange={onChange} />
			<br />
			결과:{text}
		</div>
	);
}

function CharacterCount() {
	const count = useRecoilValue(charCountState);
	return <>글자 수 :{count}</>;
}
