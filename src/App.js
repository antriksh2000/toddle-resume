import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
// import "bootstrap/dist/js/bootstrap"
import AddData from './components/AddData'
import Navbar from './components/Navbar'
import ViewOfResume from './components/ViewOfResume'

export default function App() {
  return (
    <>
    <Navbar/>
    <ViewOfResume/>
    <AddData/>

    </>
  )
}
