document.addEventListener('DOMContentLoaded', () => {
    // Animation cho thanh Progress bar khi scroll tới
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.getAttribute('data-width');
                progress.style.width = width;
                observer.unobserve(progress); // Chỉ chạy animation 1 lần
            }
        });
    };

    const options = {
        threshold: 0.5 // Kích hoạt khi 50% phần tử xuất hiện trên màn hình
    };

    const observer = new IntersectionObserver(animateSkills, options);

    skillBars.forEach(bar => observer.observe(bar));
});
