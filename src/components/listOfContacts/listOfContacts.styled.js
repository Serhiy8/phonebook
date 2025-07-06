import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const ListItem = styled.li`
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 1120px;
    gap: 30px;
    padding-left: 16px;
    padding-right: 16px;
    &:nth-child(odd){
        background-color: #f0f0f0;
    }
`
export const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
    width: 100%;
`