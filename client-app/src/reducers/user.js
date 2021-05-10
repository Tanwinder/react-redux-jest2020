export default (state={isUser: null}, action) => {
    switch(action.type) {
        case "AUTH":
            return {
                isUser: !!state.isUser ? null : "test"
            };
        default:
            return state;
    }
}