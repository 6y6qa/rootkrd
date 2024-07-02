var aText = new Array(
"<span class='terminal__text__span'>Hi, welcome to DeepHole...</span>",
"<span class='terminal__text__span'>Dedicated to collecting and acquiring information.</span>", 
"<span class='terminal__text__span'>the information is curated for IQ enthusiasts.</span>",
"<span class='terminal__text__span'>This system was created in 2023 by the RootKrd Team.</span>",
"<span class='terminal__text__span'>The RootKrd Team specializes in CyberSecurity.</span>",
"<span class='terminal__text__span'># # # # # # #</span>",
"<span class='terminal__text__span'>We in RootKrd are from <a href='https://t.me/i4m_qamar'>i4m_qamar</a> / <a href='https://t.me/i4m_mrx'>i4m_mrx</a>.</span>",
"<span class='terminal__text__span'>Telegram Channel: <a href='https://t.me/RootKrd'>RootKrd</a></span>",
"<span class='terminal__text__span'>We hope you benefit from this <a href='https://t.me/DeepholeBot'>DeepHole Bot</a>.</span>"

);
var iSpeed = 20; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
 
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 200);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

$(function() {
	$( ".terminal" ).draggable();
});