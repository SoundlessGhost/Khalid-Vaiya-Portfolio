"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RoundBallDoorScene() {
  const ball = useAnimation();
  const door = useAnimation();
  const backdrop = useAnimation();

  useEffect(() => {
    (async () => {
      await ball.start({ scale: 1, opacity: 1, transition: { duration: 0.4 } });
      await ball.start({
        scale: 18,
        transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
      });
      await ball.start({
        scale: [18, 17.2, 18],
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      await door.start({
        scaleY: 1,
        transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] },
      });
      backdrop.start({ opacity: 0.4, transition: { duration: 0.4 } });
      await ball.start({
        scale: 1.2,
        x: "22vw",
        y: "10vh",
        transition: { duration: 0.6 },
      });
      await ball.start({
        scale: 0.3,
        y: "18vh",
        transition: { duration: 0.5 },
      });
      await ball.start({ opacity: 0, transition: { duration: 0.25 } });
    })();
  }, [ball, door, backdrop]);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
      <motion.div
        animate={backdrop}
        className="absolute inset-0 bg-black"
        style={{ opacity: 0 }}
      />

      <motion.div
        initial={{ scaleY: 0 }}
        animate={door}
        className="absolute right-[10vw] top-[20vh] h-[50vh] w-[22vw] origin-top rounded-t-[1000px] rounded-b-[24px] border border-slate-200 bg-white/90 shadow-2xl backdrop-blur"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/60 to-slate-200/60" />
        <div className="absolute left-2 top-1/3 h-8 w-1 rounded bg-slate-400/60" />
        <div className="absolute left-2 top-1/2 h-8 w-1 rounded bg-slate-400/60" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={ball}
        className="absolute left-[18vw] top-[40vh] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #8ef3c5, #34d399 45%, #10b981 70%)",
          boxShadow:
            "0 20px 40px rgba(16,185,129,0.35), inset -8px -12px 24px rgba(0,0,0,0.15)",
        }}
      />

      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
        animate={{ y: [-6, 10, -6], x: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl"
        animate={{ y: [8, -10, 8], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
