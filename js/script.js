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
        console.log('Changing to dark logo');
        logo.src = 'images/logo-dark.png'; // تأكد من صحة المسار
    } else {
        navbar.classList.remove('navbar-scrolled');
        console.log('Changing to light logo');
        logo.src = 'images/logo-light.png'; // تأكد من صحة المسار
    }
});
  
  