import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-color: black;
    display: flex;
    flex-direction: column;;
    /* justify-content: center; */
    align-items: center;
`

export const Title = styled.div`
    font-size: 100px;
    font-weight: bold;
    color: white;
`

export const SearchBarWrapper = styled.div`
    background-color: #303135;
    width: 70%;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

export const SearchImg = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 5px;
`

export const SearchBar = styled.input`
    width: 80%;
    background-color: #303135;
    border: none;
    line-height: 12px;
    font-size: 10px;
    padding-left: 5px;
    color: white;
`

export const SearchCancleImg = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 5px;
`

export const SearchWidth = styled.div`

`

export const SearchKeyboard = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 5px;
`

export const SearchMike = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 5px;
`

export const AutoSearchMainWrapper = styled.div`
    z-index: 3;
    width: 70%;
    background-color: #303135;
    position: absolute;
    border: 2px solid;
    border-radius: 8px;
    padding: 5px 10px;
    position: relative;
    bottom: 0px;
`;

export const AutoSearchWrap = styled.div`
`;

export const AutoSearchData = styled.div`
    padding: 10px 8px;
    width: 80%;
    color: white;
    font-size: 10px;
    font-weight: bold;
    z-index: 4;
    &:hover {
        background-color: #303135;
        cursor: pointer;
    }
    position: relative;
`;