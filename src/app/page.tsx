// src/app/page.tsx
import GradualBlur from "@/components/GradualBlur";

export default function HomePage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <GradualBlur className="text-4xl text-white">Home</GradualBlur>
    </main>
  );
}