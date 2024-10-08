window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar'); 
    
    if (window.scrollY > 50) { 
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled'); 
      
    }
  });

  window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    if (window.scrollY > 50) { 
        navbar.classList.add('navbar-scrolled');
        logo.src = 'images/logo-dark.png'; 
    } else {
        navbar.classList.remove('navbar-scrolled');
        logo.src = 'images/logo-light.png'; 
    }
});
  
  