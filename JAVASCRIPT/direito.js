window.addEventListener('scroll', function() {
  const rights = document.getElementById('rights');
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollPosition >= documentHeight) {
      rights.style.display = 'block'; 
  } else {
      rights.style.display = 'none'; 
  }
});