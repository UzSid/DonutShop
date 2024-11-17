fetch("http://localhost/projects/project3/scripts/index.php")
    .then(response => response.json())
    .then(json => {
        sessionStorage.setItem("donutList", JSON.stringify(json));				
    });

let arr = JSON.parse(sessionStorage.getItem("donutList"));
const donut = (
    <ul>
    { 
        arr.map(({ID, Name, Price, Description}) => {      
            return (
                <div key={ID}>
                    <p>{Name}</p>
                    <p>{Description}</p>
                    <p>{Price}</p>
                </div>
            )
        })
    }
    </ul>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(donut);