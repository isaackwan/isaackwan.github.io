var exp1=/var\sFilename\s=\s\"\w+\.\w+/g, container=[], result='', curr, curr2;
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
			result = result + "<br>http://aerodrive.ccsc.edu.hk/myoffice/handle/guest" + getURLParameter('target') + "/" + curr2;
		}
	}
}
jQuery('.netvigate').each(function() {
	jQuery.get(jQuery(this).attr('href'), function(data) {
		parse(data);
	});
});
parse(jQuery('body').html());
jQuery('body').html(result);