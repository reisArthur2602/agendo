import { Navbar } from "./components/navbar";
import { Container } from "@/components/ui/container";

import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

import { HomeSections } from "./components/sections";

const Home = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="grid">
      <Navbar />

      <HomeSections />


      <footer className="border-t border-muted/50 py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Agendo</h3>
              <p className="text-muted-foreground text-sm">
                Plataforma de agendamentos via WhatsApp para comércios, clínicas
                e prestadores de serviço. Simples, automática e eficiente.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold">Produto</h3>
              <nav aria-label="Product Navigation">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#features"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Funcionalidades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Planos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Como funciona
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demo"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Ver demonstração
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold">Recursos</h3>
              <nav aria-label="Resources Navigation">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/docs"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Documentação
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Perguntas frequentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/suporte"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Suporte
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold">Empresa</h3>
              <nav aria-label="Company Navigation">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/sobre"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Sobre nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contato"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politica-privacidade"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Política de privacidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/termos"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Termos de uso
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Agendo. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram />
              </Link>
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github />
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
