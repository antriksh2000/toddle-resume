import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand text-primary font-weight-bold " href="#">Resume Builder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav mr-auto"></div>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-dark my-3 mx-4 my-sm-0 " type="submit">Import </button>
      <button class="btn btn-danger my-2 my-sm-0" type="submit">Export</button>
    </form>
  </div>
</nav>
    </div>
  )
}
