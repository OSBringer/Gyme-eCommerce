import React from 'react'
import { Route,Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div>
        404 Page not found
        <a>
        <Link to="/">Return home</Link>
        </a>
    </div>
    
  )
}

export default NotFound