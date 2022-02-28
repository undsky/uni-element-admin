import http from './request.js'

async function _OSS(bucket) {
	const {
		AccessKeyId,
		AccessKeySecret,
		SecurityToken
	} = await http.post('/api/alicloud/sts/oss', {
		bucket
	}, false)

	return new OSS({
		region: 'oss-cn-hangzhou',
		accessKeyId: AccessKeyId,
		accessKeySecret: AccessKeySecret,
		stsToken: SecurityToken,
		refreshSTSToken: async function() {
			const {
				AccessKeyId,
				AccessKeySecret,
				SecurityToken
			} = await http.post('/api/alicloud/sts/oss', {
				bucket
			}, false)

			return {
				accessKeyId: AccessKeyId,
				accessKeySecret: AccessKeySecret,
				stsToken: SecurityToken
			}
		},
		refreshSTSTokenInterval: 3500000,
		bucket
	});
}

export default {
	OSS: _OSS
}
