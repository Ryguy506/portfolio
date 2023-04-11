import React, { useState , useEffect } from 'react';


const styles= {
 textarea: {
    resize: 'none'
 }
 
}






export default function Contact() {
 

const [errorMsg, setError] = useState()




function inputCheck(e) {
   
  const { name, value } = e.target
   
  if  (name === 'Name' || name === 'Email' || name === 'Message'  ) {

    if (value === '') {
      setError(`Please enter a ${name}`)

    }
    else if(value !== '' && name === 'Email' && !validateEmail(value)) {
      setError('Please enter a valid email')
    }


  }



}

function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) 
  {
    return true
  }
  return false
}

useEffect(() => {

 const interval = setTimeout(() => {
      setError()
    }, 3000)
  
  return () => clearTimeout(interval)
})



  return (

    <div id='contact' className='rounded shadow-lg'>
      
      <h1 style={{color: '#05d1fc' }}>Contact me</h1>
      <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="Name" onBlur={inputCheck}/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="Email" onBlur={inputCheck}/>
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea className="form-control" id="message" name="Message" rows="5"  style={styles.textarea} onBlur={inputCheck}></textarea>
  </div>
  <button type="submit" className="btn btn-primary text-center">Submit</button>
 <br/>
 <div className='text-center'>
 {errorMsg && <p className='text-danger'>{errorMsg}</p>}
 </div>
   
    </div>
  );
}
