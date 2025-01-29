let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When the element enters the viewport, add the appropriate animation class
            if (entry.target.classList.contains('left-logo')) {
                entry.target.classList.add("animate-into-view-left");
            } else if (entry.target.classList.contains('right-logo')) {
                entry.target.classList.add("animate-into-view-right");
            }

            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, {
    rootMargin: "0px 0px -30% 0px" // Trigger when the element is almost in view
});

// Observe the individual img-container elements (with left-logo and right-logo classes)
document.querySelectorAll('.img-container').forEach(el => {
    observer.observe(el);
});
