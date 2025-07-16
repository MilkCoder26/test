const MarqueeRow = ({
  direction = "left",
  children,
}: {
  direction?: "left" | "right";
  children: React.ReactNode;
}) => {
  const animationClass =
    direction === "left" ? "animate-marqueeLeft" : "animate-marqueeRight";

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max ${animationClass}`}>
        {children}
        {children /* duplicate for seamless looping */}
      </div>
    </div>
  );
};

export default MarqueeRow;
