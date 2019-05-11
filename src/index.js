const menuToggle = () => {
	const elements = Array.from(document.querySelectorAll("*[data-targetmenu]"));
	elements.forEach((el) => {
		const menu = document.querySelector(`[data-menu="${el.dataset.targetmenu}"`);
		el.addEventListener("click", () => {
			menu.classList.toggle("open");
		})
	});
}

menuToggle();