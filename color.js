// heading 변수를 선언하고 h1 태그를 저장한 꼴이 됨.
var heading = document.querySelector("#heading");
heading.onclick = function () {
    // h1 태그를 선택하고 css를 사용하여 글자색을 바꿈
    heading.style.color = "red";
}
