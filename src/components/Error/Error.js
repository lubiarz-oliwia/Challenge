import Toast from 'react-bootstrap/Toast';

export const Error = () => {

  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>HTTP connection error...</Toast.Body>
    </Toast>
  )
};

