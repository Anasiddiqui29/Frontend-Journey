import { useState, type MouseEvent } from "react";

// In react we never have to worry about the DOM (in js) , we just need to worry about components and its states
// The react will take care of the DOM

// Using props we can pass data to the components

// { items: [] , heading: string }
// we can also pass func using prop
interface Props {
    items: string[];
    heading: string;
    onSelectitem: (item: string) => void;
}

function ListGroup({items , heading , onSelectitem }: Props) {
    // const items = [
    //     'New York',
    //     'Karachi',
    //     'London',
    //     'Lahore'
    // ];

    // items = [];

    // const msg = items.length == 0 ? <p>No items found</p> : null ;

    // const message = () => {
    //     return items.length == 0 ? <p>No items found</p> : null ;
    // }
    // We can call that msg func in return block

    // We cannot use if condition directly in jsx (return).We can only use html tags but if we want to use
    // if condition then we may use by using {} braces just as shown below as ternary operator

    // If func gets complex so we can declare and define func here
    // Event handler
    // const handlerClick = (event:MouseEvent) => {
    //     console.log(event)
    // }

    //let selectedIndex = 0; here -1 means it is inactive ; 0 ka matlb first item selected
    //selectedIndex cannot be used by react directly. It is like the secret
    // so to update the data dynamically we use useState to update the data and to let react know
    //useState returns array
    const [selectedIndex , setSelectedIndex] = useState(-1);
    //arr[0] ; variable (selectedIndex)
    //arr[1] ; updater function
    //setSelectedIndex gets the function (setValue) that updates the state So yes — it's “an element of the array,” 
    // but that element happens to be a function.

    // <> means fragment . <> == <fragment>
    return ( 
        <> 
            <h1>{heading}</h1>
                {items.length === 0 && <p>No items found!</p>}
                <ul className="list-group">
                    {items.map((item , index) => (
                        <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={item} 
                        onClick= {() => {
                            setSelectedIndex(index);
                            onSelectitem(item);
                        }}
                        > 
                        {item} 
                        </li>
                    ))}               
                </ul>
        </>
    );
}

export default ListGroup