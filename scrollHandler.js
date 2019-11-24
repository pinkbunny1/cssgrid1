const callback = entries => {
    entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.add('is_visible') : entry.target.classList.remove('is_visible')
    })
};

const observerAPI = new IntersectionObserver(callback);

const targets = document.querySelectorAll('.show_on_scroll');

targets.forEach(target => observerAPI.observe(target));