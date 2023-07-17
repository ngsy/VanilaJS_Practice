class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $wrapper =document.createElement('section');
    const $DarkModeToggle = document.createElement("input"); //DOM 요소
    this.$DarkModeToggle = $DarkModeToggle; //input 엘리멘트
    this.$DarkModeToggle.type ="checkbox";

    $DarkModeToggle.className = "DarkModeToggle";
    $wrapper.appendChild($DarkModeToggle);
    $target.appendChild($wrapper); //기존 DOM 에 넣어주는 것

    $DarkModeToggle.addEventListener("change", e => {
      this.setColorMode(e.target.checked);
    });

    this.initColorMode();
  }
  initColorMode(){
    //초기화
    //isDarkMode state ,checkbox 상태 ,html attr
    this.isDarkMode =window.matchMedia('(prefers-color-scheme:dark)').matches; //window darkmode 상태 확인.
    this.$DarkModeToggle.checked =this.isDarkMode;
    document.documentElement.setAttribute('color-mode',this.isDarkMode?'dark':'light');
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode){
    document.documentElement.setAttribute('color-mode',isDarkMode? 'dark':'light');
  }

}
