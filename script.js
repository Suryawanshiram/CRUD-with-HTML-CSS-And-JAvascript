let url="https://63249e3c6f7a75f8b79642fc.mockapi.io/users"//Mock api url contains fake data 



//Create a function to retrieve the data(GET)

function getData(){
//fethc mechanism inorder to fetch the data
fetch(url,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
}).then((res)=>res.json())
.then((data)=>{
    console.log(data)
})
}


// getData();//Call getData to read the data


//create a function to send the data to the server(POST)
function createData(){
    let data={
        name:"Ram",
        email:"Ram@gmail.com",
        address:"Pune"
    }

    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err)
    })
}

// createData();
getData()


//Update =>PUT(update or edit an existing data)
function updateData(){
    let data={
        name:"Anuj",
        email:"anuj@gmail.com",
        address:"Bengaluru"
    }

    fetch(url+"/1",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

// updateData();


//Delete->TO delete any data using id
function deleteData(){
    fetch(url+"/8",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json()
    .then((data)=>{
        console.log(data)
    })).catch((err)=>{
        console.log(err)
    })
}



deleteData();
