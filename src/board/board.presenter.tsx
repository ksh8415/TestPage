import {Wrapper, Title, SearchBarWrapper, SearchImg, SearchBar, SearchCancleImg, SearchWidth, SearchKeyboard, SearchMike, AutoSearchContainer, AutoSearchWrap, AutoSearchData} from './board.style'

export default function BoardUI({search, keyItems, setSearch, handleInput}){
    return(
        <Wrapper>
            <Title>GOOGLE</Title>
            <SearchBarWrapper>
                <SearchImg src="Magnifier.png"></SearchImg>
                <SearchBar value={search} onChange={handleInput}></SearchBar>
                <SearchCancleImg src="X.png"></SearchCancleImg>
                <SearchWidth>|</SearchWidth>
                <SearchKeyboard src='Keyboard.png'></SearchKeyboard>
                <SearchMike src='Mike.png'></SearchMike>
            </SearchBarWrapper>
            {keyItems.length > 0 && search && (
                <AutoSearchContainer>
                <AutoSearchWrap >
                {keyItems.map((search, idx) => (
                <AutoSearchData
                    key={search.city}
                    onClick={() => {
                        setSearch(search.city);
                }}
                    >
                    <a href="#">{search.city}</a>
                    <img src="assets/imgs/north_west.svg" alt="arrowIcon" />
                </AutoSearchData>
                ))}
                </AutoSearchWrap>
                </AutoSearchContainer>
            )}
        </Wrapper>
    )
}