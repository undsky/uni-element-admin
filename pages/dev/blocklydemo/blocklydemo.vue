<template>
	<div id="blocklyDiv" style="height: calc(100vh - 40px); width: 100%;"></div>
</template>

<script>
	// Import Blockly core.
	import * as Blockly from 'blockly/core';
	// Import the default blocks.
	import * as libraryBlocks from 'blockly/blocks';
	// Import a generator.
	import {
		javascriptGenerator
	} from 'blockly/javascript';
	// Import a message file.
	import * as ZhHans from 'blockly/msg/zh-hans';
	Blockly.setLocale(ZhHans);

	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad: async function(options) {
			this.$nextTick(() => {
				const toolbox = {
					// There are two kinds of toolboxes. The simpler one is a flyout toolbox.
					kind: 'flyoutToolbox',
					// The contents is the blocks and other items that exist in your toolbox.
					contents: [{
							kind: 'block',
							type: 'controls_if'
						},
						{
							kind: 'block',
							type: 'controls_whileUntil'
						}
						// You can add more blocks to this array.
					]
				};

				// The toolbox gets passed to the configuration struct during injection.
				const workspace = Blockly.inject('blocklyDiv', {
					toolbox: toolbox
				});
			})
		},
	};
</script>
<style lang="scss" scoped>

</style>