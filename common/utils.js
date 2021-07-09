import XEUtils from 'xe-utils'

XEUtils.mixin({
	navigateTo(url, that) {
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
	},
	timeago(diffDate, currDate) {
		let dateDiff = XEUtils.getDateDiff(diffDate, currDate || XEUtils.now())
		if (dateDiff.done) {
			if (dateDiff.time < 31536000000) {
				if (dateDiff.time < 2592000000) {
					if (dateDiff.time < 86400000) {
						if (dateDiff.time < 360000) {
							if (dateDiff.time < 60000) {
								if (dateDiff.time < 10000) {
									return `刚刚`
								}
								return `${dateDiff.ss}秒之前`
							}
							return `${dateDiff.mm}分钟之前`
						}
						return `${dateDiff.HH}小时之前`
					}
					return `${dateDiff.dd}天之前`
				}
				return `${dateDiff.MM}个月之前`
			}
			return `${dateDiff.yyyy}年之前`
		}
		return diffDate
	}
})

export default XEUtils
