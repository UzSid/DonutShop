fetch("http://localhost/projects/project3/scripts/index.php")
    .then(response => response.json())
    .then(json => {
        sessionStorage.setItem("donutList", JSON.stringify(json));				
    });

let arr = JSON.parse(sessionStorage.getItem("donutList"));
const donutList = (
    <ul>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <p>{ID} | {Name} | {Description} | {Price}</p>
                </div>   
            )
        })
    }
    </ul>
);

const createDonut = (    
    <form action="scripts/create.php" method="GET"> 
        Name: <input type="text" name="Name"></input><br></br>
        Description: <input type="text" name="Description"></input><br></br>
        Price: <input type="text" name="Price"></input><br></br>
        <input type="submit" value = "Create"></input>
    </form>
);

const updateDonut = (
    <form action="scripts/update.php" method="GET">
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <input type="radio" name="ID" value={ID}></input>{ID} | {Name} | {Description} | {Price}
                </div>                
            )
        })
    }
    New name: <input type="text" name="Name"></input><br></br>
    New description: <input type="text" name="Description"></input><br></br>
    New price: <input type="text" name="Price"></input><br></br>
    <input type="submit" value = "Update"></input>
    </form>
);

const deleteDonut = (
    <form action="scripts/delete.php" method="GET">
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <input type="radio" name="ID" value={ID}></input>{ID} | {Name} | {Description} | {Price}
                </div>                
            )
        })
    }
    <input type="submit" value = "Delete"></input>
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