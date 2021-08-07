import { useContext } from 'react'
import { DataContext } from '../Store/GlobalState'
import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
  const [state, dispatch] = useContext(DataContext)
  const { notify } = state

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={notify.error}
          handleShow={() => {
            dispatch({ type: 'NOTIFY', payload: {} })
          }}
          bgColor="alert-danger"
        />
      )}
      {notify.success && (
        <Toast
          msg={notify.success}
          handleShow={() => {
            dispatch({ type: 'NOTIFY', payload: {} })
          }}
          bgColor="alert-success"
        />
      )}
    </>
  )
}

export default Notify
