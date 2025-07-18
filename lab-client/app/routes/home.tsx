import { Top } from "../pages/top";

export function meta() {
  return [
    { title: "Hashikuchi's Lab" },
    { name: "description", content: "Welcome to Hashikuchi's Lab!" },
  ];
}

export default function Home() {
  return <Top />;
}
