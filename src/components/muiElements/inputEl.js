import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputWithIcon = ({children, name, type, label, onChange}) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        {children}
        <TextField
          label={label}
          name={name}
          type={type}
          variant="standard"
          onChange={onChange}
        />
      </Box>
    </>
  );
}

export default InputWithIcon;