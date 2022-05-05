import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

const SearchContainer = styled.div`
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Search = styled.input`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  outline: none;
`;


const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 400px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  padding: 15px;
`;

const AutoSearchWrap = styled.ul`

`;

const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: 100%;
  /* height: 30px; */
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
  img {
    position: absolute;
    right: 5px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface autoDatas {
  city: string;
  growth_from_2000_to_2013: string;
  latitude:number;
  longitude:number;
  population:string;
  rank:string;
  state:string;
}
function Header() {
	const [keyword, setKeyword] = useState<string>("");
    const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
    const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  const fetchData = ()  =>{
    return fetch(
      `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`
    )
      .then((res) => res.json())
      .then((data) => data.slice(0,100))
  }
  interface ICity {
    includes(data:string): boolean;
    city?: any;
  }
  const updateData = async() => {
    const res = await fetchData();
    let b = res.filter((list: ICity) => list.city.includes(keyword) === true)
                .slice(0,10);
    // console.log(b);
    setKeyItems(b);
  }
  useEffect(() => {
    updateData();
    },[keyword])
    return (
    <SearchContainer>
     <Search value={keyword} onChange={onChangeData} />
      <img src="assets/imgs/search.svg" alt="searchIcon" />
       {keyItems.length > 0 && keyword && (
        <AutoSearchContainer>
         <AutoSearchWrap >
          {keyItems.map((search, idx) => (
           <AutoSearchData
            key={search.city}
            onClick={() => {
            setKeyword(search.city);
           }}
            >
            <a href="#">{search.city}</a>
            <img src="assets/imgs/north_west.svg" alt="arrowIcon" />
           </AutoSearchData>
          ))}
         </AutoSearchWrap>
        </AutoSearchContainer>
       )}
      </SearchContainer>
     );
}
export default Header;