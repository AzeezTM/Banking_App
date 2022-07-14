import React from "react";
import { useSelector } from "react-redux";


function AccountType() {

    const isSavingAccount = useSelector(({banking}) => banking.isSavingAccount)
    
    return (
        
        <div className="accountc">
            <br />
            <br />
            <hr />
          <h1 className={`is-size-3 ${isSavingAccount ? "has-text-danger" : "has-text-link"}`}>
            {isSavingAccount ? "Saving Account" : "Checking Account"}</h1>
        </div>

    )
} 
export default AccountType;