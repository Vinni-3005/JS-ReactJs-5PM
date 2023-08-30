/* setInterval(() => {
        let ct = new Date().toLocaleTimeString()
        document.getElementById('abc').innerHTML = ct
}, 1000); */
setInterval(function(){
        document.getElementById('abc').innerHTML = new Date().toLocaleTimeString()
}, 1000);