// The Window Scroller: You are developing a single-page application 
// with a smooth scrolling effect. Implement a function named 
// smoothScrollToTop that smoothly scrolls the window to the top 
// when called.

// window.scrollTo({top: 0, behavior: 'smooth'});

function smoothScrollToTop() {
    if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // const scrollStep = -window.scrollY / (500 / 15),
    //     scrollInterval = setInterval(() => {
    //         if (window.scrollY !== 0) {
    //             window.scrollBy(0, scrollStep);
    //         }
    //         else clearInterval(scrollInterval);
    //     }, 15);
}

smoothScrollToTop(); 