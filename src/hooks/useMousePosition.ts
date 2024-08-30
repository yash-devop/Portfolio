import { RefObject, useEffect, useState } from "react"



const useMousePosition = <T extends HTMLElement>(containerRef: RefObject<T>, maxXOffset: number, maxYOffset: number) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();

      if (rect) {
        const maxX = rect.width + maxXOffset;
        const maxY = rect.height + maxYOffset;

        setMousePosition({
          x: Math.max(30, Math.min(e.clientX - rect.left + 40, maxX)),
          y: Math.max(30, Math.min(e.clientY - rect.top + 40, maxY))
        });
      }
    };

    containerRef.current?.addEventListener("mousemove", updateMousePosition);

    return () => {
      containerRef.current?.removeEventListener("mousemove", updateMousePosition);
    };
  }, [containerRef, maxXOffset, maxYOffset]);

  return mousePosition;
};

export default useMousePosition;
