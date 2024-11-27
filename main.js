// window.onload = () => mainTl.play();
// const mainTl = gsap.timeline({
// 	repeat: -1,
// 	paused: true,
// 	onRepeat: () => tl.pause(),
// });

// mainTl
// 	.from(".h1-char", {
// 		scale: 0,
// 		rotation: 90,
// 		opacity: 0,
// 		delay: 2,
// 		duration: 0.05,
// 		stagger: 0.05,
// 		y: 10,
// 		onComplete: () => tl.play(),
// 	})
// 	.to({}, { duration: 5 }); // Add a 5-second pause;
// // Initialize GSAP timeline with repeat and yoyo for continuous alternation
// // const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
// const tl = gsap.timeline({ yoyo: true, paused: true });

// tl.to(".w-char .h1-char", {
// 	opacity: 0,
// 	duration: 0.6, // Duration of the flip animation
// 	ease: "power2.inOut",
// }).to(".w-char .img", {
// 	rotateY: 0, // Rotate `.w-char img` to hide it
// 	opacity: 1, // Hide `.w-char img`
// 	duration: 0.6, // Duration of the flip animation
// 	ease: "power2.inOut",
// }); // Sync this animation with the previous one
// // tl.to(".w-char .h1-char", {
// // 	rotateY: 0, // Rotate to front view
// // 	opacity: 1, // Make `.w-char .h1-char` fully visible
// // 	duration: 0.6, // Duration of the flip animation
// // 	ease: "power2.inOut",
// // });
// // .to(
// // 	".w-char img",
// // 	{
// // 		rotateY: 90, // Rotate `.w-char img` to hide it
// // 		opacity: 0, // Hide `.w-char img`
// // 		duration: 0.6, // Duration of the flip animation
// // 		ease: "power2.inOut",
// // 	},
// // 	"<"
// // ) // Sync this animation with the previous one
// // .to(".w-char .h1-char", {
// // 	rotateY: -90, // Rotate `.w-char .h1-char` to hide it
// // 	opacity: 0, // Hide `.w-char .h1-char`
// // 	duration: 0.6, // Duration of the flip animation
// // 	ease: "power2.inOut",
// // })
// // .to(
// // 	".w-char img",
// // 	{
// // 		rotateY: 0, // Rotate `.w-char img` back to the front
// // 		opacity: 1, // Make `.w-char img` fully visible
// // 		duration: 0.6, // Duration of the flip animation
// // 		ease: "power2.inOut",
// // 	},
// // 	"<"
// // ); // Sync this animation with the previous one

// // const myText = new SplitType("#h1");

// // gsap.to(".char", {
// // 	y: 0,
// // 	stagger: 0.05,
// // 	delay: 0.2,
// // 	duration: 0.05,
// // });
window.onload = () => mainTl.play();

const mainTl = gsap.timeline({
	repeat: -1,
	paused: true,
	onRepeat: () => {
		tl.pause(); // Stop `tl` when `mainTl` repeats
		tl.progress(0); // Reset `tl` progress to the start
	},
});

// Main timeline animations
mainTl
	.from(".h1-char", {
		scale: 0,
		rotation: 90,
		opacity: 0,
		delay: 2,
		duration: 0.05,
		stagger: 0.05,
		y: 10,
		onComplete: () => tl.play(), // Play `tl` when `mainTl` animation is complete
	})
	.to({}, { duration: 10.1 }); // Add a 5-second pause

// Initialize secondary GSAP timeline
const tl = gsap.timeline({ yoyo: true, paused: true });

tl.to(".w-char .h1-char", {
	opacity: 0,
	duration: 0.6, // Duration of the flip animation
	ease: "power2.inOut",
}).to(".w-char .img", {
	rotateY: 0, // Rotate `.w-char img` to hide it
	opacity: 1, // Hide `.w-char img`
	duration: 0.6, // Duration of the flip animation
	ease: "power2.inOut",
});
