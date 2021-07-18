import React, { useState } from 'react';

const App = () => {
    const [inputput, setinputput] = useState("")
    const [tex, setoutput] = useState("")
    const [ramount, setoutput1] = useState("")

    const change = (e) => {
        setinputput(e.target.value)
    }

    const calTax = (amount) => {

        let enter = amount;
        let tax = 0;
        if (amount <= 400000)
            return 0;

        amount = amount - 150000;

        if (amount <= 150000) {
            tax = tax + amount / 40;
            amount = 0;
        }
        else {
            tax = tax + 25 * 150;
            amount = amount - 150000;
        }
        
        if (amount <= 500000) {
            tax = tax + amount / 10;
            amount = 0;
        }
        else {
            tax = tax + 50000;
            amount = amount - 500000;
        }
       
        if (amount <= 9200000) {
            tax = tax + amount / 4;
            amount = 0;
        }
        else {
            tax = tax + 9200000 / 4;
            amount = amount - 9200000;
        }
        tax = tax + (3 * amount) / 10;
        //return tax;
        setoutput(tax)
        setoutput1(enter - tax)
        

    }

    const gross = (gross_income) => {
        if(gross_income < 400000) {
        return gross_income;
    }
        let net_income = Math.min(gross_income, 150000);
        if(gross_income > 150000) {
        let slab_gross = Math.min((gross_income - 150000), 150000);
      let slab_net   = slab_gross * 100 / 97.5;
      net_income += slab_net;
    }
    if(gross_income > 300000) {
        let slab_gross = Math.min((gross_income - 300000), 500000);
      let slab_net   = slab_gross * 100 / 90;
      net_income += slab_net;
    }
    if(gross_income > 800000) {
        let slab_gross = Math.min((gross_income - 800000), 200000);
      let slab_net   = slab_gross * 100 / 75;
      net_income += slab_net;
    }
    if(gross_income > 1000000) {
        let slab_gross = gross_income - 1000000;
      let slab_net   = slab_gross * 100 / 70;
      net_income += slab_net;
    }
    //return net_income;
    setoutput1(net_income);
    }

    return (
        <>
            <div className= "main">
                <h1> Calculate Your Tax </h1>
                <input onChange={change} type="text" placeholder=" Enter Your Gross Income / Net Income  "
                />
                <button onClick={() => calTax(inputput)}> Calculate Tax  </button> <br />
              <button onClick={() => gross(inputput)}> Calculate Gross Income   </button>

                <div>
                    <h4> Your Tax = {tex} </h4>
                    <h4> Your Net Income / Gross Income  = {ramount}</h4>
                </div>

            </div>
        </>
    )
}

export default App;