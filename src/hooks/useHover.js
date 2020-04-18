import {useState, useEffect, useRef} from "react"

export const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    const enter = () => setHovered(true)
    const leave = () => setHovered(false)
    
    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        const refcurrent = ref.current

        return () => {    
            refcurrent.removeEventListener("mouseenter", enter)
            refcurrent.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}