let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".popup-screen");

document
	.querySelectorAll(".popular__container .popular__card")
	.forEach((popular__card) => {
		popular__card.onclick = () => {
			preveiwContainer.style.display = "flex";
			let name = popular__card.getAttribute("data-name");
			previewBox.forEach((preview) => {
				let target = preview.getAttribute("data-target");
				if (name == target) {
					preview.classList.add("active");
				}
			});
		};
	});

previewBox.forEach((close) => {
	close.querySelector(".close-btn").onclick = () => {
		close.classList.remove("active");
		preveiwContainer.style.display = "none";
	};
});
