var exp1=/var\sFilename\s=\s\"\w+\.\w+/g, count=0, container=[], result='', curr, curr2;
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}
function parse(data) {
	curr=data.match(exp1);
	for (var i=0;i<curr.length;i++) {
		curr2=curr[i].replace('var Filename = "','');
		if (container.indexOf(curr2)<0) {
			container.push(curr2);
			jQuery('#resu').append("http://aerodrive.ccsc.edu.hk/myoffice/handle/guest" + getURLParameter('target') + "/" + curr2 + "\n");
		}
	}
}
jQuery('body').append("<textarea id='resu' style='display:none;position:fixed;top:100px;width:50%;height:200px;z-index:2;' onmouseover='this.focus();this.select();'></textarea>");
parse(jQuery('body').html());
jQuery('.netvigate').each(function() {
	jQuery.get(jQuery(this).attr('href'), function(data) {
		parse(data);
		count++;
		if (count == jQuery('.netvigate').length) {jQuery('#resu').css('display','block');}
	});
});