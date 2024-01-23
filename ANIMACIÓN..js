(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ANIMACIÓN._atlas_1", frames: [[0,0,1080,1080]]},
		{name:"ANIMACIÓN._atlas_2", frames: [[0,0,1080,1080]]},
		{name:"ANIMACIÓN._atlas_3", frames: [[0,0,1080,1080]]},
		{name:"ANIMACIÓN._atlas_4", frames: [[0,0,1080,1080]]},
		{name:"ANIMACIÓN._atlas_5", frames: [[0,0,1080,1080]]},
		{name:"ANIMACIÓN._atlas_6", frames: [[0,0,1080,1080],[0,1082,600,600],[602,1082,600,600],[1204,0,600,600],[1204,602,600,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._202312021145_YO = function() {
	this.initialize(ss["ANIMACIÓN._atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._202312021145_YOpngcopia = function() {
	this.initialize(ss["ANIMACIÓN._atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._202312021301_ZORRO = function() {
	this.initialize(ss["ANIMACIÓN._atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BOTONDEPLAYSINFONDO = function() {
	this.initialize(ss["ANIMACIÓN._atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BOTONDEPLAYSINFONDOpngcopia = function() {
	this.initialize(ss["ANIMACIÓN._atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BOTONDEPLAYSINFONDOpngcopia2 = function() {
	this.initialize(ss["ANIMACIÓN._atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ESCENARIO1 = function() {
	this.initialize(ss["ANIMACIÓN._atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ESCENARIO2 = function() {
	this.initialize(ss["ANIMACIÓN._atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ESCENARIO3 = function() {
	this.initialize(ss["ANIMACIÓN._atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ESCENARIO4 = function() {
	this.initialize(ss["ANIMACIÓN._atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.BOTONDEPLAYSINFONDOpngcopia2();
	this.instance.setTransform(106.1,0,0.0982,0.0982,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.1,106.1);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.BOTONDEPLAYSINFONDOpngcopia();
	this.instance.setTransform(80.05,0,0.0741,0.0741,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,80.1);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.BOTONDEPLAYSINFONDO();
	this.instance.setTransform(74.1,0,0.0686,0.0686,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,74.1);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._202312021145_YOpngcopia();
	this.instance.setTransform(0,0,0.3149,0.3149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,340.1,340.1), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._202312021301_ZORRO();
	this.instance.setTransform(0,0,0.1111,0.1111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,120,120), null);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._202312021145_YO();
	this.instance.setTransform(0,0,0.3037,0.3037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,328,328), null);


// stage content:
(lib.ANIMACIÓN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [7,26,36,54];
	// timeline functions:
	this.frame_7 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(7);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(8);
		}
	}
	this.frame_26 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(26);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(27);
		}
	}
	this.frame_36 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(36);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(37);
		}
	}
	this.frame_54 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(54);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(19).call(this.frame_26).wait(10).call(this.frame_36).wait(18).call(this.frame_54).wait(1));

	// Capa_10
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(-72,329,1,1,0,0,0,170,170);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({x:-59.4,y:330.2},0).wait(1).to({x:-46.8,y:331.45},0).wait(1).to({x:-34.2,y:332.7},0).wait(1).to({x:-21.6,y:333.9},0).wait(1).to({x:-9.05,y:335.15},0).wait(1).to({x:3.55,y:336.4},0).wait(1).to({x:16.15,y:337.6},0).wait(1).to({x:28.75,y:338.85},0).wait(1).to({x:41.3,y:340.1},0).wait(1).to({x:53.9,y:341.35},0).wait(1).to({x:66.5,y:342.55},0).wait(1).to({x:79.1,y:343.8},0).wait(1).to({x:91.65,y:345.05},0).wait(1).to({x:104.25,y:346.25},0).wait(1).to({x:116.85,y:347.5},0).wait(1).to({x:129.45,y:348.75},0).wait(1).to({x:142,y:350},0).wait(1));

	// Capa_9
	this.instance_1 = new lib.ESCENARIO4();
	this.instance_1.setTransform(1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(18));

	// Capa_8
	this.button_3 = new lib.Símbolo6();
	this.button_3.name = "button_3";
	this.button_3.setTransform(520.1,330.1,1,1,0,0,0,53.1,53.1);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(36).to({_off:false},0).to({_off:true},1).wait(18));

	// Capa_7
	this.instance_2 = new lib.ESCENARIO3();
	this.instance_2.setTransform(1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({_off:true},10).wait(18));

	// Capa_6
	this.button_2 = new lib.Símbolo5();
	this.button_2.name = "button_2";
	this.button_2.setTransform(384,228,1,1,0,0,0,40,40);
	this.button_2._off = true;
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(26).to({_off:false},0).to({_off:true},1).wait(28));

	// Capa_5
	this.instance_3 = new lib.Símbolo2();
	this.instance_3.setTransform(783,367,1,1,0,0,0,60,60);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(1).to({x:756.6,y:368.55},0).wait(1).to({x:730.2,y:370.1},0).wait(1).to({x:703.8,y:371.65},0).wait(1).to({x:677.4,y:373.2},0).wait(1).to({x:651.05,y:374.75},0).wait(1).to({x:624.65,y:376.3},0).wait(1).to({x:598.25,y:377.85},0).wait(1).to({x:571.85,y:379.4},0).wait(1).to({x:545.5,y:381},0).wait(1).to({x:519.1,y:382.55},0).wait(1).to({x:492.7,y:384.1},0).wait(1).to({x:466.3,y:385.65},0).wait(1).to({x:439.9,y:387.2},0).wait(1).to({x:413.55,y:388.75},0).wait(1).to({x:387.15,y:390.3},0).wait(1).to({x:360.75,y:391.85},0).wait(1).to({x:334.35,y:393.4},0).wait(1).to({x:308,y:395},0).to({_off:true},1).wait(28));

	// Capa_4
	this.instance_4 = new lib.Símbolo1();
	this.instance_4.setTransform(-186,309,1,1,0,0,0,164,164);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(1).to({x:-169.15},0).wait(1).to({x:-152.3},0).wait(1).to({x:-135.5},0).wait(1).to({x:-118.65},0).wait(1).to({x:-101.8},0).wait(1).to({x:-85},0).wait(1).to({x:-68.15},0).wait(1).to({x:-51.35},0).wait(1).to({x:-34.5},0).wait(1).to({x:-17.65},0).wait(1).to({x:-0.85},0).wait(1).to({x:16},0).wait(1).to({x:32.8},0).wait(1).to({x:49.65},0).wait(1).to({x:66.5},0).wait(1).to({x:83.3},0).wait(1).to({x:100.15},0).wait(1).to({x:116.95},0).to({_off:true},1).wait(28));

	// Capa_3
	this.instance_5 = new lib.ESCENARIO2();
	this.instance_5.setTransform(1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({_off:true},19).wait(28));

	// Capa_2
	this.button_1 = new lib.Símbolo4();
	this.button_1.name = "button_1";
	this.button_1.setTransform(350.1,465.1,1,1,0,0,0,37.1,37.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(7).to({_off:false},0).to({_off:true},1).wait(47));

	// Capa_1
	this.instance_6 = new lib.ESCENARIO1();
	this.instance_6.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},8).wait(47));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-50,300,893,300);
// library properties:
lib.properties = {
	id: 'B77023EDB7A0EA489BAC84DBE35FEFEF',
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ANIMACIÓN._atlas_1.png", id:"ANIMACIÓN._atlas_1"},
		{src:"images/ANIMACIÓN._atlas_2.png", id:"ANIMACIÓN._atlas_2"},
		{src:"images/ANIMACIÓN._atlas_3.png", id:"ANIMACIÓN._atlas_3"},
		{src:"images/ANIMACIÓN._atlas_4.png", id:"ANIMACIÓN._atlas_4"},
		{src:"images/ANIMACIÓN._atlas_5.png", id:"ANIMACIÓN._atlas_5"},
		{src:"images/ANIMACIÓN._atlas_6.png", id:"ANIMACIÓN._atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B77023EDB7A0EA489BAC84DBE35FEFEF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;