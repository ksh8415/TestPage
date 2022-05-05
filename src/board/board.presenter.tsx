import {Wrapper, Title, SearchBarWrapper, SearchImg, SearchBar, SearchCancleImg, SearchWidth, SearchKeyboard, SearchMike} from './board.style'

export default function BoardUI(){
    return(
        <Wrapper>
            <Title>GOOGLE</Title>
            <SearchBarWrapper>
                <SearchImg src="Magnifier.png"></SearchImg>
                <SearchBar></SearchBar>
                <SearchCancleImg src="X.png"></SearchCancleImg>
                <SearchWidth>|</SearchWidth>
                <SearchKeyboard src='Keyboard.png'></SearchKeyboard>
                <SearchMike src='Mike.png'></SearchMike>
            </SearchBarWrapper>
        </Wrapper>
    )
}