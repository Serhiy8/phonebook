import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../operations/operations";
import { nanoid } from "nanoid";
import InputWithIcon from "../muiElements/inputEl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import { MuiButton } from "../muiElements/button";
import SaveIcon from '@mui/icons-material/Save';
import { toast } from "react-toastify";
import { Form } from "./formAddContact.styled";
import { getContacts } from "../../operations/selectors";


export const FormAddContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmitForm = async (e) => {
      e.preventDefault();
      
    const { name, number } = e.target.elements;
    const normalize = name.value.toLowerCase().trim();
    const isOnList = contacts.some(
      (contact) => contact.name.toLowerCase() === normalize
    );

    if (isOnList) {
      toast.error("Contact is already in a list!");
      return;
    }

    if (name.value.trim() === '' || number.value.trim() === '') {
      toast.error("Fields can't be empty!");
      return;
    }

    const result = await dispatch(
      addContact({ id: nanoid(), name: name.value, number: number.value })
      );

      const addSuccessuful =()=>{
        toast.success("Contact added successfully!");
        e.target.reset();
      }

      addContact.rejected.match(result) ? toast.error("Failed to add contact. Try again.") : addSuccessuful()

  };

  return (
    <Form onSubmit={onSubmitForm}>
          <InputWithIcon name={'name'} label={'Contact name'} type={'text'}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          </InputWithIcon>
          <InputWithIcon name={'number'} label={'Phone number'} type={'number'}>
            <PhoneAndroid sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          </InputWithIcon>
          <MuiButton type={"submit"} typeButton={<SaveIcon/>} textButton={'Add contact'}/>
    </Form>
  );
};