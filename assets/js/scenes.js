window.onload = function() {
	var control = document.getElementById('control'); //element at 100vh
	var rect = control.getBoundingClientRect().top;	//get px of 100vh
	var winx = window.innerWidth
	var winh = window.innerHeight
	var winy = window.innerHeight * rect/winh	//get the ratio
	//vh is the corrected unit for mobile browser.
	let vh = winy * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

var controller = new ScrollMagic.Controller({
	vertical: true,
	refreshInterval: 0, // disable
});

// *********************************************
// ******    Section 01   *********************
// *********************************************
var tween1_1 = TweenMax.from("#sec01_07", 3, {x: winx});
var tween1_2 = TweenMax.from("#sec01_05", 3, {x: -winx});
var tween1_3 = TweenMax.from("#sec01_02", 3, {opacity: 0});
var tween1_4 = TweenMax.from("#sec01_03", 3, {opacity: 0});

var tween_scrollicon = TweenMax.to(".scrollicon", 3, {display: 'none'});
var scene_scrollicon = new ScrollMagic.Scene({
	triggerElement: ".sec1", 
	duration: winy, 
	offset: winy*.5,
}).setTween(tween_scrollicon)
.addTo(controller);

//Animation 4 images
var tween1_5 = TweenMax.from("#sec01_08", 3, {x: winx});
var scene1_1 = new ScrollMagic.Scene({
	triggerElement: ".sec1", 
	duration: '200%', 
	offset: 0,
}).setTween(tween1_5)
.setPin('.sec01')
// .addIndicators({name: 'sec 1'})
.addTo(controller);

var tween1_6 = TweenMax.from("#sec01_09", 3, {x: winx});
var scene1_2 = new ScrollMagic.Scene({
	triggerElement: ".sec1", 
	duration: '200%', 
	offset: winy*.4,
}).setTween(tween1_6)
.addTo(controller);

var tween1_7 = TweenMax.from("#sec01_10", 3, {x: winx});
var scene1_3 = new ScrollMagic.Scene({
	triggerElement: ".sec1", 
	duration: '200%', 
	offset: winy*.9,
}).setTween(tween1_7)
.addTo(controller);

var tween1_8 = TweenMax.from("#sec01_11", 3, {x: winx});
var scene1_4 = new ScrollMagic.Scene({
	triggerElement: ".sec1", 
	duration: '200%',
	offset: winy*1.2,
}).setTween(tween1_8)
.addTo(controller);

//article 01
var tween1_9 = TweenMax.from("#article_01", 3, {opacity: 0});
var scene1_4 = new ScrollMagic.Scene({
	triggerElement: "#article_01", 
	duration: winy,
	offset: 0,
}).setTween(tween1_9)
.addTo(controller);






//image gallery 06
var tween_imggal_06 = TweenMax.from("#imggal06", 1, {x: winx*2});
var imggal_06 = new ScrollMagic.Scene({
	triggerElement: "#imggal06", 
	duration: winy,
	offset: winy*2,
}).setTween(tween_imggal_06)
.setPin('.sec01')
.addTo(controller);

//image gallery 07
var tween_imggal_07 = TweenMax.from("#imggal07", 1, {x: winx*2});
var imggal_07 = new ScrollMagic.Scene({
	triggerElement: "#imggal07", 
	duration: winy,
	offset: winy*3,
}).setTween(tween_imggal_07)
// .addIndicators({name: 'imggal'})
.setPin('.sec01')
.addTo(controller);

// *********************************************
// ******    Section 02   *********************
// *********************************************



// *********************************************
// ******    Section 03   *********************
// *********************************************


// *********************************************
// ******    Section 04   *********************
// *********************************************


// *********************************************
// ******    Section 05   *********************
// *********************************************



// *********************************************
// ******    Section 06   *********************
// *********************************************




// *********************************************
// ******    Emd of Sections  *********************
// *********************************************

		// detect if mobile browser. regex -> http://detectmobilebrowsers.com
		var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);

		// we'd only like to use iScroll for mobile...
		if (isMobile) {
		// configure iScroll
		var myScroll = new IScroll('#scroll-wrapper',
					{
						// don't scroll horizontal
						scrollX: false,
						// but do scroll vertical
						scrollY: true,
						// show scrollbars
						scrollbars: true,
						// deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
						// if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
						useTransform: false,
						// deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
						useTransition: false,
						// set to highest probing level to get scroll events even during momentum and bounce
						// requires inclusion of iscroll-probe.js
						probeType: 3,
						// pass through clicks inside scroll container
						click: true 
					}
										);
								
		// overwrite scroll position calculation to use child's offset instead of container's scrollTop();
		controller.scrollPos(function () {
			return -myScroll.y;
		});
    		// thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
    		myScroll.on("scroll", function () {
    			controller.update(true);
    		});
    		// add indicators to scrollcontent so they will be moved with it.
    		//scenetl.addIndicators({parent: ".scrollContent"});

    	} else {
    		// add indicators (requires plugin)
    		// scenetl.addIndicators();											
											
										
										
									
    	}




};