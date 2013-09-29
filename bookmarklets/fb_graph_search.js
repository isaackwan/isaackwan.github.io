$.noConflict();
var jexp=/(s|p)\d\d\dx\d\d\d\//g,jpic="";
jQuery('body').append("<textarea id='jresu' style='display:none;position:fixed;top:100px;width:50%;height:200px;z-index:2;' onmouseover='this.focus();this.select();'></textarea>");
jQuery('[data-bt="{\"ct\":\"result\"}"]').each(function() {jQuery('#jresu').append("\n"+jQuery(this).attr('src').replace(jexp, ''));});
jQuery('#jresu').css('display','block');