import { useState, useRef, useEffect } from 'react';

/**
 * LazyImage component for optimized image loading
 * Uses Intersection Observer for lazy loading and blur-up effect
 */
const LazyImage = ({ src, alt, className = "", placeholderColor = "#e5e7eb" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers that don't support Intersection Observer
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-75'
      } ${className}`}
      style={{
        backgroundColor: !isLoaded ? placeholderColor : 'transparent',
      }}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  );
};

export default LazyImage;
