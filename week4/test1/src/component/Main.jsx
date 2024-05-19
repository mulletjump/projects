import React, {useState} from 'react';

const Main = (props)=> {
const [myName, setmyName] = useState("성연")
    function changeName() {
        setmyName(myName === "성연"? "뭐야":"성연")
    }
    return (
        <div>
            <h1>안녕하세요! {myName}입니다</h1>
            <button onClick={changeName}>Change</button>
        </div>
    );
}

export default Main;