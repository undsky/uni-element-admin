<template>
	<el-tabs value="countto" tab-position="left">
		<el-tab-pane name="countto">
			<span slot="label">数字滚动<i @click="$utils.navigateTo('https://github.com/PanJiaChen/vue-countTo')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<div class='countto-container'>
					<div class="countto-example-item">
						<el-divider content-position="left">simple example</el-divider>
						<code>&lt;count-to :startVal=&#x27;0&#x27; :endVal=&#x27;2018&#x27;
							:duration=4000&gt;&lt;/count-to&gt;</code>
						<count-to ref='example1' class='countto-example1' :start-val=startVal1 :end-val='endVal1'
							:duration=4000></count-to>
						<div class='countto-example-btn' @click='start1'>start</div>
						<div class='countto-example-btn' @click='changeExampleEndVal'>change end-val</div>
						<div class='countto-example-btn' @click='incrementalUpdate'>incremental update</div>
					</div>
					<div class="countto-example-item">
						<el-divider content-position="left">count down example</el-divider>
						<code> &lt;count-to :startVal=&#x27;2017&#x27; :endVal=&#x27;0&#x27;
							:duration=8000&gt;&lt;/count-to&gt;</code>
						<count-to ref='example2' class='countto-example2' :start-val='2017' :end-val=0 :duration=8000>
						</count-to>
						<div class='countto-example-btn' @click='start2'>start</div>
					</div>
					<div class="countto-example-item">
						<el-divider content-position="left">custom example</el-divider>
						<count-to ref='example3' class='countto-example3' :start-val='_startVal' :end-val='_endVal'
							:duration='_duration' :decimals='_decimals' :separator='_separator' :prefix='_prefix'
							:suffix='_suffix' :autoplay=false>
						</count-to>
						<div>
							<label class="countto-label" for="startValInput">startVal: <input class="countto-input"
									type="number" v-model.number='setStartVal' name='startValInput' /></label>
							<label class="countto-label" for="endValInput">endVal: <input class="countto-input"
									type="number" v-model.number='setEndVal' name='endVaInput' /></label>
							<label class="countto-label" for="durationInput">duration: <input class="countto-input"
									type="number" v-model.number='setDuration' name='durationInput' /></label>
							<div class="countto-startBtn countto-example-btn" @click='start3'>start</div>
							<div class="countto-pause-resume-btn countto-example-btn" @click='pauseResume'>pause/resume
							</div>
							<br />
							<label class="countto-label" for="decimalsInput">decimals: <input class="countto-input"
									type="number" v-model.number='setDecimals' name='decimalsInput' /></label>
							<label class="countto-label" for="separatorInput">separator: <input class="countto-input"
									v-model='setSeparator' name='separatorInput' /></label>
							<label class="countto-label" for="prefixInput">prefix: <input class="countto-input"
									v-model='setPrefix' name='prefixInput' /></label>
							<label class="countto-label" for="suffixInput">suffix: <input class="countto-input"
									v-model='setSuffix' name='suffixInput' /></label>
						</div>
						<code>&lt;count-to :start-val=&#x27;{{_startVal}}&#x27; :end-val=&#x27;{{_endVal}}&#x27;
							:duration=&#x27;{{_duration}}&#x27; :decimals=&#x27;{{_decimals}}&#x27;
							:separator=&#x27;{{_separator}}&#x27; :prefix=&#x27;{{_prefix}}&#x27;
							:suffix=&#x27;{{_suffix}}&#x27; :autoplay=false&gt;</code>
					</div>
				</div>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="breadcrumb">
			<span slot="label">面包屑<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/breadcrumb')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="pageheader">
			<span slot="label">页头<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/page-header')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="dropdown">
			<span slot="label">下拉菜单<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/dropdown')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="step">
			<span slot="label">步骤条<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/steps')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="card">
			<span slot="label">卡片<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/card')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="carousel">
			<span slot="label">走马灯<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/carousel')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="collapse">
			<span slot="label">折叠面板<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/collapse')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="timeline">
			<span slot="label">时间线<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/timeline')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="divider">
			<span slot="label">分割线<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/divider')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="backtop">
			<span slot="label">回到顶部<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/backtop')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="infiniteScroll">
			<span slot="label">无限滚动<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/infiniteScroll')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="drawer">
			<span slot="label">抽屉<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/drawer')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	import countTo from 'vue-count-to';

	export default {
		components: {
			countTo
		},
		data() {
			return {
				setStartVal: 0,
				setEndVal: 2017,
				setDuration: 4000,
				setDecimals: 0,
				setSeparator: ',',
				setSuffix: ' rmb',
				setPrefix: '¥ ',
				startVal1: 0,
				endVal1: 2017
			}
		},
		computed: {
			_startVal() {
				if (this.setStartVal) {
					return this.setStartVal
				} else {
					return 0
				}
			},
			_endVal() {
				if (this.setEndVal) {
					return this.setEndVal
				} else {
					return 0
				}
			},
			_duration() {
				if (this.setDuration) {
					return this.setDuration
				} else {
					return 100
				}
			},
			_decimals() {
				if (this.setDecimals) {
					if (this.setDecimals < 0 || this.setDecimals > 20) {
						alert('digits argument must be between 0 and 20')
						return 0
					}
					return this.setDecimals
				} else {
					return 0
				}
			},
			_separator() {
				return this.setSeparator
			},
			_suffix() {
				return this.setSuffix
			},
			_prefix() {
				return this.setPrefix
			},
		},
		methods: {
			changeExampleEndVal() {
				this.endVal1 = this.endVal1 + 1000
			},
			incrementalUpdate() {
				this.startVal1 = this.endVal1
				this.endVal1 = this.endVal1 + 1000
			},
			callback() {
				console.log('callback')
			},
			start1() {
				this.$refs.example1.start();
			},
			start2() {
				this.$refs.example2.start();
			},
			start3() {
				this.$refs.example3.start();
			},
			pauseResume() {
				this.$refs.example3.pauseResume();
			}
		}
	}
</script>

<style scoped>
	.countto-container {
		width: 980px;
		margin-right: auto;
		margin-left: auto;
	}

	.countto-example-btn {
		display: inline-block;
		margin-bottom: 0;
		font-weight: 500;
		text-align: center;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		border: 1px solid transparent;
		white-space: nowrap;
		line-height: 1.5;
		padding: 4px 15px;
		font-size: 12px;
		border-radius: 4px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
		position: relative;
		color: rgba(0, 0, 0, .65);
		background-color: #fff;
		border-color: #d9d9d9;
	}

	.countto-example-btn:hover {
		color: #4AB7BD;
		background-color: #fff;
		border-color: #4AB7BD;
	}

	.countto-example-item {
		margin-bottom: 80px;
	}

	.countto-example1 {
		font-size: 40px;
		color: #30B08F;
		display: block;
		margin: 10px 0;
	}

	.countto-example2 {
		font-size: 40px;
		color: #E65D6E;
		display: block;
		margin: 10px 0;
	}

	.countto-example3 {
		font-size: 50px;
		color: #F6416C;
		display: block;
		margin: 10px 0;
		text-align: center;
		font-size: 80px;
		font-weight: 500;
	}

	.countto-label {
		color: #2f4f4f;
		font-size: 16px;
		display: inline-block;
		margin: 15px 30px 15px 0;
	}

	.countto-input {
		position: relative;
		display: inline-block;
		padding: 4px 7px;
		width: 50px;
		height: 28px;
		cursor: text;
		font-size: 12px;
		line-height: 1.5;
		color: rgba(0, 0, 0, .65);
		background-color: #fff;
		background-image: none;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		-webkit-transition: all .3s;
		transition: all .3s;
	}

	.countto-startBtn {
		margin-left: 20px;
		font-size: 20px;
		color: #30B08F;
		background-color: #fff;
	}

	.countto-startBtn:hover {
		background-color: #30B08F;
		color: #fff;
		border-color: #30B08F;
	}

	.countto-pause-resume-btn {
		font-size: 20px;
		color: #E65D6E;
		background-color: #fff;
	}

	.countto-pause-resume-btn:hover {
		background-color: #E65D6E;
		color: #fff;
		border-color: #E65D6E;
	}
</style>
