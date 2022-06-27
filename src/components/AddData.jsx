import React from 'react'

export default function AddData() {
  return (
    <div>
        <button id="add-data" type="button" className="btn btn-outline-dark font-weight-bold   w-50 " data-toggle="modal" data-target="#exampleModal">
  Add New 
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title font-weight-bold" id="exampleModalLabel">Add new education</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
    <div className="form-group">
    <label for="exampleInputEmail1" className='font-weight-bold'>Institute</label>
    <input type="email" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1" className='font-weight-bold'>Degree</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>
<div className='d-inline-flex  '>
    <div className="form-group">
    <label for="exampleInputEmail1" className='font-weight-bold'>Start Date</label>
    <input type="email" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>

  </div>
    <div className="form-group">
    <label for="exampleInputEmail1" className='font-weight-bold'>End Date</label>
    <input type="email" className="form-control  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>

</div>
      <div className="form-group">
    <label for="exampleInputEmail1" className='font-weight-bold'>  Description</label>
    <textarea  type="email" rows="8" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>
      </div>
      <div className="">
        <button type="button" className="btn btn-info my-4 mx-3">Save </button>

        <button type="button" className="btn btn-white " >Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
