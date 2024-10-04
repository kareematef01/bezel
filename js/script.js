window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar'); 
    var logo = document.getElementById('logo');
    if (window.scrollY > 50) { 
      navbar.classList.add('navbar-scrolled');
      logo.src = '../images/logo-dark.png'; 
    } else {
      navbar.classList.remove('navbar-scrolled'); 
      logo.src = '../images/logo-light.png';
    }
  });


  