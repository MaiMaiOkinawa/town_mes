const toggles = document.querySelectorAll('.text-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})
