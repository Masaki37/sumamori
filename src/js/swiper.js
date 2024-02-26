// window.onload = function () {
//     // Initialize Swiper
//     var swiperMain = new Swiper('.swiper', {
//         slidesPerView: determineSlidesPerView(), // Initial slidesPerView based on screen width
//         spaceBetween: -50, // Use a negative value to center the slides
//         loop: true,
//         grabCursor: true,
//         centeredSlides: true,
//         uniqueNavElements: true,
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//         },
//     });

//     swiperMain.on('click', function () {
//         swiperMain.slideTo(swiperMain.clickedIndex);
//     });

//     // Update slidesPerView and spaceBetween on window resize
//     window.addEventListener('resize', function () {
//         swiperMain.params.slidesPerView = determineSlidesPerView();
//         swiperMain.params.spaceBetween = -50; // Adjust as needed
//         swiperMain.update();
//     });
// };

// // Function to determine slidesPerView based on screen width
// function determineSlidesPerView() {
//     // Adjust these breakpoints as needed
//     if (window.innerWidth < 768) {
//         // For smaller screens (e.g., mobile)
//         return 1.5;
//     } else if (window.innerWidth < 1200) {
//         // For medium-sized screens (e.g., tablet)
//         return 2.5;
//     } else {
//         // For larger screens (e.g., desktop)
//         return 3;
//     }
// }

window.onload = function () {
    var swiperMain01 = new Swiper('.works-slider', {
        slidesPerView: 1.5,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 767px (for mobile devices)
            600: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });
}