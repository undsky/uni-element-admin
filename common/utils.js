function navigateTo(url, that) {
	if (0 == url.indexOf('http')) {
		window.open(url);
		return false;
	} else if (that) {
		that.$router.push(url);
	} else {
		uni.navigateTo({
			url
		})
	}
	return true;
}

export default {
	navigateTo
}
