import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error404 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-2xl text-center">
                {/* 404 Number - Bouncing Animation */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", damping: 12 }}
                >
                    <motion.h1
                        className="text-9xl font-bold text-indigo-600 opacity-90"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                        404
                    </motion.h1>
                </motion.div>

                {/* Error Message - Stagger Fade In */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                </motion.div>

                <motion.p
                    className="text-xl text-gray-600 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>

                <motion.p
                    className="text-gray-500 mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    It might have been moved or deleted. Let's get you back to school!
                </motion.p>

                {/* Action Buttons - Slide Up */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <Link
                        to="/"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30"
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-white hover:bg-gray-50 text-indigo-600 font-semibold px-8 py-3 border-2 border-indigo-600 transition-all duration-200 transform hover:scale-105 shadow-md"
                    >
                        Contact Us
                    </Link>
                </motion.div>

                {/* School Logo - Glow Animation */}
                <motion.div
                    className="mt-8 text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.9 }}
                >
                    <motion.p
                        className="text-sm font-semibold"
                        animate={{ textShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 10px rgba(79, 70, 229, 0.3)", "0 0 0px rgba(79, 70, 229, 0)"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    >
                        St. Andrews International School
                    </motion.p>
                    <motion.p
                        className="text-xs mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 2.1 }}
                    >
                        Empowering Students Since 1983
                    </motion.p>
                </motion.div>
            </div>

            {/* Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-16 h-16 bg-indigo-200/30 rounded-full"
                    animate={{ x: [0, 30, 0], y: [0, 20, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-12 h-12 bg-blue-200/30 rounded-full"
                    animate={{ x: [0, -25, 0], y: [0, -15, 0], rotate: [360, 180, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-30 left-1/4 w-14 h-14 bg-indigo-300/20 rounded-full"
                    animate={{ x: [0, 20, -20, 0], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-1/3 w-10 h-10 bg-blue-300/25 rounded-full"
                    animate={{ x: [0, -15, 15, 0], y: [0, 25, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default Error404;