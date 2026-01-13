import { ReactNode } from "react"
// Using children prop we can pass the children to the component

//In here we can see that the child prop is string so we cannot pass html tags to the component
// interface Props {
//     children: string
// }

//to do that we will use reactnative
interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children , onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible"> {children} 
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert