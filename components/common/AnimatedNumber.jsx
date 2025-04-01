import { useCountUp } from "@/hooks/useCountUp";

export default function AnimatedNumber({ isVisible, number, suffix }) {
  const count = useCountUp(number, 2000, isVisible);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
