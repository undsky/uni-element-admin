<template>
	<view>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select v-model="form.region" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="活动时间">
				<el-col :span="11">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
					</el-date-picker>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="即时配送">
				<el-switch v-model="form.delivery"></el-switch>
			</el-form-item>
			<el-form-item label="活动性质">
				<el-checkbox-group v-model="form.type">
					<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
					<el-checkbox label="地推活动" name="type"></el-checkbox>
					<el-checkbox label="线下主题活动" name="type"></el-checkbox>
					<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="特殊资源">
				<el-radio-group v-model="form.resource">
					<el-radio label="线上品牌商赞助"></el-radio>
					<el-radio label="线下场地免费"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<vxe-toolbar>
			<template #buttons>
				<vxe-button @click="allAlign = 'left'">居左</vxe-button>
				<vxe-button @click="allAlign = 'center'">居中</vxe-button>
				<vxe-button @click="allAlign = 'right'">居右</vxe-button>
			</template>
		</vxe-toolbar>
		
		<vxe-table :align="allAlign" :data="tableData">
			<vxe-table-column type="seq" width="60"></vxe-table-column>
			<vxe-table-column field="name" title="Name"></vxe-table-column>
			<vxe-table-column field="sex" title="Sex"></vxe-table-column>
			<vxe-table-column field="age" title="Age"></vxe-table-column>
		</vxe-table>
	</view>
	
</template>
<script>
	export default {
		name: 'form',
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				allAlign: null,
				tableData: [{
						id: 10001,
						name: 'Test1',
						role: 'Develop',
						sex: 'Man',
						age: 28,
						address: 'vxe-table 从入门到放弃'
					},
					{
						id: 10002,
						name: 'Test2',
						role: 'Test',
						sex: 'Women',
						age: 22,
						address: 'Guangzhou'
					},
					{
						id: 10003,
						name: 'Test3',
						role: 'PM',
						sex: 'Man',
						age: 32,
						address: 'Shanghai'
					},
					{
						id: 10004,
						name: 'Test4',
						role: 'Designer',
						sex: 'Women',
						age: 24,
						address: 'Shanghai'
					}
				]
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>
