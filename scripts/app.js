fetch("http://localhost/projects/project3/scripts/index.php")
    .then(response => response.json())
    .then(json => {
        sessionStorage.setItem("donutList", JSON.stringify(json));				
    });

let arr = JSON.parse(sessionStorage.getItem("donutList"));
const donut = (
    <ul>
    <link rel="stylesheet" href="styles/main.css"></link>
    <h1 class="menuhead">Menu</h1>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div>
                    <div key={ID} class="item3">
                        <h2 class="name">{Name}</h2>
                        <p class="desc">{Description}</p>
                        <h3 class="price">{Price}</h3>
                    </div>
                </div>
            )
        })
    }
    </ul>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(donut);