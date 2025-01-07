(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const a=`<main class="header-section">\r
    <div id="profile-photo">\r
      <!-- <img src="../../public/assets/img/photo-profile.jpg"  alt="profile-photo" id="photoProfile"> -->\r
      <img src="/alejandroCeron.D/assets/img/photo-profile.jpg"  alt="profile-photo" id="photoProfile">\r
    </div>\r
    <div class="title">\r
      <h1 id="title-1">\r
        <span class="">Alejandro</span>\r
        <span class="">Ceron</span>\r
        <span class="">Delgado.</span>\r
      </h1>\r
    </div>\r
    <div class="subTitle">\r
      <h1 id="sub-title">Desarrollador Web Junior</h1>\r
    </div>\r
    <div class="icons">\r
      <a href="#">\r
        <ion-icon name="logo-github" id="logo-github"></ion-icon>\r
      </a>\r
      <a href="" onclick="window.open('/assets/pdf/cvAlejandroCeron.pdf')">\r
        <ion-icon name="document-attach-outline" id="logo-cv"></ion-icon>\r
      </a>\r
\r
      <a href="#">\r
        <ion-icon name="logo-linkedin" id="logo-linkedin"></ion-icon>\r
        </ion-icon>\r
      </a>\r
    </div>\r
</main>\r
  <!-- icon Hamburger and list -->\r
  <div class="container-4">\r
    <input type="checkbox" name="" id="nav_checkbox" class="nav__checkbox">\r
    <label for="nav_checkbox" class="nav__toggle">\r
      <img src="/alejandroCeron.D/assets/img/svg/openMenu.svg" alt="" id="openMenu" class="menu">\r
      <img src="/alejandroCeron.D/assets/img/svg/closeMenu.svg" alt="" id="closeMenu" class="close">\r
    </label>\r
    <div class="nav__menuElements">\r
      <ul class="itemsElements">\r
        <li class="links">\r
          <a href="/src/app/pages/projects.html" class="btn">Proyectos</a></li>\r
        <li class="links">\r
          <a href="#" class="btn">Contacto</a></li>\r
        <li class="links">\r
          <a href="#" class="btn">Formación/Experiencia</a></li>\r
        <li class="links">\r
          <a href="" onclick="window.open('/public/assets/pdf/cvAlejandroCeron.pdf')" class="btn5 ">CV</a>\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
  <!-- Texto -->\r
  <div class="container-5">\r
    <p id="text">\r
      Soy Alejandro, tengo 24 y bla bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga eligendi officia necessitatibus non deleniti nesciunt quisquam natus molestias, nisi, ab ipsum obcaecati sunt provident aut. Beatae explicabo adipisci quas culpa?\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos asperiores officiis, voluptatum possimus adipisci hic vel quibusdam temporibus veniam quam natus quo laborum unde minima deleniti minus magni beatae!\r
      Modi consequuntur alias dolores reprehenderit autem. Sunt distinctio dolorum error maxime id. Facere, deleniti nemo aspernatur consectetur nesciunt esse libero iure, minus corporis vitae nihil id saepe? Iure, temporibus ut.\r
      Sap iente inventore consequuntur quis eum porro nam repellat eos asperiores. Quae id veritatis dignissimos similique minus rerum aspernatur dolor quod debitis necessitatibus praesentium natus, eaque deleniti. Iure adipisci numquam et.\r
\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi officiis facere nemo, tempora consequatur aliquam ratione quia iste itaque fugit voluptatum ad dolores, labore doloremque voluptatibus nulla accusantium. Tempore.\r
      Laudantium veritatis, ad ipsum animi dolor quidem labore? Labore nemo rerum cumque placeat deserunt expedita impedit provident. Dolorem, exercitationem cupiditate sapiente dignissimos itaque ipsum architecto veniam quidem iusto, perferendis dicta.\r
    </p>\r
  </div>\r
\r
  <footer class="footer">\r
    <div class="separator"></div>\r
    <div class="footer-content">\r
      <a href="#">\r
        <ion-icon name="logo-github" id="logo-githubFooter"></ion-icon>\r
      </a>\r
      <a href="" onclick="window.open('/public/assets/pdf/cvAlejandroCeron.pdf')">\r
        <ion-icon name="document-attach-outline" id="logo-cvFooter"></ion-icon>\r
      </a>\r
      <a href="#">\r
        <ion-icon name="logo-linkedin" id="logo-linkedinFooter"></ion-icon>\r
      </a>\r
    </div>\r
    <div class="text-content">\r
      <span id="textName">\r
        Alejandro Ceron Delgado - 2024\r
      </span>\r
    </div>\r
  </footer>`,l=o=>{(()=>{const n=document.createElement("div");n.setAttribute("class","page1"),n.innerHTML=a,document.querySelector(o).append(n)})()};l("#app");
