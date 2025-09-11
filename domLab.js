// Part One
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
  
  //Step I
  let mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  mainEl.classList.add("flex-ctr");
  
  // Step II
  
  let topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  //Step III
  
  for (let i = 0; i< menuLinks.length; i++) {
      let a = document.createElement("a");
     a.setAttribute("href", menuLinks[i].href);
      a.textContent = menuLinks[i].text;
      topMenuEl.appendChild(a);}
  
//Part Two
  // Step I-III
  let subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

  // Step IV & V
  let topMenuLinks = topMenuEl.getElementsByTagName("a");

let prevDef = function (event) {
    event.preventDefault ()
    console.log(event.type);

    if (event.target.tagName !== "A") {
          return;
    } else {
          event.target.classList.toggle ('active');
    } 

    let topMenuLinksArray = Array.from(topMenuLinks)

    topMenuLinksArray.forEach(link => {
      if (event.target.classList.contains('active')) {
        event.target.classList.remove('active')}
    });

  
    if (event.target.textContent === "ABOUT") {
      subMenuEl.style.top = "0";
    } else {
      subMenuEl.style.top = "100%";
    }
}

console.log(topMenuLinks);
  
  topMenuEl.addEventListener("click", prevDef)

  // Step V
