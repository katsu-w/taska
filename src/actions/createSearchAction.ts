export const createSearchAction = (query: string) => {
	return {
		type: 'taskList/Search',
		payload: { query },
	};
};
