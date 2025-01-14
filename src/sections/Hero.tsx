"use client";
import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursoryou from "@/assets/images/cursor-you.svg";
export default function Hero() {
    const [leftDesignscope, leftDesignanimate] = useAnimate();
    const [leftPointerscope, leftPointeranimate] = useAnimate();

    const [rightDesignscope, rightDesignanimate] = useAnimate();
    const [rightPointerscope, rightPointeranimate] = useAnimate();

    useEffect(() => {
        leftDesignanimate([
            [leftDesignscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointeranimate([
            [leftPointerscope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerscope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerscope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignanimate([
            [rightDesignscope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
            [rightDesignscope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointeranimate([
            [rightPointerscope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
            [rightPointerscope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerscope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5, },
            ],
        ]);
    }, []);
    return (
        <section className="py-24 overflow-x-clip"
        style={{cursor: `url(${cursoryou.src}), auto`}}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignscope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="absolute -left-32 top-16 hidden lg:block"
                    drag
                >
                    <Image
                        src={designExample1Image}
                        alt="design example 1 img"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerscope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className=" absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightDesignscope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    className="absolute -right-64 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        alt="design example 2 img"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerscope}
                    initial={{ opacity: 0, y: 100, x: 275 }}
                    className=" absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ Open Source{" "}
                    </div>
                </div>
                <h1 className=" text-6xl md:text-7xl font-medium text-center mt-6 lg:text-8xl">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools should&apos;t slow down. Layers combines
                    powerful features with an intrutive interface with you in
                    your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
