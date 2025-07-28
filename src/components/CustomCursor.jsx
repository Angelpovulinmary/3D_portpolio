
import { useRef,useEffect } from 'react'
import{gsap} from "gsap";
const CustomCursor = () => {
    //refs for cursor elements
    const cursorRef= useRef(null);
    const cursorBorderRef=useRef(null)

    //hide cursor on mobile
    const isMobile=typeof window!=="undefined"&& window.matchMedia("(max-width:760px)").matches
 if(isMobile){
    return null
 }
 useEffect(()=>{
    //get cursor elements
    const cursor=cursorRef.current
    console.log(cursor)
    const cursorBorder=cursorBorderRef.current
    console.log(cursorBorder)
    //initial position off-screen
    gsap.set([cursor,cursorBorder],{
       xPercent:-50,
        yPercent:-50
    })
//variable for cursor position with different speeds
const xTo=gsap.quickTo(cursor,"x",{
    duration:0.2, ease:"power3.out"
})
const yTo=gsap.quickTo(cursor,"y",{
    duration:0.2, ease:"power3.out"
})
const xToBorder=gsap.quickTo(cursorBorder,"x",{
    duration:0.5,ease:"power.out"
})
const yToBorder=gsap.quickTo(cursorBorder,"y",{
    duration:0.5,ease:"power3.out"
})
//mouse move handler
const handleMouseMove=(e)=>{
    xTo(e.clientX)
    yTo(e.clientY)
    xToBorder(e.clientX)
    yToBorder(e.clientY)
}
//add move move listener
window.addEventListener("mousemove",handleMouseMove)
// add click animation
document.addEventListener("mousedown",()=>{
    gsap.to([cursor,cursorBorder],{
   scale:0.6,
   duration:0.2
       
    })
})
document.addEventListener("mouseup",()=>{
    gsap.to([cursor,cursorBorder],{
   scale:1,
   duration:0.2
       
    })
})

 },[])
  return (
  <>
  {/*Main cursor Dot*/}
  <div
  ref={cursorRef}
  className="fixed top-0 left-0 w-[20px] h-[20px]
   bg-white rounded-full pointer-events-none z-[999] 
   mix-blend-difference "
  
  />
    {/*Cursor Border*/}
     <div
  ref={cursorBorderRef}
  className="fixed top-0 left-0 w-[40px] h-[40px]
 border border-white rounded-full pointer-events-none z-[999] 
   mix-blend-difference opacity-50 "
  
  />
  
  </>
  )
}

export default CustomCursor