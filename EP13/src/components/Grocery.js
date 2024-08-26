import React from 'react'

function Grocery() {
  return (
    <>
      <div style={{paddingTop:"110px", maxWidth:"1300px", margin:"0px auto"}}>
        <h1>Grocery</h1>
        <form style={{paddingTop:"50px"}}>
          <input type='text' placeholder='Enter a first name'/><br />
          <input type='text' placeholder='Enter a last name'/><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Grocery;