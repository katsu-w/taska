export const createChangeStatusAction = (id: string) => {
	return {
		type: 'taskList/ChangeStatus',
		payload: { id }
	}
}
