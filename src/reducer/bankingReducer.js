import { type } from "@testing-library/user-event/dist/type"

const initialState = {
    balance: 0,
    interest: 0,
    loan: 0,
    isSavingAccount: false,
}

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSIT" :
            return{...state, balance: state.balance + action.payload}
            case "LOAN" :
            return{...state, loan: state.loan + action.payload}
            case "WITHDRAW":
            return { ...state, balance: state.balance - action.payload }
            case "COLLECT_INTEREST":
            return {...state, interest: (state.loan *  0.1).toFixed(2)}
            case "DELETE_ACCOUNT":
            return {...state, balance : 0, loan : 0, interest: 0}
            case "TOGGLE": 
            return {...state, isSavingAccount: !state.isSavingAccount}
       default:
        return state
    }
}