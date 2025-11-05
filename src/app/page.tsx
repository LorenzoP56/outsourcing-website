import Hero from "@/components/sections/Home/Hero";
import Group from "@/components/sections/Home/Group";
import Servizi from "@/components/sections/Home/Servizi";
import Esternalizzare from "@/components/sections/Home/Esternalizzare";
import Certificazioni from "@/components/sections/Home/Certificazioni";

export default function Home() {
  return (
    <>
      <Hero />
      <Group />
      <Servizi />
      <Esternalizzare />  
      <Certificazioni />
    </>
  );
}
