import { useRef } from "react";

const Examples = () => { 
    const inputRef = useRef<HTMLInputElement>(null); 
    const handleClick = () => { 
        if (inputRef.current) { 
            inputRef.current.focus(); 
        } 
    }; 
    
    return ( 
    <> 
    <input type="text" ref={inputRef} /> 
        <button onClick={handleClick}>Focus Input</button> 
    </> 
    );
};

export default Examples;