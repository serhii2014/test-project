//Js Timer

function CountdownTimer(elm,tl,mes){
	this.initialize.apply(this,arguments);
   }
   CountdownTimer.prototype={
	initialize:function(elm,tl,mes) {
	 this.elem = document.getElementById(elm);
	 this.tl = tl;
	 this.mes = mes;
	},countDown:function(){
	 var timer='';
	 var today=new Date();
	 var day=Math.floor((this.tl-today)/(24*60*60*1000));
	 var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
	 var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
	 var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
	 var me=this;
   
	 if( ( this.tl - today ) > 0 ){
	  timer += '<span class="number-wrapper"><div class="line"></div>'+this.addZero(day)+  '<div class="caption caption-tck">DAYS</div><span class="number day"></span></span>';
	  timer += '<span class="number-wrapper"><div class="line"></div>'+this.addZero(hour)+  '<div class="caption caption-tck">HOURS</div><span class="number hour"></span></span>';
	  timer += '<span class="number-wrapper"><div class="line"></div>'+this.addZero(min)+'<div class="caption caption-tck">MINUTES</div><span class="number min"></span></span><span class="number-wrapper"><div class="line"></div>'+this.addZero(sec)+'<div class="caption">SECONDS</div><span class="number sec"></span></span>';
	  this.elem.innerHTML = timer;
	  tid = setTimeout( function(){me.countDown();},10 );
	 }else{
	  this.elem.innerHTML = this.mes;
	  return;
	 }
	},
	addZero:function(num){ return ('0'+num).slice(-2); }
   }
   function CDT(){
   
	// Set countdown limit
	var tl = new Date('2021/10/30 00:00:00');
   
	// You can add time's up message here
	var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Время вышло!</span></span>');
	timer.countDown();
   }
   window.onload=function(){
	CDT();
   }