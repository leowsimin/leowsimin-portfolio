import { useEffect, useRef, useState } from "react"

function RevealOnScroll({ children }) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
            {children}
        </div>
    )
}

export default RevealOnScroll