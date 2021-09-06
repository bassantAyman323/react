
import React, { useState } from "react";
function Todo({todo}) {
    const [isActive, setActive] = useState("false");
    const [isDelete, setDelete] = useState("false");
    const onTodoClick = () => {
        setActive(!isActive);
    }

    const onDelete = () => {
      setDelete(!isDelete);
     
    //   var el=document.getElementById("el");
    //   el.classList.add('delete')
    //   isDelete ? className("delete") : null
        
    }
 

  return (
    <>
    {/* <h6 style={{fontSize:15,margin:10, padding:10}} className={isDelete?}>delete this</h6> */}

       <li  onClick={onTodoClick} id="el"  onDoubleClick={onDelete}   className={ (isDelete ?"":"delete" )+(isActive ? "" : "notchecked")  } >{todo}</li>
      
    </>  
  );
}

export default Todo;