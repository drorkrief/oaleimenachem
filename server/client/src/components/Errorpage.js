import React from 'react'
import { useNavigate } from 'react-router-dom'

function Errorpage() {
    const navigate = useNavigate();
  return (<>
    <h2>הדף המבוקש לא נמצא</h2>
    <h3>error 404</h3>
    <button onClick={() => navigate("/")}>חזרה לדף הראשי</button>
  </>
  )
}

export default Errorpage