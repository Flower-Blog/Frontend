import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";

const Success = (props: any) => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {showError && (
        <Stack
          sx={{
            width: "auto",
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 9999,
          }}
          spacing={2}
        >
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong> {props.message} </strong>
          </Alert>
        </Stack>
      )}
      ;
    </>
  );
};
export default Success;
