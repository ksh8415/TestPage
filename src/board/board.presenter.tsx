import {Wrapper, Title, SearchBarWrapper, SearchImg, SearchBar, SearchCancleImg, SearchWidth, SearchKeyboard, SearchMike, AutoSearchMainWrapper, AutoSearchWrap, AutoSearchData} from './board.style'

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
                    <AutoSearchMainWrapper>
                        <AutoSearchWrap>
                        {keyItems.map((search, idx) => (
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <img style={{width:"12px", height:"12px"}} src='Magnifier.png'></img>
                                <AutoSearchData
                                    key={search.title}
                                    onClick={() => {
                                        setSearch(search.title);
                                }}
                                    >
                                    <a href="#">{search.title}</a>
                                </AutoSearchData>
                            </div>
                        ))}
                        </AutoSearchWrap>

                    </AutoSearchMainWrapper>
                )}
        </Wrapper>
    )
}