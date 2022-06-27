import React, { useState,useEffect } from 'react'
import './ViewOfResume.css'
export default function ViewOfResume() {
  const [formData, setFormData] = useState({
    name:"",
    emailid:"",
    shortbio:"",
    StartDate:"",
    StartEnd:"",
    Description:"",
  })
  const {name,Degree,StartDate,EndDate,Description}=formData

  
  
const handleSubmit = (e) => {   
console.log({ formData })
  }

const handleChange=(e)=>{
let value=e.target.value
console.log(value)
}

return (
<div>
    <form onSubmit={handleSubmit}>
    <img  id="avatarimg" src="https://lh3.googleusercontent.com/a-/AOh14Gjyi7xpSvwEeiPVYb3ZDFCbquXZmLUhh18JIvXJcg=s288-p-rw-no"  alt="..." class="rounded-circle py-5" width="150px"/>
    <div className='d-inline-flex flex-column justify-content-between my-5  '>
    <div id="name" className="form-group w-100   ">
    <label for="exampleInputEmail1" className='font-weight-bold' name="name" value={name} onChange={handleChange}>Name</label>
    <input type="text" className="form-control w-25" id="exampleInputname1" aria-describedby="nameHelp" placeholder=""/>
  </div> 
  
  <div id="email" className="form-group w-25 ">
    <label for="exampleInputEmail1"  className='font-weight-bold' onChange={handleChange} name="email">Email-ID</label>
    <input type="Email"  className="form-control"  aria-describedby="emailHelp" placeholder=""/>
    </div>
  <div id="textarea" className="form-group w-25 d-lg-inline-flex ">
    <label for="exampleInputEmail1" className='font-weight-bold ' name="shortbio" onChange={handleChange}>Short-Bio</label>
    <textarea type="Email" rows="7" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
    </div>

         <div className="my-3 ">
        <button id="btn" type="button" className="btn btn-info">Save </button>
      </div>
{/* Education */}





 </div>

    </form>




    </div>
  )
}
