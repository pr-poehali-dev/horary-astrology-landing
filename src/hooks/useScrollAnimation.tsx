import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasTriggered(true);
        } else if (!triggerOnce || !hasTriggered) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { elementRef, isVisible };
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  duration = 600
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    const animations = {
      fadeUp: {
        hidden: 'opacity-0 translate-y-8',
        visible: 'opacity-100 translate-y-0'
      },
      fadeIn: {
        hidden: 'opacity-0',
        visible: 'opacity-100'
      },
      slideLeft: {
        hidden: 'opacity-0 -translate-x-8',
        visible: 'opacity-100 translate-x-0'
      },
      slideRight: {
        hidden: 'opacity-0 translate-x-8',
        visible: 'opacity-100 translate-x-0'
      },
      scale: {
        hidden: 'opacity-0 scale-95',
        visible: 'opacity-100 scale-100'
      }
    };

    const animationState = isVisible ? animations[animation].visible : animations[animation].hidden;
    
    return `${baseClasses} ${animationState}`;
  };

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClasses()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';
}

export function StaggeredAnimation({ 
  children, 
  className = '',
  staggerDelay = 100,
  animation = 'fadeUp'
}: StaggeredAnimationProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div ref={elementRef} className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={isVisible ? index * staggerDelay : 0}
          className="mb-4"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}