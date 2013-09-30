var jconf=confirm('Have you scrolled to the end of results?');
if (jconf) {
var jexp=/(s|p)\d\d\dx\d\d\d\//g,jpic="";
document.body.innerHTML=document.body.innerHTML + "<textarea id='jresu' style='display:none;position:fixed;top:100px;width:50%;height:200px;z-index:2;' onmouseover='this.focus();this.select();'></textarea>";
var jelem=document.querySelectorAll('[data-bt*="ct"][data-bt*="result"]');
for (var j=0; j<jelem.length; j++) {
	document.getElementById('jresu').innerHTML=document.getElementById('jresu').innerHTML + "\n" + jelem[j].src.replace(jexp, '').replace('https','http');
}
document.getElementById('jresu').style.display='block';
document.getElementById('jresu').focus();
document.getElementById('jresu').select();
}