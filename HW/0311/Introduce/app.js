const routes = {
    introduce: "<p>안녕하세요. 저는 경성대학교 소프트웨어학과 재학중인 김현진 입니다. 제가 사용할 줄 아는 언어들로는 <strong>Python</strong>, <strong>C</strong>, <strong>JAVA</strong> 가 있습니다.</p>",
    contact: "<a href=\"mailto:guswls041207@outlook.kr\"><strong>Email</strong></a><a href=\"https://www.instagram.com/hyeonjin_1207/\"><strong>Insta</strong></a>"
};

function navigate(page) {
    document.getElementById("app").innerHTML = routes[page] || "<h2>404</h2><p>페이지를 찾을 수 없습니다</p>";

    window.history.pushState({ page }, page, '#${page}');
};

window.onpopstate = function(event) {
    if(event.state) {
        navigate(event.state.page);
    }
};