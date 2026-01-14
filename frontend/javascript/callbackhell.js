function getData(dataid, getnextid) {
    setTimeout(() => {
        console.log(dataid)
        if (getnextid) {
            getnextid();
        }
    }, 3000);
}

getData(123, ()=>{
    getData(456, ()=>{
        getData(789);
    })
})

//first get dataid 123 after 3 seconds
//then get dataid 456 after another 3 seconds
//then get dataid 789 after another 3 seconds

// This is called callback hell or pyramid of doom