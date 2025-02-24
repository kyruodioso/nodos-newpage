export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import ContactSection from "@/components/contact";
import FAQSection from "@/components/faq";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Testimonials />
      <Workflows />
      <Cta />
      <FAQSection/>
      <ContactSection />
    </>
  );
}
