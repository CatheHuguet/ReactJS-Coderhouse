import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    const spinnerStyle = { position: "fixed", top: "50%", left: "50%" }

  return (
    <> 
        <Spinner style={spinnerStyle} animation="border" role="status"/> 
    </>
  )
}

export default Loader