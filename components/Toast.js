const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`alert alert-dismissible fade show mt-2 ${bgColor}`}
      style={{ fontSize: '1.2rem' }}
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="btn-close shadow-none px-3"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleShow}
      ></button>
    </div>
  )
}

export default Toast
