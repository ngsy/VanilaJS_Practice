console.log("app is running!");

class App {
  $target = null; //$를 붙이는건 DOM 을 가르키는것
  data = []; //컴포넌트 데이터를 가지고있다.

  constructor($target) { //클래스가 실행될때 초기화 해주는 구문 constructor 생성자
    this.$target = $target;

    this.Loading = new Loading({
      $target,
    });

    this.DarkmodeToggle = new DarkModeToggle({
      $target,
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        //로딩 show
        console.log('show');
        this.Loading.show();
        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data)});
        console.log('hide');
        //로딩 hide
        this.Loading.hide();
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData); //새로운 컴포넌트에다 데이터를 넣어주는 거라 알수있음.
  }
}
