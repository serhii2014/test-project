function CountdownTimer(n,s,i){this.initialize.apply(this,arguments)}function CDT(){new CountdownTimer("CDT",new Date("2022/10/30 00:00:00"),'<span class="number-wrapper"><div class="line"></div><span class="number end">Время вышло!</span></span>').countDown()}CountdownTimer.prototype={initialize:function(n,s,i){this.elem=document.getElementById(n),this.tl=s,this.mes=i},countDown:function(){var n="",s=new Date,i=Math.floor((this.tl-s)/864e5),a=Math.floor((this.tl-s)%864e5/36e5),t=Math.floor((this.tl-s)%864e5/6e4)%60,e=Math.floor((this.tl-s)%864e5/1e3)%60%60,o=this;this.tl-s>0?(n+='<span class="number-wrapper"><div class="line"></div>'+this.addZero(i)+'<div class="caption caption-tck">DAYS</div><span class="number day"></span></span>',n+='<span class="number-wrapper"><div class="line"></div>'+this.addZero(a)+'<div class="caption caption-tck">HOURS</div><span class="number hour"></span></span>',n+='<span class="number-wrapper"><div class="line"></div>'+this.addZero(t)+'<div class="caption caption-tck">MINUTES</div><span class="number min"></span></span><span class="number-wrapper"><div class="line"></div>'+this.addZero(e)+'<div class="caption">SECONDS</div><span class="number sec"></span></span>',this.elem.innerHTML=n,tid=setTimeout(function(){o.countDown()},10)):this.elem.innerHTML=this.mes},addZero:function(n){return("0"+n).slice(-2)}},window.onload=function(){CDT()};
