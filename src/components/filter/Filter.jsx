import { useDispatch } from "react-redux";
import InputWithIcon from "../muiElements/inputEl";
import SearchIcon from '@mui/icons-material/Search';
import { changeValue } from "../../slice/filterSlice";
import { FilterContainer } from "./filter.styled";

export const Filter = () => {
    const dispatch = useDispatch()
    const onInputChange = e =>{
        dispatch(changeValue(e.target.value))
    }
    
    return <FilterContainer><InputWithIcon name={'filter'} label={'Filter'} type={'text'} onChange={onInputChange}>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            </InputWithIcon>
            </FilterContainer>
            
}