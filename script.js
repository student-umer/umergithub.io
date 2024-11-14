function clock() {
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let period = document.getElementById('period')

   let h=new Date().getHours();
   let m=new Date().getMinutes();
   let s=new Date().getSeconds();

   
   let ampm=h >= 12? "PM":"AM";

   h = h % 12;
   h = h ? h : 12;




   hours.innerHTML = h ;
   minutes.innerHTML = m ;
   seconds.innerHTML = s ;
   period.innerHTML = ampm;

   

};
setInterval(clock,1000);