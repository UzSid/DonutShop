fetch("http://localhost/projects/project3/scripts/index.php")
    .then(response => response.json())
    .then(json => {
        sessionStorage.setItem("donutList", JSON.stringify(json));				
    });

let arr = JSON.parse(sessionStorage.getItem("donutList"));
const donutList = (
    <ul>
    <h1 class="labels"><b>Current donuts</b></h1><br></br>
    <hr></hr>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <p><b>Name:</b> {Name}</p>
                    <p><b>Description:</b> {Description}</p>
                    <p><b>Price:</b> {Price}</p>
                    <hr></hr>
                </div>   
            )
        })
    }
    </ul>
);

const createDonut = (    
    <form action="scripts/create.php" method="GET">
        <h2 class="labels"><b>Create a new donut</b></h2><br></br>
        <b>Name:</b> <input type="text" name="Name"></input><br></br>
        <b>Description:</b> <input type="text" name="Description"></input><br></br>
        <b>Price:</b> <input type="text" name="Price"></input><br></br>
        <br></br>
        <input type="submit" value = "Create" class="editbutton"></input>
    </form>
);

const updateDonut = (
    <form action="scripts/update.php" method="GET">
    <h2 class="labels"><b>Update an existing donut</b></h2>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <br></br><input type="radio" name="ID" value={ID} class="radio"></input>{Name} | {Description} | {Price}
                </div>                
            )
        })
    }
    <br></br>
    <b>New name:</b> <input type="text" name="Name"></input><br></br>
    <b>New description:</b> <input type="text" name="Description"></input><br></br>
    <b>New price:</b> <input type="text" name="Price"></input><br></br>
    <br></br>
    <input type="submit" value = "Update" class="editbutton"></input>
    </form>
);

const deleteDonut = (
    <form action="scripts/delete.php" method="GET">
    <h2 class="labels"><b>Delete an existing donut</b></h2>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <br></br><input type="radio" name="ID" value={ID} class="radio"></input>{Name} | {Description} | {Price}
                </div>                
            )
        })
    }
    <br></br>
    <input type="submit" value = "Delete" class="editbutton"></input>
    </form>    
);

const container1 = document.getElementById('root1');
const root1 = ReactDOM.createRoot(container1);
root1.render(donutList);

const container2 = document.getElementById('root2');
const root2 = ReactDOM.createRoot(container2);
root2.render(createDonut);

const container3 = document.getElementById('root3');
const root3 = ReactDOM.createRoot(container3);
root3.render(updateDonut);

const container4 = document.getElementById('root4');
const root4 = ReactDOM.createRoot(container4);
root4.render(deleteDonut);