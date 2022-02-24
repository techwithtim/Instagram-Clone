import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function AlertDismissible({ message, variant, deleteAlert }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => {
          deleteAlert();
          setShow(false);
        }}
        dismissible
      >
        {message}
      </Alert>
    );
  } else {
    return null;
  }
}
