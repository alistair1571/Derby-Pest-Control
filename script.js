document.querySelectorAll('.leadForm').forEach(function(f){
  f.addEventListener('submit', function(e){
    e.preventDefault();
    var form = this;
    var btn = form.querySelector('.form-submit');
    var originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending...';
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(response){
      if (response.ok) {
        btn.textContent = "Thanks, we'll call you shortly!";
        btn.style.background = 'var(--green-deep)';
        form.reset();
      } else {
        btn.textContent = 'Something went wrong, please call us instead';
        btn.disabled = false;
      }
    }).catch(function(){
      btn.textContent = 'Something went wrong, please call us instead';
      btn.disabled = false;
    });
  });
});

var mobileToggle = document.getElementById('mobileToggle');
var navLinks = document.getElementById('navLinks');
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', function(){
    var isOpen = navLinks.classList.toggle('nav-open');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.addEventListener('click', function(e){
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      navLinks.classList.remove('nav-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });
}