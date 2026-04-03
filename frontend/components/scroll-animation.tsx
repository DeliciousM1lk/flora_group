"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "blur"
  duration?: number
  once?: boolean
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [once])

  const getInitialStyles = () => {
    switch (direction) {
      case "up": return { transform: "translate3d(0, 50px, 0)", opacity: 0 }
      case "down": return { transform: "translate3d(0, -50px, 0)", opacity: 0 }
      case "left": return { transform: "translate3d(50px, 0, 0)", opacity: 0 }
      case "right": return { transform: "translate3d(-50px, 0, 0)", opacity: 0 }
      case "scale": return { transform: "scale(0.9)", opacity: 0 }
      case "blur": return { filter: "blur(10px)", opacity: 0 }
      case "fade": return { opacity: 0 }
    }
  }

  const getAnimatedStyles = () => {
    return {
      transform: "translate3d(0, 0, 0) scale(1)",
      filter: "blur(0px)",
      opacity: 1
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? getAnimatedStyles() : getInitialStyles()),
        transitionProperty: "transform, opacity, filter",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  )
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.innerHeight - rect.top
        setOffset(scrolled * speed * 0.1)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}

interface CountUpProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function CountUp({ end, suffix = "", prefix = "", duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className = "", staggerDelay = 100 }: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref} 
      className={className}
      style={{
        ['--stagger-delay' as string]: `${staggerDelay}ms`,
        ['--visible' as string]: isVisible ? '1' : '0',
      }}
    >
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
}

export function FloatingElement({ 
  children, 
  className = "", 
  amplitude = 10,
  duration = 3
}: FloatingElementProps) {
  return (
    <div
      className={className}
      style={{
        animation: `floating ${duration}s ease-in-out infinite`,
        ['--amplitude' as string]: `${amplitude}px`,
      }}
    >
      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(calc(-1 * var(--amplitude))); }
        }
      `}</style>
      {children}
    </div>
  )
}

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <span
        className="inline-block"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </span>
    </span>
  )
}

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  delay?: number
}

export function ImageReveal({ src, alt, className = "", delay = 0 }: ImageRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-primary z-10"
        style={{
          transform: isVisible && isLoaded ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delay}ms`,
        }}
      />
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
        style={{
          transform: isVisible && isLoaded ? 'scale(1)' : 'scale(1.2)',
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${delay + 200}ms`,
        }}
      />
    </div>
  )
}
