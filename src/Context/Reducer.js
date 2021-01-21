export default (state, action) => {
    
    switch(action.type) {
        case "DELETE-TRANSACTION":
            return{
                ...state,
                transaction: state.transaction.filter(val => val.id !== action.id)
            }

        case "ADD-TRANSACTION":
            return{
                ...state,
                transaction: [action.payload, ...state.transaction]
            }

        default:
            return state;
    }
} 
