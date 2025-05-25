import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SubscribeForm from "@/components/sections/SubscribeForm";
import Venue from "@/components/sections/Venue";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header logo="/gdg_cloud_hanoi.png" nav={[]} />
      <div className="flex flex-col pt-16">
        <Hero />
        <SubscribeForm />
        <Venue />
        <Footer />
      </div>
    </div>
  );
}
