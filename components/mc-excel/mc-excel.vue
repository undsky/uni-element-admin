<template>
	<div id="luckysheet"
		style="position:absolute;width:100%;height:100%;margin:0px;padding:0px;left:0px;top:0px;right:0px;bottom:0px;">
	</div>
</template>

<script>
	export default {
		name: 'mc-excel',
		props: {

		},
		data() {
			return {

			}

		},
		mounted() {
			this.$nextTick(() => {
				$(() => {
					luckysheet.create({
						container: 'luckysheet',
						lang: 'zh',
						showinfobar: false
					});
				});

			});
		},
		methods: {
			importExcel(file) {
				const suffixArr = file.name.split("."),
					suffix = suffixArr[suffixArr.length - 1];
				if (suffix != "xlsx") {
					alert("Currently only supports the import of xlsx files");
					return;
				}
				LuckyExcel.transformExcelToLucky(file, function(exportJson, luckysheetfile) {
					if (exportJson.sheets == null || exportJson.sheets.length == 0) {
						alert("Currently only supports the import of xlsx files");
						return;
					}
					window.luckysheet.destroy();

					window.luckysheet.create({
						container: 'luckysheet',
						showinfobar: false,
						data: exportJson.sheets,
						title: exportJson.info.name,
						userInfo: exportJson.info.name.creator
					});
				});
			},
			downloadExcel() {
				const value = this.selected;;

				if (value.length == 0) {
					alert("Please select a demo file");
					return;
				}

				const elemIF = document.getElementById("Lucky-download-frame");
				if (elemIF == null) {
					elemIF = document.createElement("iframe");
					elemIF.style.display = "none";
					elemIF.id = "Lucky-download-frame";
					document.body.appendChild(elemIF);
				}
				elemIF.src = value;
			}

		}
	}
</script>

<style>

</style>
