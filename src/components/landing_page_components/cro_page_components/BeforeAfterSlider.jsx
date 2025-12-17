// 'use client';

// import { useEffect } from 'react';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const BeforeAfterSlider = () => {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper-container', {
//       loop: true,
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       spaceBetween: 0,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 200,
//         modifier: 1.5,
//         slideShadows: false,
//       },
//       autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//     });



//     // Before-After hover logic
//     const containers = document.querySelectorAll('.container-before-after');

//     containers.forEach((container) => {
//       const wrapper = container.querySelector('.image-wrapper');
//       const overlay = wrapper.querySelector('.overlay');
//       const slider = wrapper.querySelector('.slider');

//       const handleMove = (x, wrapper, overlay, slider) => {
//         const bounds = wrapper.getBoundingClientRect();
//         const percent = ((x - bounds.left) / bounds.width) * 100;
//         overlay.style.width = `${percent}%`;
//         slider.style.left = `${percent}%`;
//       };

//       const handleMouseMove = (e) => {
//         handleMove(e.clientX, wrapper, overlay, slider);
//       };

//       const handleTouchMove = (e) => {
//         if (e.touches.length > 0) {
//           handleMove(e.touches[0].clientX, wrapper, overlay, slider);
//         }
//       };

//       wrapper.addEventListener('mousemove', handleMouseMove);
//       wrapper.addEventListener('touchmove', handleTouchMove, { passive: true });


//       return () => {
//         wrapper.removeEventListener('mousemove', handleMouseMove);
//       };
//     });
//   }, []);

//   const slides = [
//     {
//       after: '/images/cro_page_images/pr01-after.jpg',
//       before: '/images/cro_page_images/pr01-beofore.jpg',
//     },
//     {
//       after: '/images/cro_page_images/pr02-after.jpg',
//       before: '/images/cro_page_images/pr02-before.jpg',
//     },
//     {
//       after: '/images/cro_page_images/pr02-after.jpg',
//       before: '/images/cro_page_images/pr02-before.jpg',
//     },
//   ];

//   return (
//     <main className='md:mt-10 md:mb-10'>
//       <div>
//         <h1 className="mb-3 text-center text-3xl font-bold tracking-wide md:text-5xl">
//           <span className="block md:inline">Before / After</span>
//         </h1>
//       </div>
//       <div className="swiper-container">
//         <div className="swiper-wrapper">
//           {slides.map((slide, idx) => (
//             <div className="swiper-slide" key={idx}>
//               <div className="container-before-after">
//                 <div className="image-wrapper">
//                   <img src={slide.after} alt="After" />
//                   <div className="overlay">
//                     <img src={slide.before} alt="Before" />
//                   </div>
//                   <div className="slider"></div>
//                   <div className="label label-before">Before</div>
//                   <div className="label label-after">After</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* <div className="swiper-pagination"></div> */}
//       </div>
//     </main>
//   );
// };

// export default BeforeAfterSlider;
