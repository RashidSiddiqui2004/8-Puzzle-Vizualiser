
"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroSection() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-3xl text-white font-bold text-raleway dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                Life is a puzzle, and every move counts. Embrace the challenge, and {" "}
                <Highlight className="text-black dark:text-white">
                    the solution will reveal itself.
                </Highlight>
            </motion.h1>
        </HeroHighlight>
    );
}
