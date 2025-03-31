import React, { useState } from "react";
import Header from "./introduce/Header.js";
import Navigation from "./introduce/Navigation.js";
import Info from "./introduce/Info.js";
import School from "./introduce/School.js";

const routes = {
    introduce: (
        <p>
            안녕하세요. 저는 경성대학교 소프트웨어학과 재학중인 김현진 입니다. 제가 사용할 줄 아는 언어들로는 <strong>Python</strong>, <strong>C</strong>, <strong>JAVA</strong> 가 있습니다.
        </p>
    ),
    contact: (
        <>
            <a href="mailto:guswls041207@outlook.kr"><strong>Email</strong></a>
            <a href="https://www.instagram.com/hyeonjin_1207/"><strong>Insta</strong></a>
        </>
    )
};

function App() {
    const [page, setPage] = useState('introduce');

    const navigate = (newPage) => {
        setPage(newPage);
        window.history.pushState({ page: newPage }, newPage, `#${newPage}`);
    };

    window.onpopstate = (event) => {
        if (event.state) {
            setPage(event.state.page);
        }
    };

    return (
        <div>
            <Header name='김현진'/>
            <School school='경성대학교'/>
            <Info numb={2023864019} name="김현진"/>
            <Navigation title='자기소개' content='introduce' onClick={navigate} />
            <Navigation title='연락처' content='contact' onClick={navigate} />
            <div id="app">{routes[page]}</div>
        </div>
    );
}

export default App;
