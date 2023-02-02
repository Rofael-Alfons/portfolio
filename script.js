// // let navBtn = document.querySelectorAll(".nav__link");
// // console.log(navBtn);
// let sliders = document.querySelectorAll(".sliders");
// let about = document.querySelector("#about");
// const slidersOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -150px 0px",
// };
// const sliderObserver = new IntersectionObserver(function (
//   entries,
//   sliderObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       sliders.forEach((slider) => {
//         slider.classList.add("appear");
//         console.log("done");
//       });
//     } else {
//       return;
//     }
//   });
// },
// slidersOptions);
// sliderObserver.observe(about);
// // const obsCallBack = function (entries) {
// //   console.log(entries[0]);
// // };
// // const appearOnScroll = new IntersectionObserver(obsCallBack);
// // sliders.forEach((slider) => {
// //   appearOnScroll.observe(slider);
// // });
// // navBtn.forEach((btn) => {
// //   btn.addEventListener("click", function (e) {
// //     e.preventDefault();
// //     if (btn.lastElementChild !== `<div></div>`) {
// //       btn.insertAdjacentHTML(
// //         "beforeend",
// //         `<div class="nav__link__redDot"></div>`
// //       );
// //     } else {
// //       console.log("remove");
// //     }
// //   });
// // });
