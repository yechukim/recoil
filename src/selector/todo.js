import { atom, selector } from 'recoil';
import { todoListFilterState, todoListState } from '../atom/todo';

export const filteredTodoListState = selector({
	key: 'FilteredTodoList',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case 'Show Completed':
				return list.filter((item) => item.isComplete);
			case 'Show Uncompleted':
				return list.filter((item) => !item.isComplete);
			default:
				return list;
		}
	},
});

export const todoListStatsState = selector({
	key: 'TodoListStats',
	get: ({ get }) => {
		const todoList = get(todoListState);
		const totalNum = todoList.length;
		const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
		const totalUncompletedNum = todoList.filter(
			(item) => !item.isComplete
		).length;
		const percentCompleted =
			totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

		return {
			totalNum,
			totalCompletedNum,
			totalUncompletedNum,
			percentCompleted,
		};
	},
});
