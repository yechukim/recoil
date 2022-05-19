import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListFilterState, todoListState } from '../atom/todo';
import { filteredTodoListState, todoListStatsState } from '../selector/todo';

export function TodoList() {
	const todoList = useRecoilValue(filteredTodoListState);
	return (
		<>
			<TodoListStats />
			<TodoListFilters />
			<TodoItemCreator />
			{todoList.map((todo) => (
				<TodoItem key={todo.id} item={todo} />
			))}
		</>
	);
}

function TodoItemCreator() {
	const [input, setInput] = useState('');
	const setTodoList = useSetRecoilState(todoListState);

	const addItem = () => {
		setTodoList((oldTodo) => [
			...oldTodo,
			{
				id: getId(),
				text: input,
				isComplete: false,
			},
		]);
		setInput('');
	};

	const onChange = ({ target: { value } }) => {
		setInput(value);
	};

	return (
		<div>
			<input type="text" value={input} onChange={onChange} />
			<button onClick={addItem}>추가</button>
		</div>
	);
}

let id = 0;
function getId() {
	return id++;
}

function TodoItem({ item }) {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({ target: { value } }) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<div>
			<input type="text" value={item.text} onChange={editItemText} />
			<input
				type="checkbox"
				checked={item.isComplete}
				onChange={toggleItemCompletion}
			/>
			<button onClick={deleteItem}>X</button>
		</div>
	);
}

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoListFilters() {
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	const updateFilter = ({ target: { value } }) => {
		setFilter(value);
	};

	return (
		<>
			Filter:
			<select value={filter} onChange={updateFilter}>
				<option value="Show All">All</option>
				<option value="Show Completed">Completed</option>
				<option value="Show Uncompleted">Uncompleted</option>
			</select>
		</>
	);
}

function TodoListStats() {
	const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
		useRecoilValue(todoListStatsState);

	const formattedPercentCompleted = Math.round(percentCompleted);

	return (
		<ul>
			<li>Total items: {totalNum}</li>
			<li>Items completed: {totalCompletedNum}</li>
			<li>Items not completed: {totalUncompletedNum}</li>
			<li>Percent completed: {formattedPercentCompleted}</li>
		</ul>
	);
}
