import React from 'react'



export default function Alert(props) {
    const capitalize =(word)=>{
            const lowerword= word.toLowerCase();
            return lowerword.charAt(0).toUpperCase()+lowerword.slice(1);
    }
    return (
        // if props.alert is true then the code after runs if false than code after doesnot runs
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
// written function to capitalise the first letter os sucess because direct capitalising success in showalert would not take the value in the above js to make alert green