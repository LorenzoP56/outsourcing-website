import Hero from "@/components/sections/Home/Hero";
import Group from "@/components/sections/Home/Group";
import Servizi from "@/components/sections/Home/Servizi";
import Esternalizzare from "@/components/sections/Home/Esternalizzare";
import DomandeFrequenti from "@/components/layout/DomandeFrequenti";
import Form from "@/components/sections/Home/Form";
import Blog from "@/components/sections/Home/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Group />
      <Servizi />
      <Esternalizzare />  
      <Form />
      <DomandeFrequenti />
      <Blog />
    </>
  );
}
