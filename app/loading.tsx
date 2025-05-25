"use client";
import { useRive } from "@rive-app/react-canvas";

export default function Loading() {
  const { RiveComponent } = useRive({
    src: "/animations/loading.riv",
    stateMachines: "loading",
    autoplay: true,
  });

  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <div
        style={{
          height: "48px",
          width: "400px",
        }}
      >
        <RiveComponent />
      </div>
    </div>
  );
}
