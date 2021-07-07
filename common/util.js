function loadResources(array, callback) {
	const head = document.getElementsByTagName('head')[0];
	const loader = function(src, handler) {
		const exist = document.getElementById(src)
		if (exist) {
			handler()
		} else {
			const type = src.substr(src.lastIndexOf('.') + 1)
			let resource = document.createElement('js' == type ? 'script' : 'link');
			resource.id = src
			if ('js' == type) {
				resource.src = src
			} else {
				resource.media = 'all';
				resource.href = src;
				if ('css' == type) {
					resource.rel = 'stylesheet';
					resource.type = 'text/css';
				}
			}
			resource.onload = resource.onreadystatechange = function() {
					resource.onreadystatechange = resource.onload = null;
					handler();
				}
				(head || document.body).appendChild(resource);
		}
	};
	(function run() {
		if (array.length != 0) {
			loader(array.shift(), run);
		} else {
			callback && callback();
		}
	})();
}

function navigateTo(url, keepAlive) {
	if (0 == url.indexOf('http')) {
		window.open(url);
		return false
	}
	if (keepAlive) {
		uni.$router.push(url);
	} else {
		uni.navigateTo({
			url
		})
	}
	return true
}

export default {
	loadResources,
	navigateTo
}
