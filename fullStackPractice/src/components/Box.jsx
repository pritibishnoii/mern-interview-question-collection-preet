import { useLayoutEffect, useRef, useState} from "react"

const Box = () => {

    const [width,setWidth]= useState(0);
    const boxRef = useRef(null);


    useLayoutEffect(()=>{
        const width= boxRef.current.getBoundingClientRect().width;
        setWidth(width)
    },[])

  return (
    <div>
        <div ref={boxRef}>
        Hello world
        </div>
        <p>{width}</p>
    </div>
  )
}

export default Box