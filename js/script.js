const d  = new Date();

setTimeout(()=>{
    alert("Hi Dude");
    setInterval(()=>{
         console.log(d.toLocaleDateString());
         console.log(d.getDate(),d.getHours(),d.getSeconds());
        },1000)
},5000)
