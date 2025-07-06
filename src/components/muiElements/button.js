import Button from '@mui/material/Button';

export const MuiButton = ({onClick, typeButton, textButton, type, disabled}) => {
  return  <Button variant="outlined" startIcon={typeButton} onClick={onClick} type={type} disabled={disabled}>
        {textButton}
      </Button>
}