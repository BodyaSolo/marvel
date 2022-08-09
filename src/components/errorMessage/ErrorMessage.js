import img from './error.gif'
const ErrorMessage = () => {
  return (
    <div>
    <img style={{
      display: 'block',
      width: '100px',
      height: '100px',
      objectFit: 'contain',
      margin: '0 auto'
      }} src={img} alt="Error" />
      <h4 style={{
        color: 'red',
        textAlign: 'center',
        fontSize: '35px'
      }}>Error</h4>
    </div>
  )
}

export default ErrorMessage;