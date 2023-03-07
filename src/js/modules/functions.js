export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });  
}

export const mobileMenuHandler = () => {
	const mobileMenuPopup = document.querySelector('.mobile-menu');

	const openMenu = () => {
		mobileMenuPopup?.classList.add('active');
		document.body.classList.add('fixed');
	}

	const closeMenu = () => {
		mobileMenuPopup?.classList.remove('active');
		document.body.classList.remove('fixed');
	}

	return {
		open: openMenu,
		close: closeMenu
	}
}