import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit,
     withDraw, 
     loan,
     collectInterest, 
    //  deleteAccount, 
      toggleAccount 
    } from "../actions";


function Banking() {

    const [amount, setAmount] = useState(0)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleDeposit = () => {
        dispatch(deposit(+amount))
    }

    const handleWithdraw = () => {
        dispatch(withDraw(+amount))
    }

    const handleLoan = () => {
        dispatch(loan(+amount))
        handleDeposit()
    }

    const handleCollectInterest = () => {
        dispatch(collectInterest())
    }

    // const handleDeleteAccount = () => {
    //     dispatch(deleteAccount())
    // }

    const handleToggleAccount = () => {
        dispatch(toggleAccount())
    }


    return (
        <div className="containerd">
            <div>
            <br />
            <div className="field">
                <h1 className="ATM">ATM</h1>
                
                <input
                    type="number"
                    className="inputme form-control"
                    value={amount}
                    placeholder="amount"
                    onChange={handleChange} />
            </div>
            <br />
            
            <button className="btn btn-success mr-2 " onClick={handleDeposit}>
                Deposit</button>
            <button className="btn btn-light mr-2" onClick={handleWithdraw}>
                Withdraw</button>
            <button className="btn btn-warning mr-2" onClick={handleCollectInterest}>Get interest</button>
            {/* <button className="btn btn-danger mr-2" onClick={handleDeleteAccount}>
                Delete Account</button> */} <br />
            <button className="btn btn-info mr-2" onClick={handleToggleAccount}>Change Account type</button>
          <button className="btn btn-primary mr-2" onClick={handleLoan}>
                Get Loan</button>
            <br /><br />
        </div>
        </div>
    )
}
export default Banking;