import './Tabmenu.css';

export default function TabMenu({label}) {
    //pure javascript way to handle onclick events
    //document.querySelector('button').addEventListener('click', () => { do something interesting});
    //document.querySelector('button') querySelector would grab all elements of 'button'
    //.addEventListener() is a built in function that accepts 2 arguments (event type, and a function to execute when the event trigger happens)
    function handleClick() {
        console.log('sup');
    }
     

    return (
        <li>
            <button onClick={handleClick}>{label}</button>
            {/*handleClick() vs handleclick */}
            {/* handleClick means the function would be executed on render */}
            {/* What really needs to happen is the function needs to be executed when the button is clicked. Meaning the function needs to passed (handed off to) 
                the button via the 'onClick' Attribute to be executed when the button is clicked.
            */}

        </li>
    )
}