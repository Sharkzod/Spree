import { WaitlistProvider } from "@/context/WaitlistContext";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Drops from "@/components/landing/Drops";
import HowItWorks from "@/components/landing/HowItWorks";
import Delivery from "@/components/landing/Delivery";
import Waitlist from "@/components/landing/Waitlist";
import Countdown from "@/components/landing/Countdown";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <WaitlistProvider>
      <Nav />
      <Hero />
      <Marquee />
      <Drops />
      <HowItWorks />
      <Delivery />
      <Waitlist />
      <Countdown />
      <Faq />
      <Footer />
    </WaitlistProvider>
  );
}
