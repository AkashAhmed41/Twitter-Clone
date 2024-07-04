import Auth from "@/components/auth/auth";

export default function Home() {
  const user = false;

  if (!user) return <Auth />;

  return <div>Twitter Clone</div>;
}
