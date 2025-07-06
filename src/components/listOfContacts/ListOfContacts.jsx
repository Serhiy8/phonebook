import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemContainer } from "./listOfContacts.styled";
import { toast } from "react-toastify";
import { getContacts, getFilterValue, getIsLoading } from "../../operations/selectors";
import { deleteContact } from "../../operations/operations";
import { MuiButton } from "../muiElements/button";
import { useState } from "react";

export const ListOfContacts = () => {
    const dataContacts = useSelector(getContacts);
    const filterValue = useSelector(getFilterValue);
    const isLoading = useSelector(getIsLoading);
    const [disabledBtn, setDisabledBtn] = useState(null)
    const normalizeFilterValue = filterValue.toLowerCase().trim();    
    const dispatch = useDispatch()
    const visibleContacts = dataContacts.filter(({name}) => name.toLowerCase().includes(normalizeFilterValue));

    const onDelete = async (id) => {
        setDisabledBtn(id)
        const result = await dispatch(deleteContact(id));
        deleteContact.rejected.match(result) ? toast.error('Contact not deleted!') : toast.success('Contact Deleted!');
    }
    
    return (
        <List>
            {dataContacts.length === 0 && isLoading ? <div>Loading...</div> :
                dataContacts.length === 0 ? <div><p>No contacts in a list!</p></div> : visibleContacts.length > 0 ? visibleContacts.map(({name, number, id}) => <ListItem key={id}>
                <ListItemContainer>
                    <p>{name}</p>
                    <p>{number}</p>
                </ListItemContainer>
                
                <MuiButton textButton={'delete'} typeButton={<DeleteIcon/>} onClick={() => onDelete(id)} disabled={disabledBtn === id}>delete</MuiButton>
                </ListItem>            
            ) : <div>No matches by filter!</div>
            }
        </List>
    )
}