//Legend mod Sniff2 by jimboy3100
//v2.8c
/*
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://legendmod.ml/banners/icon32croped.ico.gif';
    document.getElementsByTagName('head')[0].appendChild(link);
})();


document.title = "LM express";   
setTimeout(function () {
document.title = "LM express";   
}, 700);
setTimeout(function () {
document.title = "LM express";   
}, 1300);
setTimeout(function () {
document.title = "LM express";   
}, 1500);
*/
setTimeout(function () {
$(".agario-profile-name").css('vertical-align', '');
}, 6000);




//3. User Scripts
var Userscript1;
var Userscript2;
var Userscript3;
var Userscript4;
var Userscript5;
var Userscripttext11;
var Userscripttext12;
var Userscripttext13;
var Userscripttext14;
var Userscripttext15;
var Userscripttexture1;
var Userscripttexture2;
var Userscripttexture3;
var Userscripttexture4;
var Userscripttexture5;
setTimeout(function () {
	

/*
$("#main-menu").hide();
$("#skins-panel").hide();
$("#quick-menu").hide();
$("#exp-bar").hide();
$("#userscripts").show();
*/

var Externalletter6;
var Externalletter7;
var Externalletter8;
var Externalletter9;
var Externalletter10;
var Externalletter11;
var Externalletter12;
var Externalletter13;

if(Externalletter6==null){Externalletter6 = "Paste your Script in this Textarea, you can load multiple Scripts";}
if(Externalletter7==null){Externalletter7 = "Load Script from Textarea";}
if(Externalletter8==null){Externalletter8 = "Choose";}
if(Externalletter9==null){Externalletter9 = "Erase Script";}
if(Externalletter10==null){Externalletter10 = "Name";}
if(Externalletter11==null){Externalletter11 = "Url of Raw Github, or other Raw Script, starting with";}
if(Externalletter12==null){Externalletter12 = "Leave this empty if script not imported from URL";}
if(Externalletter13==null){Externalletter13 = "IMPORTANT NOTICE: Do not keep URLs which do not work, because they are used as onload events. If Scenario damages onload events, then DELETE COOKIES";}


$("#menu-footer").after('<div id="userscripts" style="background-image: url('+legbgpic+'); background-color: '+legbgcolor+'; border: 1px solid black; height: 600px; width: 600px; ";>'+
	'<div id="Userscriptshud" style="display:block; margin-left: 10px; margin-right: 10px;">'+ //margin-left: 10px"
	'<div id="Userscriptshud2" align="middle"><h5 class="main-color">USER SCRIPTS</h5>'+
	
	'<p id="userscripter1" style="color:white; font-size:12px";" align="middle">'+Externalletter6+'</p>'+
	
	
   '<textarea id="Userscripttexture1" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: block;"></textarea>'+
   '<textarea id="Userscripttexture2" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
   '<textarea id="Userscripttexture3" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
   '<textarea id="Userscripttexture4" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
   '<textarea id="Userscripttexture5" class="form-control ps-container ps-theme-default" rows="14" cols="100" spellcheck="false" align="middle" style="display: none;"></textarea>'+
	'<button id="userscriptBtn1" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: block;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn2" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn3" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn4" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	'<button id="userscriptBtn5" type="button" class="btn btn-block btn-info" data-toggle="button" aria-pressed="false" autocomplete="off" style="margin-top: 2px; display: none;"><i class="fa fa-code"></i>'+Externalletter7+'</button>'+
	
		'<br>'+
											'<div class="input-box" style=" color:white; font-size:12px";" text-align: center; font-size: 12px; margin-top: 4px; padding: 4px 0 6px 0;"><span id="userscriptpages" class="title" style="">'+Externalletter8+' User Script:  </span>' +
											'<select id="Userscriptpages3" class="form-control" onchange="userscriptpages();" required="" data-original-title="" title="" style="display:inline; width: 40%" >' +
											'<option value="1" data-itr="">User Script 1</option>' +
											'<option value="2" data-itr="">User Script 2</option>' +
											'<option value="3" data-itr="">User Script 3</option>' +
											'<option value="4" data-itr="">User Script 4</option>' +
											'<option value="5" data-itr="">User Script 5</option>' +
											'</select>' +
											'<button id="EraseScripter" align="left" onclick="erasescripter(); return false" class="btn btn-primary btn" data-itr="page_login_and_play" data-original-title="" title="" style="display:inline; margin-top: -4px; margin-left: 60px; width: 30%; ">'+Externalletter9+'</button>' +
											'<input id="UserscripttextA" class="form-control" placeholder="User Script 1 '+Externalletter10+'" value="" style="margin-top: 2px; display: block;" onblur="Userscripttext11();" >' +
											
											'<input id="UserscripttextB" class="form-control" placeholder="User Script 2 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext12();"  >' +
											'<input id="UserscripttextC" class="form-control" placeholder="User Script 3 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext13();"  >' +						
											'<input id="UserscripttextD" class="form-control" placeholder="User Script 4 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext14();"  >' +
											'<input id="UserscripttextE" class="form-control" placeholder="User Script 5 '+Externalletter10+'" value="" style="margin-top: 2px; display: none;" onblur="Userscripttext15();"  >' +	
											'<input id="UserscriptA" class="form-control" placeholder="User Script 1 .js URL ('+Externalletter12+')" text="Url 1" style="margin-top: 2px; display: block;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +	
											'<input id="UserscriptB" class="form-control" placeholder="User Script 2 .js URL ('+Externalletter12+')" text="Url 2" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +		
											'<input id="UserscriptC" class="form-control" placeholder="User Script 3 .js URL ('+Externalletter12+')" text="Url 3" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +		
											'<input id="UserscriptD" class="form-control" placeholder="User Script 4 .js URL ('+Externalletter12+')" text="Url 4" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +		
											'<input id="UserscriptE" class="form-control" placeholder="User Script 5 .js URL ('+Externalletter12+')" text="Url 5" style="margin-top: 2px; display: none;" " data-toggle="tooltip" data-placement="top" data-original-title="'+Externalletter11+' http://... or https://..." >' +												
											'</div>' +	
											'<p id="userscripter2" style="color:white; font-size:12px";" align="middle">'+Externalletter13+': <u>chrome://settings/clearBrowserData</u></p>'+											
											'</div>'+
											'</div>');
$("#Userscriptshud").after('<button id="Backtomenu" onclick="closeuserscripts(); return false" class="btn btn-danger" style="margin-left: 10px;" data-itr="page_login_and_play" data-original-title="" title="">Close</button>');


$("#userscripts").hide();
	






$('#UserscriptA').blur(function(){
if ($("#UserscriptA").val()!=""){
Userscript1=$("#UserscriptA").val();localStorage.setItem("Userscript1", Userscript1);
$("#Userscripttexture1").load(Userscript1);setTimeout(function () {$("#userscriptBtn1").click(); }, 300); }return false;});
$('#UserscriptB').blur(function(){
if ($("#UserscriptB").val()!=""){
Userscript2=$("#UserscriptB").val();localStorage.setItem("Userscript2", Userscript2);
$("#Userscripttexture2").load(Userscript2);setTimeout(function () {$("#userscriptBtn2").click(); }, 400); }return false;});
$('#UserscriptC').blur(function(){
if ($("#UserscriptC").val()!=""){
Userscript3=$("#UserscriptC").val();localStorage.setItem("Userscript3", Userscript3);
$("#Userscripttexture3").load(Userscript3);setTimeout(function () {$("#userscriptBtn3").click(); }, 500); }return false;});
$('#UserscriptD').blur(function(){
if ($("#UserscriptD").val()!=""){
Userscript4=$("#UserscriptD").val();localStorage.setItem("Userscript4", Userscript4);
$("#Userscripttexture4").load(Userscript4);setTimeout(function () {$("#userscriptBtn4").click(); }, 600); }return false;});
$('#UserscriptE').blur(function(){
if ($("#UserscriptE").val()!=""){
Userscript5=$("#UserscriptE").val();localStorage.setItem("Userscript5", Userscript5);
$("#Userscripttexture5").load(Userscript5);setTimeout(function () {$("#userscriptBtn5").click(); }, 700); }return false;});

$("#Userscripttexture1").blur(function(){
if ($("#Userscripttexture1").val()!=""){Userscripttexture1=$("#Userscripttexture1").val();localStorage.setItem("Userscripttexture1", Userscripttexture1);}});	
$("#Userscripttexture2").blur(function(){
if ($("#Userscripttexture2").val()!=""){Userscripttexture2=$("#Userscripttexture2").val();localStorage.setItem("Userscripttexture2", Userscripttexture2);}});	
$("#Userscripttexture3").blur(function(){
if ($("#Userscripttexture3").val()!=""){Userscripttexture3=$("#Userscripttexture3").val();localStorage.setItem("Userscripttexture3", Userscripttexture3);}});	
$("#Userscripttexture4").blur(function(){
if ($("#Userscripttexture4").val()!=""){Userscripttexture4=$("#Userscripttexture4").val();localStorage.setItem("Userscripttexture4", Userscripttexture4);}});	
$("#Userscripttexture5").blur(function(){
if ($("#Userscripttexture5").val()!=""){Userscripttexture5=$("#Userscripttexture5").val();localStorage.setItem("Userscripttexture5", Userscripttexture5);}});	
	




$("#userscriptBtn1").click(function() {
	var sUser1 = document.createElement("script");sUser1.type = "text/javascript"; sUser1.text=$("#Userscripttexture1").val(); $("head").append(sUser1);});
$("#userscriptBtn2").click(function() {
	var sUser2 = document.createElement("script");sUser2.type = "text/javascript"; sUser2.text=$("#Userscripttexture2").val(); $("head").append(sUser2);});
$("#userscriptBtn3").click(function() {
	var sUser3 = document.createElement("script");sUser3.type = "text/javascript"; sUser3.text=$("#Userscripttexture3").val(); $("head").append(sUser3);});
$("#userscriptBtn4").click(function() {
	var sUser4 = document.createElement("script");sUser4.type = "text/javascript"; sUser4.text=$("#Userscripttexture4").val(); $("head").append(sUser4);});
$("#userscriptBtn5").click(function() {
	var sUser5 = document.createElement("script");sUser5.type = "text/javascript"; sUser5.text=$("#Userscripttexture5").val(); $("head").append(sUser5);});


	document.getElementById("UserscripttextA").value =localStorage.getItem("Userscripttext11");
	document.getElementById("UserscripttextB").value =localStorage.getItem("Userscripttext12");
	document.getElementById("UserscripttextC").value =localStorage.getItem("Userscripttext13");
	document.getElementById("UserscripttextD").value =localStorage.getItem("Userscripttext14");
	document.getElementById("UserscripttextE").value =localStorage.getItem("Userscripttext15");

	$('#UserscriptA').val(localStorage.getItem("Userscript1"));
	if($('#UserscriptA').val()!=""){$('#UserscriptA').blur();}
	else if($('#UserscriptA').val()==""){document.getElementById("Userscripttexture1").value =localStorage.getItem("Userscripttexture1");setTimeout(function () {$("#userscriptBtn1").click(); }, 100);}
	$('#UserscriptB').val(localStorage.getItem("Userscript2"));
	if($('#UserscriptB').val()!=""){$('#UserscriptB').blur();}
	else if($('#UserscriptB').val()==""){document.getElementById("Userscripttexture2").value =localStorage.getItem("Userscripttexture2");setTimeout(function () {$("#userscriptBtn2").click(); }, 100);}
	$('#UserscriptC').val(localStorage.getItem("Userscript3"));
	if($('#UserscriptC').val()!=""){$('#UserscriptC').blur();}
	else if($('#UserscriptC').val()==""){document.getElementById("Userscripttexture3").value =localStorage.getItem("Userscripttexture3");setTimeout(function () {$("#userscriptBtn3").click(); }, 100);}
	$('#UserscriptD').val(localStorage.getItem("Userscript4"));
	if($('#UserscriptD').val()!=""){$('#UserscriptD').blur();}
	else if($('#UserscriptD').val()==""){document.getElementById("Userscripttexture4").value =localStorage.getItem("Userscripttexture4");setTimeout(function () {$("#userscriptBtn4").click(); }, 100);}
	$('#UserscriptE').val(localStorage.getItem("Userscript5"));
	if($('#UserscriptE').val()!=""){$('#UserscriptE').blur();}
	else if($('#UserscriptE').val()==""){document.getElementById("Userscripttexture5").value =localStorage.getItem("Userscripttexture5");setTimeout(function () {$("#userscriptBtn5").click(); }, 100);}

	datatooltipfix();
}, 5000);

function Userscripttext11(){ Userscripttext11=$("#UserscripttextA").val();localStorage.setItem("Userscripttext11", Userscripttext11);
if (Userscripttext11!=""){$('#Userscriptpages3>option:nth-child(1)').text(Userscripttext11);}}
function Userscripttext12(){ Userscripttext12=$("#UserscripttextB").val();localStorage.setItem("Userscripttext12", Userscripttext12);
if (Userscripttext12!=""){$('#Userscriptpages3>option:nth-child(2)').text(Userscripttext12);}}
function Userscripttext13(){ Userscripttext13=$("#UserscripttextC").val();localStorage.setItem("Userscripttext13", Userscripttext13);
if (Userscripttext13!=""){$('#Userscriptpages3>option:nth-child(3)').text(Userscripttext13);}}
function Userscripttext14(){ Userscripttext14=$("#UserscripttextD").val();localStorage.setItem("Userscripttext14", Userscripttext14);
if (Userscripttext14!=""){$('#Userscriptpages3>option:nth-child(4)').text(Userscripttext14);}}
function Userscripttext15(){ Userscripttext15=$("#UserscripttextE").val();localStorage.setItem("Userscripttext15", Userscripttext15);
if (Userscripttext15!=""){$('#Userscriptpages3>option:nth-child(5)').text(Userscripttext15);}}

function closeuserscripts(){
$("#main-menu").show();	
$("#skins-panel").show();
$("#quick-menu").show();
$("#exp-bar").show();
$("#userscripts").hide();
}

function userscriptpages(){
	$("#UserscriptA").hide();
	$("#UserscriptB").hide();
	$("#UserscriptC").hide();
	$("#UserscriptD").hide();
	$("#UserscriptE").hide();
	$("#UserscripttextA").hide();
	$("#UserscripttextB").hide();
	$("#UserscripttextC").hide();
	$("#UserscripttextD").hide();
	$("#UserscripttextE").hide();
	$("#Userscripttexture1").hide();
	$("#Userscripttexture2").hide();
	$("#Userscripttexture3").hide();
	$("#Userscripttexture4").hide();
	$("#Userscripttexture5").hide();
	$("#userscriptBtn1").hide();
	$("#userscriptBtn2").hide();
	$("#userscriptBtn3").hide();
	$("#userscriptBtn4").hide();
	$("#userscriptBtn5").hide();
		if ($("#Userscriptpages3").val()==1){
			$("#UserscriptA").show();
			$("#UserscripttextA").show();
			$("#Userscripttexture1").show();
			$("#userscriptBtn1").show();
		}
		if ($("#Userscriptpages3").val()==2){
			$("#UserscriptB").show();
			$("#UserscripttextB").show();
			$("#Userscripttexture2").show();
			$("#userscriptBtn2").show();			
		}
		if ($("#Userscriptpages3").val()==3){
			$("#UserscriptC").show();
			$("#UserscripttextC").show();
			$("#Userscripttexture3").show();
			$("#userscriptBtn3").show();
		}
		if ($("#Userscriptpages3").val()==4){
			$("#UserscriptD").show();
			$("#UserscripttextD").show();
			$("#Userscripttexture4").show();
			$("#userscriptBtn4").show();
		}
		if ($("#Userscriptpages3").val()==5){
			$("#UserscriptE").show();
			$("#UserscripttextE").show();
			$("#Userscripttexture5").show();
			$("#userscriptBtn5").show();
		}		
}

function erasescripter(){
	if ($("#Userscriptpages3").val()==1){
		$("#Userscripttexture1").val(""); localStorage.setItem("Userscripttexture1", ""); $('#Userscriptpages3>option:nth-child(1)').text("User Script 1"); $("#UserscripttextA").val(""); localStorage.setItem("Userscripttext11", ""); $("#UserscriptA").val(""); localStorage.setItem("Userscript1", "");}
	if ($("#Userscriptpages3").val()==2){
		$("#Userscripttexture2").val(""); localStorage.setItem("Userscripttexture2", ""); $('#Userscriptpages3>option:nth-child(2)').text("User Script 2"); $("#UserscripttextB").val(""); localStorage.setItem("Userscripttext12", ""); $("#UserscriptB").val(""); localStorage.setItem("Userscript2", "");}
	if ($("#Userscriptpages3").val()==3){
		$("#Userscripttexture3").val(""); localStorage.setItem("Userscripttexture3", ""); $('#Userscriptpages3>option:nth-child(3)').text("User Script 3"); $("#UserscripttextC").val(""); localStorage.setItem("Userscripttext13", ""); $("#UserscriptC").val(""); localStorage.setItem("Userscript3", "");}
	if ($("#Userscriptpages3").val()==4){
		$("#Userscripttexture4").val(""); localStorage.setItem("Userscripttexture4", ""); $('#Userscriptpages3>option:nth-child(4)').text("User Script 4"); $("#UserscripttextD").val(""); localStorage.setItem("Userscripttext14", ""); $("#UserscriptD").val(""); localStorage.setItem("Userscript4", "");}
	if ($("#Userscriptpages3").val()==5){
		$("#Userscripttexture5").val(""); localStorage.setItem("Userscripttexture5", ""); $('#Userscriptpages3>option:nth-child(5)').text("User Script 5"); $("#UserscripttextE").val(""); localStorage.setItem("Userscripttext15", ""); $("#UserscriptE").val(""); localStorage.setItem("Userscript5", "");}
}


//4 Animated Skins

            animatedskins =      {
               'legend_clan': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'legend_clan',
                  color:     '000000',
                  frames:    [
                     {id: 'Jblhf6u', delay: '0.05'},
                     {id: 'MKWMUGH', delay: '0.05'},
                     {id: 'sqgLdwx', delay: '0.05'},
                     {id: 'hISPoCr', delay: '0.05'},
                     {id: '7KMHyrJ', delay: '0.05'},
                     {id: 'vXOvVrK', delay: '0.05'},
                     {id: 'YYJso45', delay: '0.05'},
                     {id: 'eZwxF0H', delay: '0.05'},
                     {id: 'i9OpvGV', delay: '0.05'},
                     {id: 'yMYGhYm', delay: '0.05'},
                     {id: 'C83DFlA', delay: '0.05'},
                     {id: 'C0ycMls', delay: '0.05'},
                     {id: 'HqrzUO6', delay: '0.05'},
                     {id: '5LplzG6', delay: '0.05'},
                     {id: 'taTPZGJ', delay: '0.05'},
                     {id: 'Lhqwoag', delay: '0.05'},
                     {id: 'qge7WG7', delay: '0.05'},
                     {id: 'YRxATuG', delay: '0.05'},
                     {id: 'OvUi7j9', delay: '0.05'},
                     {id: 'ZK1C8gV', delay: '0.05'}
                  ]
               },
               'Only_For_Shiro': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'Only_For_Shiro',
                  color:     '000000',
                  frames:    [
					{id: 'kFpfid4', delay: '0.2'},
					{id: 'DIJ4uqI', delay: '0.2'},
					{id: 'XyrN3j3', delay: '0.2'},
					{id: 'rcVCCaj', delay: '0.2'},
					{id: 'Q3v6jOj', delay: '0.2'},
					{id: 'kFpfid4', delay: '0.2'},
					{id: 'DIJ4uqI', delay: '0.2'},
					{id: 'XyrN3j3', delay: '0.2'},
					{id: 'rcVCCaj', delay: '0.2'},
					{id: 'Q3v6jOj', delay: '0.2'},
					{id: 'kFpfid4', delay: '0.2'},
					{id: 'DIJ4uqI', delay: '0.2'},
					{id: 'XyrN3j3', delay: '0.2'},
					{id: 'rcVCCaj', delay: '0.2'},
					{id: 'Q3v6jOj', delay: '0.2'}	
                  ]
               },	
               'Only_For_Shiro 1': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'Only_For_Shiro_1',
                  color:     '000000',
                  frames:    [
					{id: 'y5929jj', delay: '0.2'},
					{id: 'CUi6Wkg', delay: '0.2'},
					{id: 'JBKSWEE', delay: '0.2'},
					{id: 'raeqwRS', delay: '0.2'},
					{id: '0ZJHfQN', delay: '0.2'},
					{id: 'y5929jj', delay: '0.2'},
					{id: 'CUi6Wkg', delay: '0.2'},
					{id: 'JBKSWEE', delay: '0.2'},
					{id: 'raeqwRS', delay: '0.2'},
					{id: '0ZJHfQN', delay: '0.2'},
					{id: 'y5929jj', delay: '0.2'},
					{id: 'CUi6Wkg', delay: '0.2'},
					{id: 'JBKSWEE', delay: '0.2'},
					{id: 'raeqwRS', delay: '0.2'},
					{id: '0ZJHfQN', delay: '0.2'}
                  ]
               },	
               'Only_For_Shiro_2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'Only_For_Shiro_2',
                  color:     '000000',
				frames:    [
					{id: 'YIFZ3fz', delay: '0.05'},
					{id: '59ITYpA', delay: '0.05'},
					{id: 'RdbZCLN', delay: '0.05'},
					{id: 'bLVFaWu', delay: '0.05'},
					{id: 'TFH4YDE', delay: '0.05'},
					{id: 'HOR1wXA', delay: '0.05'},
					{id: 'd6v4LH8', delay: '0.05'},
					{id: 'FWP2qHC', delay: '0.05'},
					{id: 'JlY607K', delay: '0.05'},
					{id: 'lWLA4ws', delay: '0.05'},
					{id: '3Xhn69T', delay: '0.05'},
					{id: 'hbvjiqd', delay: '0.05'},
					{id: 'xFVvKtE', delay: '0.05'},
					{id: 'whnwN6L', delay: '0.05'},
					{id: 'JrluS8A', delay: '0.05'},
					{id: 'Lr0G8p4', delay: '0.05'},
					{id: 'vr7lBru', delay: '0.05'},
					{id: 'Tuca9u4', delay: '0.05'},
					{id: 'XtFlxzV', delay: '0.05'},
					{id: 'KesPql9', delay: '0.05'},
					{id: 'ru1h0AF', delay: '0.05'},
					{id: 'lCkmcpf', delay: '0.05'},
					{id: 'mCrTASZ', delay: '0.05'},
					{id: 'er1922g', delay: '0.05'},
					{id: 'NMBLYPh', delay: '0.05'},
					{id: 'LicHAPC', delay: '0.05'},
					{id: '6muVpBF', delay: '0.05'},
					{id: 'VaQi0Go', delay: '0.05'},
					{id: '7jIzroi', delay: '0.05'},
					{id: 't5LKuri', delay: '0.05'},
					{id: 'hDaCQPY', delay: '0.05'},
					{id: 'gvlvWRE', delay: '0.05'},
					{id: 'l5Anq3n', delay: '0.05'},
					{id: 'lXencv9', delay: '0.05'},
					{id: 'noZU5jk', delay: '0.05'},
					{id: 'E7OpH44', delay: '0.05'},
					{id: 'uv4Q7S9', delay: '0.05'},
					{id: '9cGX3D3', delay: '0.05'},
					{id: 'l49nmrG', delay: '0.05'},
					{id: 'GNQ4hcS', delay: '0.05'},
					{id: '2XEefHC', delay: '0.05'},
					{id: 'gHZ6QH5', delay: '0.05'},
					{id: 'lR6JkmL', delay: '0.05'},
					{id: 'WU4hdF6', delay: '0.05'},
					{id: 'ZzBMnqb', delay: '0.05'},
					{id: 'rRf8CcX', delay: '0.05'},
					{id: '8H1XW8I', delay: '0.05'},
					{id: '06U1D0W', delay: '0.05'},
					{id: 'aJl8Zi1', delay: '0.05'},
					{id: 'tkIlXxd', delay: '0.05'}
				]
               },	
               '℄🌀JustWatchProAnimation': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'Just_Watch_Pro',
                  color:     '000000',
				frames:    [
					{id: '8wnf4ad', delay: '0.05'},
					{id: 'q7rmJKf', delay: '0.05'},
					{id: 'DkWZlUN', delay: '0.05'},
					{id: '4B78v7b', delay: '0.05'},
					{id: 'ANbnLME', delay: '0.05'},
					{id: 'RfY2G8P', delay: '0.05'},
					{id: 'kCrwj49', delay: '0.05'},
					{id: 'g1NnDhc', delay: '0.05'},
					{id: 'vMeV1dZ', delay: '0.05'},
					{id: 'gTjAEGp', delay: '0.05'},
					{id: 'aUG1yTL', delay: '0.05'},
					{id: 'j0QqG8Z', delay: '0.05'},
					{id: 'WXhVRb1', delay: '0.05'},
					{id: 'OnSxPeH', delay: '0.05'},
					{id: '7LG6ZhF', delay: '0.05'},
					{id: 'kHN1fv5', delay: '0.05'},
				]				
               },			   
               'bomb': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bomb',
                  color:     '000000',
                  frames:    [
                     {id: 'lwneHCo', delay: '0.14'},
                     {id: 'JcOZgwb', delay: '0.14'},
                     {id: 'uwfoN9c', delay: '0.14'},
                     {id: 'IqRkRVc', delay: '0.14'},
                     {id: 'bObBbnl', delay: '0.14'},
                     {id: 'Wj1RsWf', delay: '0.14'},
                     {id: 'gjLfMcx', delay: '0.14'},
                     {id: 'I7DMQeY', delay: '0.14'},
                     {id: 'oGr1KKG', delay: '0.14'},
                     {id: 'twzFS5g', delay: '0.14'},
                     {id: 'T6er9yw', delay: '1'}
                  ]
               },
               'eye': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'eye',
                  color:     '838383',
                  frames:    [
                     {id: 'WBptNfR', delay: '1'},
                     {id: 'Ll7Y3Ek', delay: '0.15'},
                     {id: 'OIXeTfo', delay: '0.15'},
                     {id: 'htdrJ70', delay: '0.15'},
                     {id: 'FL7zYNe', delay: '0.15'},
                     {id: 'Wn1xhE8', delay: '0.15'},
                     {id: 'Pc7s79W', delay: '0.15'},
                     {id: 'sDJCsKD', delay: '0.15'}
                  ]
               },
               'blackhole': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'blackhole',
                  color:     '000000',
                  frames:    [
                     {id: 'gNeYD4y', delay: '0.12'},
                     {id: 'RWhq2m6', delay: '0.12'},
                     {id: 'Gzeutvv', delay: '0.12'},
                     {id: 'ZM5d6S7', delay: '0.12'},
                     {id: 'iP1LjJq', delay: '0.12'},
                     {id: '62GWoaP', delay: '0.12'},
                     {id: '71GSwyR', delay: '0.12'},
                     {id: 'w5b0kBu', delay: '0.12'}
                  ]
               },
               'shark': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'shark',
                  color:     '002C6C',
                  frames:    [
                     {id: 'WOnTrZc', delay: '0.15'},
                     {id: '7nVbAjo', delay: '0.15'},
                     {id: 'lhY26fT', delay: '0.15'},
                     {id: 'cVp2rVv', delay: '0.15'},
                     {id: 'lhY26fT', delay: '0.15'},
                     {id: '7nVbAjo', delay: '0.15'}
                  ]
               },
               'goldfish': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'goldfish',
                  color:     '002C6C',
                  frames:    [
                     {id: 'KgqoD2X', delay: '0.125'},
                     {id: 'Xz9rzlp', delay: '0.125'},
                     {id: 'zOb2Oqa', delay: '0.125'},
                     {id: '5i15TVe', delay: '0.125'},
                     {id: 'G3evzNO', delay: '0.125'},
                     {id: 'Bqhqqib', delay: '0.125'},
                     {id: 'i78XDTj', delay: '0.125'}
                  ]
               },
               'monster': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'monster',
                  color:     '7c0001',
                  frames:    [
                     {id: 't9Hjp1l', delay: '2'},
                     {id: 'LR7dsAT', delay: '0.12'},
                     {id: 'J8g1Kxh', delay: '0.12'},
                     {id: 'liKY8Ja', delay: '0.12'},
                     {id: 'KNR6AE6', delay: '0.12'},
                     {id: 'VOJGLCH', delay: '0.12'},
                     {id: 'KNR6AE6', delay: '0.12'},
                     {id: 'liKY8Ja', delay: '0.12'},
                     {id: 'J8g1Kxh', delay: '0.12'},
                     {id: 'LR7dsAT', delay: '0.12'}
                  ]
               },
               'crocodile': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'crocodile',
                  color:     '004F0F',
                  frames:    [
                     {id: 'Aa4bqa1', delay: '1'},
                     {id: 'nmaz62r', delay: '0.1'},
                     {id: 'RxBfX11', delay: '0.1'},
                     {id: 'KPKVF6u', delay: '0.1'},
                     {id: 'O4VjIno', delay: '0.1'},
                     {id: 'iYykA1K', delay: '0.1'},
                     {id: 'O4VjIno', delay: '0.1'},
                     {id: 'KPKVF6u', delay: '0.1'},
                     {id: 'RxBfX11', delay: '0.1'},
                     {id: 'nmaz62r', delay: '0.1'}
                  ]
               },
               'bowling': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bowling',
                  color:     '000000',
                  frames:    [
                     {id: '1D8FYOu', delay: '0.12'},
                     {id: 'ctMzkSb', delay: '0.12'},
                     {id: 'uo8KqtT', delay: '0.12'},
                     {id: 'lAxKG9C', delay: '0.12'},
                     {id: 'bizPEiq', delay: '0.12'},
                     {id: 'UzNGxgk', delay: '0.12'},
                     {id: 'NJHBqXt', delay: '0.12'},
                     {id: 'aC8vvpe', delay: '0.12'}
                  ]
               },
               'mouse': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mouse',
                  color:     '654217',
                  frames:    [
                     {id: 'IkAzcau', delay: '2'},
                     {id: 'ylmgRh2', delay: '0.1'},
                     {id: '0FgdFdL', delay: '0.1'},
                     {id: 'HccU8TO', delay: '0.1'},
                     {id: '0FgdFdL', delay: '0.1'},
                     {id: 'ylmgRh2', delay: '0.1'}
                  ]
               },
               'heart': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'heart',
                  color:     'AC0875',
                  frames:    [
                     {id: '2w48B0M', delay: '1'},
                     {id: 'cM2hLSt', delay: '0.12'},
                     {id: '0pfV9lu', delay: '0.12'},
                     {id: 'KxbFznI', delay: '0.12'},
                     {id: 'FhptVrD', delay: '0.12'},
                     {id: '9lJDoCK', delay: '0.12'},
                     {id: 'FhptVrD', delay: '0.12'},
                     {id: 'KxbFznI', delay: '0.12'},
                     {id: '0pfV9lu', delay: '0.12'},
                     {id: 'cM2hLSt', delay: '0.12'}
                  ]
               },
               'nuclear': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'nuclear',
                  color:     '654217',
                  frames:    [
                     {id: 'eDof29h', delay: '1.5'},
                     {id: 'zqqaUbO', delay: '1.5'}
                  ]
               },
               't-rex': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        't_rex',
                  color:     '7c0001',
                  frames:    [
                     {id: 'jeyvjUh', delay: '2'},
                     {id: 'eM38lQG', delay: '0.12'},
                     {id: 'jn7xfpf', delay: '0.12'},
                     {id: 'eM38lQG', delay: '0.12'}
                  ]
               },
               'zombie': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'zombie',
                  color:     '004F0F',
                  frames:    [
                     {id: 'uVqUXBN', delay: '3'},
                     {id: 'QclZjeR', delay: '0.1'},
                     {id: 'iXdYrD8', delay: '0.1'},
                     {id: 'vF0ZIcs', delay: '0.1'},
                     {id: 'iXdYrD8', delay: '0.1'},
                     {id: 'QclZjeR', delay: '0.1'}
                  ]
               },
               'lizard': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'lizard',
                  color:     'AC0875',
                  frames:    [
                     {id: 'ESMxT94', delay: '0.5'},
                     {id: 'cU5UMlY', delay: '0.1'},
                     {id: 'awtHLkg', delay: '0.1'},
                     {id: '9rdGdkz', delay: '0.1'}
                  ]
               },
               'raptor': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'raptor',
                  color:     '004F0F',
                  frames:    [
                     {id: 'dZbuOvZ', delay: '2'},
                     {id: 'HbK7yXt', delay: '0.1'},
                     {id: 'kRDldQ2', delay: '0.1'},
                     {id: 'wFPrb4A', delay: '0.1'},
                     {id: 'kRDldQ2', delay: '0.1'},
                     {id: 'HbK7yXt', delay: '0.1'}
                  ]
               },
               'seal': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'seal',
                  color:     '004F0F',
                  frames:    [
                     {id: 'y6O9oq6', delay: '2'},
                     {id: 'HgqK6mA', delay: '0.1'},
                     {id: 'Etk3dGT', delay: '0.1'},
                     {id: '2s2EykQ', delay: '0.1'},
                     {id: 'xs9PUYG', delay: '0.1'},
                     {id: 'j32x0NT', delay: '0.1'},
                     {id: 'xs9PUYG', delay: '0.1'},
                     {id: '2s2EykQ', delay: '0.1'},
                     {id: 'Etk3dGT', delay: '0.1'},
                     {id: 'HgqK6mA', delay: '0.1'}
                  ]
               },
               'pizza': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'pizza',
                  color:     '7c0001',
                  frames:    [
                     {id: 'SmfgnOa', delay: '2'},
                     {id: 'BD8B6wo', delay: '0.15'},
                     {id: 'Nv23NK1', delay: '0.15'},
                     {id: '2e1eNwR', delay: '0.15'},
                     {id: 'sKtjEXM', delay: '0.15'},
                     {id: 'UBEMJZs', delay: '0.15'},
                     {id: 'DLk0Xr7', delay: '0.15'},
                     {id: '7areUV1', delay: '0.15'},
                     {id: 'DLk0Xr7', delay: '0.15'},
                     {id: 'UBEMJZs', delay: '0.15'},
                     {id: 'sKtjEXM', delay: '0.15'},
                     {id: '2e1eNwR', delay: '0.15'},
                     {id: 'Nv23NK1', delay: '0.15'},
                     {id: 'BD8B6wo', delay: '0.15'}
                  ]
               },
               'brofist': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'brofist',
                  color:     '7c0001',
                  frames:    [
                     {id: 'ShcWYvU', delay: '0.1'},
                     {id: 'sTfxqoG', delay: '0.1'},
                     {id: '8vEo8Bu', delay: '0.1'},
                     {id: 'oZRIIqE', delay: '0.1'},
                     {id: 'AxqYXKo', delay: '0.1'},
                     {id: '7z65jUI', delay: '3'}
                  ]
               },
               'crazy': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'crazy',
                  color:     '7c0001',
                  frames:    [
                     {id: '6oMDz9m', delay: '0.1'},
                     {id: 'Z3DQpP4', delay: '0.1'},
                     {id: 'WPEnnWK', delay: '0.1'},
                     {id: 'gml6ud3', delay: '0.1'},
                     {id: '6hTV8AA', delay: '0.1'},
                     {id: 'IYcDRNc', delay: '0.1'},
                     {id: 'zYpx35t', delay: '3'},
                     {id: 'IYcDRNc', delay: '0.1'},
                     {id: '6hTV8AA', delay: '0.1'},
                     {id: 'gml6ud3', delay: '0.1'},
                     {id: 'WPEnnWK', delay: '0.1'},
                     {id: 'Z3DQpP4', delay: '0.1'}
                  ]
               },
               'baseball': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'baseball',
                  color:     '838383',
                  frames:    [
                     {id: 'TlffigR', delay: '0.09'},
                     {id: '5dxGVTq', delay: '0.09'}
                  ]
               },
               'cloud': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'cloud',
                  color:     '838383',
                  frames:    [
                     {id: 'rqYIfAQ', delay: '0.08'},
                     {id: 'haaANq1', delay: '0.08'},
                     {id: '5wcw4R3', delay: '0.08'},
                     {id: 'iCLv7Bb', delay: '0.08'},
                     {id: 'PSBWj5q', delay: '0.08'},
                     {id: 'Lcrh5Uj', delay: '0.08'},
                     {id: 'mWjua9q', delay: '0.08'},
                     {id: 'AD1dk6l', delay: '0.08'},
                     {id: 'fr9BnOD', delay: '2'}
                  ]
               },
               'snowman': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'snowman',
                  color:     '002C6C',
                  frames:    [
                     {id: 'fyIBJJo', delay: '0.08'},
                     {id: 'kQJz6SF', delay: '0.08'},
                     {id: 'iegAX3K', delay: '0.08'},
                     {id: 'lngWxxk', delay: '0.08'},
                     {id: 'GxhTGji', delay: '0.08'},
                     {id: 'lngWxxk', delay: '0.08'},
                     {id: 'iegAX3K', delay: '0.08'},
                     {id: 'kQJz6SF', delay: '0.08'}
                  ]
               },
               'bug': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bug',
                  color:     '7c0001',
                  frames:    [
                     {id: 'uxKmViA', delay: '2'},
                     {id: 'n1ncMvV', delay: '0.08'},
                     {id: '0mDiZyL', delay: '0.08'},
                     {id: 'ADKOOAB', delay: '0.08'},
                     {id: '72Z5GjJ', delay: '0.08'},
                     {id: 'ADKOOAB', delay: '0.08'},
                     {id: '0mDiZyL', delay: '0.08'},
                     {id: 'n1ncMvV', delay: '0.08'}
                  ]
               },
               'mushroom': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mushroom',
                  color:     '004F0F',
                  frames:    [
                     {id: '92FrA5N', delay: '0.1'},
                     {id: 'vbebU1q', delay: '0.1'},
                     {id: 'SrwCeQF', delay: '0.1'},
                     {id: 'jJAoWma', delay: '0.1'},
                     {id: 'gzkpCLW', delay: '0.1'}
                  ]
               },
               'ghost': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'ghost',
                  color:     '4E114E',
                  frames:    [
                     {id: 'kpT3MiF', delay: '0.08'},
                     {id: 'JiASOag', delay: '0.08'},
                     {id: 'IPrwKvq', delay: '0.08'},
                     {id: 'PHGZ1sP', delay: '0.08'},
                     {id: 'DbGkrD9', delay: '0.08'},
                     {id: 'PHGZ1sP', delay: '0.08'},
                     {id: 'IPrwKvq', delay: '0.08'},
                     {id: 'JiASOag', delay: '0.08'}
                  ]
               },
               'lol': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_lol',
                  color:     'cd5d22',
                  frames:    [
                     {id: 'SJlS8Rg', delay: '0.08'},
                     {id: 'AiICKZb', delay: '0.08'},
                     {id: '1iVfy8b', delay: '0.08'},
                     {id: 'hwPSr3s', delay: '0.08'},
                     {id: 'wpJophT', delay: '0.08'},
                     {id: 'W9oLhpz', delay: '0.08'},
                     {id: 'DexE8Kb', delay: '0.08'},
                     {id: '7ybaqXq', delay: '0.08'}
                  ]
               },
               'troll': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_troll',
                  color:     '7a0c0f',
                  frames:    [
                     {id: 'KxcI3j7', delay: '4'},
                     {id: 'aE1etcH', delay: '0.1'},
                     {id: 'ZA1rlQ0', delay: '0.1'},
                     {id: '8NUCHKe', delay: '0.1'},
                     {id: 'ZbeXIpc', delay: '0.1'},
                     {id: 'iQWIiAu', delay: '0.1'},
                     {id: 'ZbeXIpc', delay: '0.1'},
                     {id: '8NUCHKe', delay: '0.1'},
                     {id: 'ZA1rlQ0', delay: '0.1'},
                     {id: 'aE1etcH', delay: '0.1'}
                  ]
               },
               'starfish': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'starfish',
                  color:     'cf9b24',
                  frames:    [
                     {id: 'MGSsF4o', delay: '0.12'},
                     {id: 'gzt9cfR', delay: '0.12'},
                     {id: 'let5iCn', delay: '0.12'},
                     {id: 'jy0O4el', delay: '0.12'},
                     {id: 'ujIoMJj', delay: '0.12'},
                     {id: 'cjiaScB', delay: '0.12'},
                     {id: 'QLoOcDQ', delay: '0.12'},
                     {id: 'natZ9ad', delay: '0.12'}
                  ]
               },
               'mighty': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mighty',
                  color:     '095090',
                  frames:    [
                     {id: 'V5md28Q', delay: '0.08'},
                     {id: 'bCh5H2P', delay: '0.08'},
                     {id: 'B5EQdTb', delay: '0.08'},
                     {id: 'svrkPNc', delay: '0.08'},
                     {id: 'BtCgDPE', delay: '0.08'},
                     {id: '1xE6pAf', delay: '0.08'},
                     {id: 'BtCgDPE', delay: '0.08'},
                     {id: 'svrkPNc', delay: '0.08'},
                     {id: 'B5EQdTb', delay: '0.08'},
                     {id: 'bCh5H2P', delay: '0.08'}
                  ]
               },
               'bread': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bread',
                  color:     '593b3c',
                  frames:    [
                     {id: 'u49qoXZ', delay: '0.08'},
                     {id: 'mcRd3ld', delay: '0.08'},
                     {id: 'Pxovhai', delay: '0.08'},
                     {id: 'gHLB9y4', delay: '0.08'},
                     {id: '3Sepdpp', delay: '0.08'},
                     {id: 'zjgxKHM', delay: '0.08'},
                     {id: 'n6rglZu', delay: '0.08'},
                     {id: 'DLqYwpu', delay: '0.08'},
                     {id: 'nAqaRja', delay: '0.08'},
                     {id: 'DLqYwpu', delay: '0.08'},
                     {id: 'n6rglZu', delay: '0.08'},
                     {id: 'zjgxKHM', delay: '0.08'},
                     {id: '3Sepdpp', delay: '0.08'},
                     {id: 'gHLB9y4', delay: '0.08'},
                     {id: 'Pxovhai', delay: '0.08'},
                     {id: 'mcRd3ld', delay: '0.08'}
                  ]
               },
               'cia 2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'birthday_cia',
                  color:     '3a185c',
                  frames:    [
                     {id: 'x7pNXov', delay: '0.12'},
                     {id: 'O2cAr4y', delay: '0.12'}
                  ]
               },
               'cactus': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'cactus',
                  color:     'a20947',
                  frames:    [
                     {id: 'GPI5CyD', delay: '0.08'},
                     {id: 'WTv6YOT', delay: '0.08'},
                     {id: 'Eiuz71P', delay: '0.08'},
                     {id: 'QPN1cYs', delay: '0.08'},
                     {id: 'Eiuz71P', delay: '0.08'},
                     {id: 'WTv6YOT', delay: '0.08'}
                  ]
               },
               'tennis': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'tennist',
                  color:     'cb1778',
                  frames:    [
                     {id: 'juVHtpb', delay: '0.12'},
                     {id: 'vrxQoUF', delay: '0.12'},
                     {id: 'azYvvQm', delay: '0.12'},
                     {id: 'vrxQoUF', delay: '0.12'}
                  ]
               },
               'duck target': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'duck_target',
                  color:     '000000',
                  frames:    [
                     {id: '6gfYVC7', delay: '0.1'},
                     {id: 'lFP4blK', delay: '0.1'},
                     {id: 'LZhQQkH', delay: '0.1'},
                     {id: '1JnabLw', delay: '0.1'},
                     {id: '5fLXTUd', delay: '0.1'},
                     {id: '1JnabLw', delay: '0.1'},
                     {id: 'LZhQQkH', delay: '0.1'},
                     {id: 'lFP4blK', delay: '0.1'}
                  ]
               },
               'wicked_cat': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'wicked_cat',
                  color:     '420000',
                  frames:    [
                     {id: 'QGFmJTG', delay: '3'},
                     {id: 'tU1RYvT', delay: '0.1'},
                     {id: '9Ol2gEw', delay: '0.1'},
                     {id: 'KQGngCg', delay: '1'},
                     {id: '9Ol2gEw', delay: '0.1'},
                     {id: 'tU1RYvT', delay: '0.1'}
                  ]
               },
               'reindeer': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'reindeer',
                  color:     '1a4534',
                  frames:    [
                     {id: 'GmH7K9m', delay: '0.08'},
                     {id: 'LRpx88I', delay: '0.08'},
                     {id: 'ZZXg3kj', delay: '0.08'},
                     {id: '9klVKAq', delay: '0.08'},
                     {id: 'CBb1Qpg', delay: '0.08'},
                     {id: 'YL6sv38', delay: '0.08'},
                     {id: 'DUp7Ph2', delay: '0.08'},
                     {id: 'YL6sv38', delay: '0.08'},
                     {id: 'CBb1Qpg', delay: '0.08'},
                     {id: '9klVKAq', delay: '0.08'},
                     {id: 'ZZXg3kj', delay: '0.08'},
                     {id: 'LRpx88I', delay: '0.08'}
                  ]
               },
               'charmander': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'charmander',
                  color:     'd26900',
                  frames:    [
                     {id: '1z01PqG', delay: '4'},
                     {id: '36yUxT1', delay: '0.1'},
                     {id: 'f8YUHIM', delay: '0.1'},
                     {id: 'ULtQFXw', delay: '0.1'},
                     {id: 'CLnrlQD', delay: '0.1'},
                     {id: 'YZZfnvR', delay: '0.1'},
                     {id: 'CLnrlQD', delay: '0.1'},
                     {id: 'ULtQFXw', delay: '0.1'},
                     {id: 'f8YUHIM', delay: '0.1'},
                     {id: '36yUxT1', delay: '0.1'}
                  ]
               },
               'bulbasaur': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'bulbasaur',
                  color:     '37973c',
                  frames:    [
                     {id: 'A3TMFs5', delay: '4'},
                     {id: 'agRaNfC', delay: '0.1'},
                     {id: 'co5VkgO', delay: '0.1'},
                     {id: 'PiOFxRV', delay: '0.1'},
                     {id: 'xGmgf1p', delay: '0.1'},
                     {id: 'qjS12LB', delay: '0.1'},
                     {id: 'xGmgf1p', delay: '0.1'},
                     {id: 'PiOFxRV', delay: '0.1'},
                     {id: 'co5VkgO', delay: '0.1'},
                     {id: 'agRaNfC', delay: '0.1'}
                  ]
               },
               'squirtle': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'squirtle',
                  color:     '438be8',
                  frames:    [
                     {id: 'ntVuoKU', delay: '0.1'},
                     {id: 'bfgrQtI', delay: '0.1'},
                     {id: 'gGFq1VU', delay: '0.1'},
                     {id: '8BSCCvP', delay: '0.1'},
                     {id: '04TFtfI', delay: '0.1'},
                     {id: 'swbm5bR', delay: '0.1'},
                     {id: '04TFtfI', delay: '0.1'},
                     {id: '8BSCCvP', delay: '0.1'},
                     {id: 'gGFq1VU', delay: '0.1'},
                     {id: 'bfgrQtI', delay: '0.1'}
                  ]
               },
               'jumbo': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'jumbo_yt',
                  color:     '00560f',
                  frames:    [
                     {id: 'mlgXaGZ', delay: '0.09'},
                     {id: 'WC1eIre', delay: '0.09'},
                     {id: 'byJnguv', delay: '0.09'},
                     {id: 'EHYn8GJ', delay: '0.09'},
                     {id: 'rW33rqf', delay: '0.09'},
                     {id: 'FbijFRY', delay: '0.09'}
                  ]
               },
               'tyt': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'tyt_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'rUbIMQY', delay: '0.09'},
                     {id: 'ODW4Omn', delay: '0.09'},
                     {id: 'EtFMPm8', delay: '0.09'},
                     {id: 'IKcPprq', delay: '0.09'},
                     {id: 'Xjs9LX2', delay: '0.09'},
                     {id: 'pmfcfuz', delay: '0.09'},
                     {id: 'nXdt3ce', delay: '0.09'},
                     {id: 'd6VzSKD', delay: '0.09'},
                     {id: 'yobj44p', delay: '0.09'},
                     {id: 'BF2p3tm', delay: '0.09'},
                     {id: 'v5aHQzC', delay: '0.09'},
                     {id: 'K61nFgp', delay: '0.09'},
                     {id: 'jhMkOkA', delay: '0.09'},
                     {id: 'ebRUvat', delay: '0.09'},
                     {id: 'bWezvmS', delay: '0.09'},
                     {id: 'XYqrXYY', delay: '0.09'}
                  ]
               },
               'hero': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'hero_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'x0NKSI4', delay: '0.08'},
                     {id: 'OBRZfoQ', delay: '0.08'},
                     {id: 'mFBvHSN', delay: '0.08'},
                     {id: 'A4JskwY', delay: '0.08'},
                     {id: 'FNCLnk5', delay: '0.08'},
                     {id: 'W9QHmJU', delay: '0.08'},
                     {id: 'psnaqN4', delay: '0.08'},
                     {id: 'Yz9XVXN', delay: '0.08'},
                     {id: 'Thu6tTT', delay: '0.08'},
                     {id: 'K0yv7TU', delay: '0.08'},
                     {id: 'ineJWic', delay: '0.08'},
                     {id: 'q8emY2S', delay: '0.08'},
                     {id: 'P5Vq8tU', delay: '0.08'}
                  ]
               },
               'tigar': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'tigar_yt',
                  color:     'e67414',
                  frames:    [
                     {id: 'GCOReOG', delay: '2'},
                     {id: 'dhoZlbU', delay: '0.08'},
                     {id: 'ImMf8to', delay: '0.08'},
                     {id: 'vjVwwl0', delay: '0.08'},
                     {id: 'JIwHHfL', delay: '0.08'},
                     {id: 'HyGPKp6', delay: '0.08'},
                     {id: 'vMyMaiK', delay: '0.08'},
                     {id: 'r3awDWP', delay: '0.08'},
                     {id: 'ibW0OQu', delay: '0.08'},
                     {id: '61cj4ur', delay: '0.08'}
                  ]
               },
               'mau': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'mau_yt',
                  color:     '49bef3',
                  frames:    [
                     {id: 'dKay0Ky', delay: '3'},
                     {id: 'RcPm75A', delay: '0.08'},
                     {id: '68Y0H7A', delay: '0.08'},
                     {id: 'xuoVdBS', delay: '0.08'},
                     {id: 'rI9wFYS', delay: '0.08'},
                     {id: 'B8gsy1j', delay: '0.08'},
                     {id: '4ZBOW12', delay: '0.08'},
                     {id: 'QuMiddk', delay: '0.08'},
                     {id: 'XQnaeAO', delay: '0.08'},
                     {id: 'rQQDAH7', delay: '0.08'}
                  ]
               },
               'n0psa': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'n0psa_yt',
                  color:     'f6c803',
                  frames:    [
                     {id: 'hdvTwFa', delay: '1'},
                     {id: 'fwL1V1X', delay: '0.08'},
                     {id: 'WByRLZS', delay: '0.08'},
                     {id: 'YUL6OBd', delay: '0.08'},
                     {id: 'hzWo2HH', delay: '0.08'},
                     {id: '5VO5KiR', delay: '5'},
                     {id: 'hzWo2HH', delay: '0.08'},
                     {id: 'YUL6OBd', delay: '0.08'},
                     {id: 'WByRLZS', delay: '0.08'},
                     {id: 'fwL1V1X', delay: '0.08'}
                  ]
               },
               'planet': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'planet_yt',
                  color:     '565656',
                  frames:    [
                     {id: 'cedz7ps', delay: '0.08'},
                     {id: 'AkqsdQo', delay: '0.08'},
                     {id: 'FFHr4Y2', delay: '0.08'},
                     {id: '9AjZP6A', delay: '0.08'},
                     {id: '6CdbOo3', delay: '0.08'},
                     {id: 'uqc3xM9', delay: '0.08'},
                     {id: 'B2zmk0N', delay: '0.08'},
                     {id: 'mVCN9FP', delay: '0.08'},
                     {id: 'ymNStZ4', delay: '0.08'},
                     {id: 'OIT8rgw', delay: '0.08'},
                     {id: 'ymNStZ4', delay: '0.08'},
                     {id: 'mVCN9FP', delay: '0.08'},
                     {id: 'B2zmk0N', delay: '0.08'},
                     {id: 'uqc3xM9', delay: '0.08'},
                     {id: '6CdbOo3', delay: '0.08'},
                     {id: '9AjZP6A', delay: '0.08'},
                     {id: 'FFHr4Y2', delay: '0.08'},
                     {id: 'AkqsdQo', delay: '0.08'}
                  ]
               },
               'agarpros': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'agarpros_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'TBIlCYb', delay: '4'},
                     {id: 'NFXeciX', delay: '0.06'},
                     {id: 'tVJ1fru', delay: '0.06'},
                     {id: 'xOFUJtD', delay: '0.06'},
                     {id: 'POhhdVh', delay: '0.06'},
                     {id: 'mV17fbS', delay: '0.06'},
                     {id: 'G3lUEyj', delay: '0.06'},
                     {id: 'G4jxjM9', delay: '0.06'},
                     {id: 'WQA1R3N', delay: '0.06'}
                  ]
               },
               'wunwun': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'wunwun_yt',
                  color:     'cfb53b',
                  frames:    [
                     {id: 'HAgGIlS', delay: '0.08'},
                     {id: '2jEiLOq', delay: '0.08'},
                     {id: 'YyavcPR', delay: '0.08'},
                     {id: 'QRddsHF', delay: '0.08'},
                     {id: 's97xn1X', delay: '0.08'},
                     {id: 'G2bawix', delay: '0.08'},
                     {id: 'J5XBcRr', delay: '0.08'},
                     {id: 'jmCoKrN', delay: '0.08'},
                     {id: 'OOuT7gX', delay: '0.08'},
                     {id: '7m8p67N', delay: '0.08'},
                     {id: 'cKVriYg', delay: '2'}
                  ]
               },
               'sirius': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'sirius_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'y54E3Fq', delay: '2'},
                     {id: 'KKcOvM5', delay: '0.08'},
                     {id: 'cdPueeg', delay: '0.08'},
                     {id: 'yMHapKA', delay: '0.08'},
                     {id: 'piuBzG4', delay: '0.08'},
                     {id: 'Zhad6LJ', delay: '0.08'},
                     {id: 'pIpNT61', delay: '0.08'},
                     {id: 'LtPbRk7', delay: '0.08'},
                     {id: 'twPrMak', delay: '0.08'},
                     {id: 'C9FDBFr', delay: '0.08'},
                     {id: 'j00ha1X', delay: '0.08'},
                     {id: 'C9FDBFr', delay: '0.08'},
                     {id: 'twPrMak', delay: '0.08'},
                     {id: 'LtPbRk7', delay: '0.08'},
                     {id: 'pIpNT61', delay: '0.08'},
                     {id: 'Zhad6LJ', delay: '0.08'},
                     {id: 'piuBzG4', delay: '0.08'},
                     {id: 'yMHapKA', delay: '0.08'},
                     {id: 'cdPueeg', delay: '0.08'},
                     {id: 'KKcOvM5', delay: '0.08'}
                  ]
               },
               'miracle': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'miracle_yt',
                  color:     'e36e04',
                  frames:    [
                     {id: 'mEcp7UJ', delay: '4'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N4fmB4V', delay: '0.08'},
                     {id: 'N3eQhQu', delay: '0.08'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N4fmB4V', delay: '0.08'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N3eQhQu', delay: '0.08'},
                     {id: 'cMQYnQb', delay: '0.08'},
                     {id: 'N4fmB4V', delay: '0.08'}
                  ]
               },
               'slash': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'slash_yt',
                  color:     'ffffff',
                  frames:    [
                     {id: 'AWEpAom', delay: '4'},
                     {id: 'Cvevuc8', delay: '0.08'},
                     {id: 'PtVaXeZ', delay: '0.08'},
                     {id: 'cvWzzip', delay: '0.08'},
                     {id: 's5FM9ZM', delay: '0.08'},
                     {id: 'nFzj8ow', delay: '0.08'},
                     {id: 'k6r614I', delay: '0.08'},
                     {id: '8UEJJEt', delay: '0.08'},
                     {id: 'OS0NBMS', delay: '0.08'},
                     {id: '8jQk2Uz', delay: '0.08'},
                     {id: 'uiLHrCr', delay: '0.08'},
                     {id: '8jQk2Uz', delay: '0.08'},
                     {id: 'OS0NBMS', delay: '0.08'},
                     {id: '8UEJJEt', delay: '0.08'},
                     {id: 'k6r614I', delay: '0.08'},
                     {id: 'nFzj8ow', delay: '0.08'},
                     {id: 's5FM9ZM', delay: '0.08'},
                     {id: 'cvWzzip', delay: '0.08'},
                     {id: 'PtVaXeZ', delay: '0.08'},
                     {id: 'Cvevuc8', delay: '0.08'}
                  ]
               },
               'crystal': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'crystal_yt',
                  color:     '1273e9',
                  frames:    [
                     {id: 'jZHPuF8', delay: '0.08'},
                     {id: 'D8MBnZ5', delay: '0.08'},
                     {id: 'ttiznOb', delay: '0.08'},
                     {id: 'Gm0X19w', delay: '0.08'},
                     {id: 'NPoLUf6', delay: '0.08'},
                     {id: 'XjSRDHW', delay: '0.08'},
                     {id: 'edcTt6j', delay: '0.08'},
                     {id: 'XTQBWRm', delay: '0.08'},
                     {id: 'rU3KchB', delay: '0.08'},
                     {id: 'xJe9vJh', delay: '0.08'},
                     {id: 'Gg1A4NY', delay: '0.08'},
                     {id: 'D9d2hSh', delay: '0.08'},
                     {id: 'lpX4GM6', delay: '0.08'},
                     {id: 'CKzjpKT', delay: '0.08'},
                     {id: 'pwkQvxD', delay: '0.08'},
                     {id: '2C3QpHg', delay: '0.08'},
                     {id: 'MRG3Djj', delay: '0.08'},
                     {id: '2GgbhaF', delay: '0.08'},
                     {id: 'Mqe76yX', delay: '0.08'},
                     {id: 'Oc0MPeX', delay: '0.08'},
                     {id: 'fq2oEqJ', delay: '0.08'},
                     {id: 'I8Hz7mE', delay: '0.08'},
                     {id: 'vy3sLVd', delay: '0.08'},
                     {id: 'xA7su83', delay: '0.08'},
                     {id: 'DzQLo7q', delay: '0.08'}
                  ]
               },
               'gfm': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'gfm_yt',
                  color:     '13dd9b',
                  frames:    [
                     {id: 'ImMQ1v7', delay: '0.08'},
                     {id: 'UnZ13uA', delay: '0.08'},
                     {id: 'U0Jres5', delay: '0.08'},
                     {id: 'CWKL82x', delay: '0.08'},
                     {id: '4Eehc4A', delay: '0.08'},
                     {id: 'QDIRu6q', delay: '0.08'},
                     {id: 'OlfDoKC', delay: '0.08'},
                     {id: 'EWidPaO', delay: '0.08'},
                     {id: 'wVso12O', delay: '0.08'},
                     {id: 'aRRPDXg', delay: '0.08'},
                     {id: 'Px2fPIX', delay: '0.08'},
                     {id: 'z71N8zK', delay: '0.08'},
                     {id: 'yV1oWtB', delay: '0.08'},
                     {id: 'OGp9CKr', delay: '0.08'},
                     {id: 'nOxBDx4', delay: '0.08'},
                     {id: 'bj4v8be', delay: '0.08'}
                  ]
               },
               'nbk': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'nbk_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'doovLBy', delay: '0.1'},
                     {id: '7a4bcUA', delay: '0.1'},
                     {id: 'uQiWXKK', delay: '0.1'},
                     {id: 'YvdpBSe', delay: '0.1'},
                     {id: 'sBg714h', delay: '0.1'},
                     {id: 'zturjAt', delay: '0.1'},
                     {id: 'ysfO8B6', delay: '0.1'},
                     {id: '8HJzHa4', delay: '0.1'}
                  ]
               },
               'kohai': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'kohai_yt',
                  color:     '658bd3',
                  frames:    [
                     {id: '64zpTtk', delay: '0.3'},
                     {id: '9G865mk', delay: '0.12'},
                     {id: 'xdhGWI5', delay: '0.12'},
                     {id: '5iJfJY3', delay: '0.12'},
                     {id: 'vI07nFv', delay: '0.12'},
                     {id: 'wKxUAry', delay: '0.12'},
                     {id: 'RUv4UVg', delay: '0.12'},
                     {id: 'frB66Ep', delay: '0.12'},
                     {id: 'Vnl66Df', delay: '0.12'},
                     {id: 'Nektn3N', delay: '0.12'},
                     {id: 'J2UfkzD', delay: '0.12'}
                  ]
               },
               'legend': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'turtleclan_yt',
                  color:     '000000',
                  frames:    [
                     {id: 'cd2Jj41', delay: '0.02'},
                     {id: 'BFVi5ZK', delay: '0.02'},
                     {id: 'gWwc9X9', delay: '0.02'},
                     {id: 'IENbkme', delay: '0.02'},
                     {id: 'Zf0GySz', delay: '0.02'},
                     {id: 'C7g8eCl', delay: '0.02'},
                     {id: 'YRWVguy', delay: '0.02'},
                     {id: 'p60vq6D', delay: '0.02'},
                     {id: 'qNfGMGm', delay: '0.02'},
                     {id: 'UqnBoke', delay: '0.02'},
                     {id: 'sm4SOvA', delay: '0.02'},
                     {id: 'Mn7QR42', delay: '0.02'},
                     {id: 'iAfnoVF', delay: '0.02'},
                     {id: 'IjwC9tp', delay: '0.02'},
                     {id: 'J1CZ8hh', delay: '0.02'},
                     {id: '6gNbU66', delay: '0.02'},
                     {id: 'weyGhf9', delay: '0.02'},
                     {id: '6EjJ1M1', delay: '0.02'},
                     {id: 'MrOrIEd', delay: '0.02'}
                  ]
               },
               'trippy': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'trippy',
                  color:     'ffffff',
                  frames:    [
                     {id: 'aqEBJji', delay: '0.03'},
                     {id: 'BfSFI8I', delay: '0.03'},
                     {id: 'rHzEc0l', delay: '0.03'},
                     {id: '4Dc6iSW', delay: '0.03'},
                     {id: 'C5pbZPx', delay: '0.03'},
                     {id: 'mr588aN', delay: '0.03'},
                     {id: 'nIGIScj', delay: '0.03'},
                     {id: '4jCE9xX', delay: '0.03'},
                     {id: 'I3Dixlc', delay: '0.03'},
                     {id: 'ZXxLp0Q', delay: '0.03'}
                  ]
               },
               'trippy_2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'trippy_2',
                  color:     'ffffff',
                  frames:    [
                     {id: '2MG25OA', delay: '0.03'},
                     {id: 'ypypCpM', delay: '0.03'},
                     {id: 'xjJyohm', delay: '0.03'},
                     {id: '46tVXfT', delay: '0.03'},
                     {id: 'gDwtKiL', delay: '0.03'},
                     {id: 'Jey9A4m', delay: '0.03'},
                     {id: 'eSwYkS3', delay: '0.03'},
                     {id: 'uId5x5t', delay: '0.03'}
                  ]
               },
               'aoyama': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'aoyama',
                  color:     '6a7aad',
                  frames:    [
                     {id: 'EZV44m5', delay: '0.08'},
                     {id: 'Be8YCIi', delay: '0.08'},
                     {id: 'aAUZMOY', delay: '0.08'},
                     {id: 'jRidrLf', delay: '0.08'},
                     {id: 'DSnCwbt', delay: '0.08'}
                  ]
               },
               'hestia': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'hestia',
                  color:     'ffffff',
                  frames:    [
                     {id: 'mHPki7d', delay: '0.13'},
                     {id: 'r68W6j3', delay: '0.13'},
                     {id: 'cnozXNA', delay: '0.13'},
                     {id: 'jzT28GE', delay: '0.13'},
                     {id: 'j4rMxd7', delay: '0.13'},
                     {id: '1yaH8Yj', delay: '0.13'},
                     {id: 'CBcsEd7', delay: '0.13'},
                     {id: 'yr6nREs', delay: '0.13'}
                  ]
               },
               'umaru': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'umaru',
                  color:     'e86b34',
                  frames:    [
                     {id: 'lzpVxie', delay: '0.1'},
                     {id: 'rUIggqs', delay: '0.1'},
                     {id: 'O5woXju', delay: '0.1'},
                     {id: 'opOYMbD', delay: '0.1'},
                     {id: 'g8nukXN', delay: '0.1'},
                     {id: 'j3jUhzB', delay: '0.1'}
                  ]
               },
               'megumin': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'megumin',
                  color:     '632d34',
                  frames:    [
                     {id: '08LhFca', delay: '0.1'},
                     {id: 'kE12JCT', delay: '0.1'},
                     {id: 'JG6acVn', delay: '0.1'},
                     {id: 'z3EAFKm', delay: '0.1'},
                     {id: '9hoQPlu', delay: '0.1'},
                     {id: 'EmdwHen', delay: '0.1'},
                     {id: 'cgaAF8j', delay: '0.1'},
                     {id: 'SgCq8Hy', delay: '0.1'},
                     {id: 'CCOOVBO', delay: '0.1'},
                     {id: 'elWHx2Y', delay: '0.1'}
                  ]
               },
               'neko': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'neko',
                  color:     '444250',
                  frames:    [
                     {id: 'l2kUHUa', delay: '0.2'},
                     {id: 'UHKbxIv', delay: '0.2'},
                     {id: 'zB4VlRl', delay: '0.2'},
                     {id: 'aVcKIMi', delay: '0.2'},
                     {id: '2V6yYIX', delay: '0.2'}
                  ]
               },
               'leekspin': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'leekspin',
                  color:     '8f5d99',
                  frames:    [
                     {id: 'acb7H09', delay: '0.1'},
                     {id: 'RvVtMsF', delay: '0.1'},
                     {id: '4dQ2gLM', delay: '0.1'},
                     {id: 'FXBj2HN', delay: '0.1'}
                  ]
               },
               'pizza_2': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'pizza_2',
                  color:     'ffffff',
                  frames:    [
                     {id: 'HKvlfSJ', delay: '0.1'},
                     {id: 'afS86PD', delay: '0.1'},
                     {id: 'wVmSKUf', delay: '0.1'},
                     {id: 'PkhWbF2', delay: '0.1'}
                  ]
               },
               'trippy_cat': {
                  cached:    false,
                  ready:     false,
                  current:   0,
                  timestamp: 0,
                  id:        'trippy_cat',
                  color:     '000000',
                  frames:    [
                     {id: '841wvz3', delay: '0.05'},
                     {id: '2p7AaDh', delay: '0.05'},
                     {id: 'YcNy91Y', delay: '0.05'},
                     {id: 'FwiDalL', delay: '0.05'},
                     {id: 'j6Z5YfK', delay: '0.05'}
                  ]
               }			   
}

function datatooltipfix(){
	$('[data-toggle="tooltip"]').tooltip();
}
//5. fixes:
setTimeout(function () {
if ($("#comm15").val()=="undefined"){
for (var i=15;i<=30;i++){
$("#comm"+i).parent().parent().hide();
}
}
}, 6000);
//6. Banned Users
var bannedUserUIDs=[];
