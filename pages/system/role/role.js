import config from '@/common/config.js'
import request from '@/common/request.js'

export const formRoleModal = {
	formRoleModalShow: false,
	formRoleModalTitle: ' ',
	formRoleValue: {},
	formRoleOption: {
		column: [{
			type: 'input',
			label: '',
			span: 24,
			display: false,
			prop: 'id'
		}, {
			type: 'input',
			label: '',
			span: 24,
			display: false,
			prop: 'pid'
		}, {
			type: 'input',
			label: '',
			span: 24,
			display: false,
			prop: 'pids'
		}, {
			type: 'input',
			label: '上级',
			span: 24,
			display: true,
			prop: 'pname',
			readonly: true,
			placeholder: '无'
		}, {
			type: 'input',
			label: '名称',
			span: 24,
			display: true,
			prop: 'name',
			required: true,
			rules: [{
				required: true,
				message: '名称必须填写'
			}]
		}],
		labelPosition: 'left',
		labelSuffix: '：',
		labelWidth: 120,
		gutter: 0,
		menuBtn: true,
		submitBtn: true,
		submitText: '提交',
		emptyBtn: false,
		emptyText: '清空',
		menuPosition: 'center',
		menuSpan: 24
	}
}

export const treeRole = {
	treeRoleLoading: false,
	treeRoleData: []
}

export const treeMenu = {
	treeMenuLoading: false,
	treeMenuData: []
}
