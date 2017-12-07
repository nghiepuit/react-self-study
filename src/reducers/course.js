const initialState = {
    error: '',
    loading: false,
    page: 0,
    limit: 0,
    total: 0,
    courses: []
}

export const paginate = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
