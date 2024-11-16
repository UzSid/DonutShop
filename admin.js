fetch("http://localhost/projects/project3/index.php")
    .then(response => response.json())
    .then(json => {
        sessionStorage.setItem("donutList", JSON.stringify(json));				
    });

let arr = JSON.parse(sessionStorage.getItem("donutList"));
const donutList = (
    <form action="create.php" method="GET">
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <p>{ID} | {Name} | {Price} | {Description}</p>
                </div>
                
            )
        })
    }
    </form>
);

const createDonut = (    
    <form action="create.php" method="GET"> 
        <p>Create a new donut:</p>
        Name: <input type="text" name="Name"></input><br></br>
        Description: <input type="text" name="Description"></input><br></br>
        Price: <input type="text" name="Price"></input><br></br>
        <input type="submit"></input>
    </form>
);

const updateDonut = (
    <form action="update.php" method="GET">
    <p>Update an existing donut</p>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <input type="radio" name="ID" value={ID}></input>{ID} | {Name} | {Price} | {Description}
                </div>                
            )
        })
    }
    New name: <input type="text" name="Name"></input><br></br>
    New description: <input type="text" name="Description"></input><br></br>
    New price: <input type="text" name="Price"></input><br></br>
    <input type="submit"></input>
    </form>
);

const deleteDonut = (
    <form action="delete.php" method="GET">
    <p>Delete an existing donut</p>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <input type="radio" name="ID" value={ID}></input>{ID} | {Name} | {Price} | {Description}
                </div>                
            )
        })
    }
    <input type="submit"></input>
    </form>    
);

/*
<div key={ID}>
    <input type="radio" id={ID} name="fav_language" value={ID}></input>
    <label for="html">{ID} | {Name} | {Price} | {Description}</label><br></br>
    <input type="submit"></input>
 */

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