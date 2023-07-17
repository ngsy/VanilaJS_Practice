const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $wrapper = document.createElement("section");
    const $searchInput = document.createElement("input"); //DOM 요소
    this.$searchInput = $searchInput; //input 엘리멘트
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $wrapper.appendChild($searchInput);
    $target.appendChild($wrapper); //기존 DOM 에 넣어주는 것

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) { //enter
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
