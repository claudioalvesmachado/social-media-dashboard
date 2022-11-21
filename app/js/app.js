const toggleBtn = document.querySelector('.switch__button') 

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkmode')
})