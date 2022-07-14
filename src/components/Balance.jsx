import React from "react";
import { useSelector } from "react-redux";

function Balance(){
    const state = useSelector(({auth, banking}) => {
        return{
           balance : banking.balance,
           interest : banking.interest,
           loan : banking.loan,

        }
    })


    return (
       <div className="bb d-flex justify-content-center">
        <div>
        <h1 className=" is-size-2">Balance : <strong className="text">#{state.balance}</strong></h1>
        <h2 className="is-size-3">Loan :<strong className="text">#{state.loan}</strong></h2>
        <h2 className="is-size-3">Interest :<strong className="text">#{state.interest}</strong></h2>
        </div>
       </div>
    )
}
export default Balance;