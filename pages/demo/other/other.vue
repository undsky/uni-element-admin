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
				<el-divider content-position="left">基础用法</el-divider>
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
				<el-divider content-position="left">图标分隔符</el-divider>
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>活动管理</el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="pageheader">
			<span slot="label">页头<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/page-header')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础</el-divider>
				<el-page-header @back="goBack" content="详情页面">
				</el-page-header>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="dropdown">
			<span slot="label">下拉菜单<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/dropdown')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-dropdown>
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">触发对象</el-divider>
				<el-dropdown>
					<el-button type="primary">
						更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-dropdown split-button type="primary" @click="handleClick">
					更多菜单
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">触发方式</el-divider>
				<el-row class="block-col-2">
					<el-col :span="12">
						<span class="demonstration">hover 激活</span>
						<el-dropdown>
							<span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
								<el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
					<el-col :span="12">
						<span class="demonstration">click 激活</span>
						<el-dropdown trigger="click">
							<span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
								<el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
								<el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</el-row>
				<el-divider content-position="left">菜单隐藏方式</el-divider>
				<el-dropdown :hide-on-click="false">
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">指令事件</el-divider>
				<el-dropdown @command="handleCommand">
					<span class="el-dropdown-link">
						下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a">黄金糕</el-dropdown-item>
						<el-dropdown-item command="b">狮子头</el-dropdown-item>
						<el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
						<el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
						<el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-divider content-position="left">不同尺寸</el-divider>
				<el-dropdown split-button type="primary">
					默认尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="medium" split-button type="primary">
					中等尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="small" split-button type="primary">
					小型尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="mini" split-button type="primary">
					超小尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="step">
			<span slot="label">步骤条<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/steps')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-steps :active="active" finish-status="success">
					<el-step title="步骤 1"></el-step>
					<el-step title="步骤 2"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>

				<el-button style="margin-top: 12px;" @click="next">下一步</el-button <el-divider content-position="left">
				</el-divider>
				<el-divider content-position="left">含状态步骤条</el-divider>
				<el-steps :space="200" :active="1" finish-status="success">
					<el-step title="已完成"></el-step>
					<el-step title="进行中"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>
				<el-divider content-position="left">有描述的步骤条</el-divider>
				<el-steps :active="1">
					<el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤 3" description="这段就没那么长了"></el-step>
				</el-steps>
				<el-divider content-position="left">居中的步骤条</el-divider>
				<el-steps :active="2" align-center>
					<el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
					<el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
				</el-steps>
				<el-divider content-position="left">带图标的步骤条</el-divider>
				<el-steps :active="1">
					<el-step title="步骤 1" icon="el-icon-edit"></el-step>
					<el-step title="步骤 2" icon="el-icon-upload"></el-step>
					<el-step title="步骤 3" icon="el-icon-picture"></el-step>
				</el-steps>
				<el-divider content-position="left">竖式步骤条</el-divider>
				<div style="height: 300px;">
					<el-steps direction="vertical" :active="1">
						<el-step title="步骤 1"></el-step>
						<el-step title="步骤 2"></el-step>
						<el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
					</el-steps>
				</div>
				<el-divider content-position="left">简洁风格的步骤条</el-divider>
				<el-steps :active="1" simple>
					<el-step title="步骤 1" icon="el-icon-edit"></el-step>
					<el-step title="步骤 2" icon="el-icon-upload"></el-step>
					<el-step title="步骤 3" icon="el-icon-picture"></el-step>
				</el-steps>

				<el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
					<el-step title="步骤 1"></el-step>
					<el-step title="步骤 2"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="card">
			<span slot="label">卡片<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/card')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基础用法</el-divider>
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
				<el-divider content-position="left">简单卡片</el-divider>
				<el-card class="box-card">
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
				<el-divider content-position="left">带图片</el-divider>
				<el-row>
					<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
						<el-card :body-style="{ padding: '0px' }">
							<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
								class="image">
							<div style="padding: 14px;">
								<span>好吃的汉堡</span>
								<div class="bottom clearfix">
									<time class="time">{{ currentDate }}</time>
									<el-button type="text" class="button">操作按钮</el-button>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<el-divider content-position="left">卡片阴影</el-divider>
				<el-row :gutter="12">
					<el-col :span="8">
						<el-card shadow="always">
							总是显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover">
							鼠标悬浮时显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="never">
							从不显示
						</el-card>
					</el-col>
				</el-row>
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
				active: 0,
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
			next() {
				if (this.active++ > 2) this.active = 0;
			},
			handleCommand(command) {
				this.$message('click on item ' + command);
			},
			handleClick() {
				alert('button click');
			},
			goBack() {
				console.log('go back');
			},
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
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 480px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.el-dropdown {
		vertical-align: top;
	}

	.el-dropdown+.el-dropdown {
		margin-left: 15px;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

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
