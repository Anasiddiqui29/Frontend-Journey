import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";
// import ListGroup from "./components/ListGroup";

function App()
{
  // const items = [
  //       'New York',
  //       'Karachi',
  //       'London',
  //       'Lahore'
  //   ];

    // const handleSelectItem = (item: string) => {
    //   console.log(item);
    // }

  //  <ListGroup items = {items} heading = "Cities" onSelectitem={handleSelectItem}>

  //   </ListGroup>  

  // return( 
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>   
  //     </Alert>
  //   </div>
  // );

  const [alertVisible , SetAlertVisibility] = useState(false) ;

  return(
    <div>
      { alertVisible && <Alert onClose={() => SetAlertVisibility(false)}>My Alert</Alert>}
      <Button color="danger" onClick={ () => SetAlertVisibility(true) } > My button Yo</Button>
    </div>

  );
}

// We always export our func so that it can be used in other files just like 'Message'
export default App;


// useReducer 
/* It is used to store the multiple states of the components
for eg , if our component got too complex and have multiple states then we can store and use it later
See React journey folder for the ss 
*/

