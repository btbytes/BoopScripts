/**
	{
		"api":1,
		"name":"Human Size Bytes",
		"description":"Given file size in numbes, express it in MB, GB",
		"author":"btbytes",
		"icon":"dice",
		"tags":"utility"
	}
**/


// Source: https://stackoverflow.com/a/18650828
function formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}


function main(input) {
	input.text = formatBytes(input.text);
}
