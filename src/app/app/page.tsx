import { CssGridBackground } from "@/components/ui/css-grid-background";
import { Navbar } from "./components/navbar";
import { FramerSpotlight } from "@/components/ui/framer-spotlight";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FeaturesSection } from "./components/features-section";


const Home = () => {
  return <div className="grid">
    <Navbar/>

    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <CssGridBackground />
          <FramerSpotlight />

          <Container >

            <div className="flex flex-col gap-8 items-center text-center max-w-3xl mx-auto">

              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm ">Solução para seus agendamentos</div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Gerencie seu agendamentos com facilidade
              </h1>

              <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl ">
              Plataforma completa para profissionais que querem organizar sua agenda, automatizar confirmações e oferecer a melhor experiência para seus clientes.
              </p>


              <div className="flex flex-wrap justify-center gap-3 ">
                <Button size='lg'>
                Começar Grátis
                </Button>
                <Button variant='outline' size='lg'>
                  Leia mais
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">Grátis por 14 dias • Sem cartão de crédito</p>
            </div>

          </Container>

    </section>

    <FeaturesSection/>

  </div>;
};

export default Home;
