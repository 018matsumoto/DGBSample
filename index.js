
window.onload = function () {
  const ShowPageTop = function () {
    // 位置取得（ページトップボタン）
    const pageTop = document.getElementById('page_top');
    const rect = pageTop.getBoundingClientRect();

    // スクロール量取得
    const scrollTop = window.pageYOffset;

    if (scrollTop > rect.top) {
      pageTop.classList.add('show');
    } else {
      pageTop.classList.remove('show');
    }
  };

  window.addEventListener('scroll', ShowPageTop);

  const OpenSideMenu = function () {
    const side = document.getElementById('side_navi');
    side.classList.toggle('open');
  };

  const btnBurger = document.querySelector('.burger-btn');
  const btnClose = document.querySelector('.close-btn');
  const btnSideList = document.querySelectorAll('.side-btn');

  btnBurger.addEventListener('click', OpenSideMenu);
  btnClose.addEventListener('click', OpenSideMenu);
  btnSideList.forEach(function (btnSide) {
    btnSide.addEventListener('click', OpenSideMenu);
  });

  const LinkIdRemove = function (e) {
    const target = document.getElementById(e.currentTarget.hash.split('#')[1]);
    if (target) {
      var goleY = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo(0, goleY);
    }
    e.preventDefault();
  };

  const linkList = document.querySelectorAll('a');
  linkList.forEach(function (link) {
    link.addEventListener('click', LinkIdRemove);
  });

  // const home = document.getElementById('home');
  // // home.addEventListener('click', scrollPage);
  // home.addEventListener('click', function () {
  //   setTimeout("scrollPage()", 2000);
  // });
  
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};

// // スクロール速度（ミリ秒）
// const speed = 1;
// function scrollPage() {
//   window.scrollBy(0, 3);
//   setTimeout("scrollPage()", speed);
// }