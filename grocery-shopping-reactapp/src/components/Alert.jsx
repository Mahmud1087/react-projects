import React, { useEffect } from 'react'

const Alert = ({ alertMessage, setAlertMessage }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertMessage({ ...alertMessage, show: false })
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alertMessage.msg])

  return (
    <div className={`alert alert-${alertMessage.cls}`}>{alertMessage.msg}</div>
  )
}

export default Alert
