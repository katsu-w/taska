export const createFilterAction = (filter: string) => {
	return {
		type: 'taskList/Filter',
		payload: { filter },
	};
};
