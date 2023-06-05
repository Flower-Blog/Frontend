import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Success = (props: any) => {
  return (
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
  );
};
export default Success;
