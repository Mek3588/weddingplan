import React from 'react'

function Pays({firstName,lastName,email,amount,tx_ref,public_key}) {

  return (
    <div>
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={public_key} />
    <input type="hidden" name="tx_ref" value={tx_ref}/>
    <input type="hidden" name="amount" value={amount} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={email} />
    <input type="hidden" name="first_name" value={firstName} />
    <input type="hidden" name="last_name" value={lastName} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="http://localhost:3000/" />
    <input type="hidden" name="meta[title]" value="test" />
    <button
        type="submit"
        className="w-full bg-indigo-600 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105"
        >Pay now
    </button>

    </form>
    </div>
  )
}

export default Pays