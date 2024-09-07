"use client"
import { useEffect } from "react"

interface UseKeyboardShortcutProps {
    key: string,
    onPressed: () => void
}
export const useKeyboardShortcut = ({
    key,
    onPressed
}: UseKeyboardShortcutProps) => {
    useEffect(() => {
        const handleKeyboardPress = (e: globalThis.KeyboardEvent) => {
            if (e.key === key) {
                console.log('PRESED');
                e.preventDefault();
                onPressed();
            }
        }
        window.addEventListener("keydown", handleKeyboardPress)

        return () => {
            window.removeEventListener("keydown", handleKeyboardPress)
        }
    }, [key, onPressed])
};