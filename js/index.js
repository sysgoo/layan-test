document.addEventListener('DOMContentLoaded', () => {
    const aaaa = document.querySelector('.hmbrgr-btn');
    const mmmm = document.querySelector('.mobile-menu');
    aaaa.addEventListener('click', () =>
        mmmm.classList.toggle('active')
    );
});

