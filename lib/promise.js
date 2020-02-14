let promise=new Promise((res,rej)=>{
    setTimeout(function() {
        res('foo');
      }, 3000);
});

promise.then((value)=>{
    console.log(value);
})

console.log('start');