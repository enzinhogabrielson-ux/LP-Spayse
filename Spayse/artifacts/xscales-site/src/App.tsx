import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Solucoes from "@/pages/Solucoes";
import Mercados from "@/pages/Mercados";
import MercadoBrasil from "@/pages/MercadoBrasil";
import MercadoMexico from "@/pages/MercadoMexico";
import MercadoColombia from "@/pages/MercadoColombia";
import MercadoPeru from "@/pages/MercadoPeru";
import MercadoChile from "@/pages/MercadoChile";
import MercadoArgentina from "@/pages/MercadoArgentina";
import MercadoCostaRica from "@/pages/MercadoCostaRica";
import MercadoEquador from "@/pages/MercadoEquador";
import MercadoGuatemala from "@/pages/MercadoGuatemala";
import MercadoOutros from "@/pages/MercadoOutros";
import Desenvolvedores from "@/pages/Desenvolvedores";
import Parceiros from "@/pages/Parceiros";
import Sobre from "@/pages/Sobre";
import Midia from "@/pages/Midia";
import Seguranca from "@/pages/Seguranca";
import Compliance from "@/pages/Compliance";
import Contato from "@/pages/Contato";
import Privacidade from "@/pages/Privacidade";
import Termos from "@/pages/Termos";
import Ouvidoria from "@/pages/Ouvidoria";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

declare global {
  interface Window {
    __PREVENT_SCROLL_TOP__?: boolean;
  }
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (window.__PREVENT_SCROLL_TOP__) {
      window.__PREVENT_SCROLL_TOP__ = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function PageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return (
    <motion.div
      key={location}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#050816' }}>
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col">
        <PageTransition>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/solucoes" component={Solucoes} />
            <Route path="/mercados" component={Mercados} />
            <Route path="/mercados/brasil" component={MercadoBrasil} />
            <Route path="/mercados/mexico" component={MercadoMexico} />
            <Route path="/mercados/colombia" component={MercadoColombia} />
            <Route path="/mercados/peru" component={MercadoPeru} />
            <Route path="/mercados/chile" component={MercadoChile} />
            <Route path="/mercados/argentina" component={MercadoArgentina} />
            <Route path="/mercados/costa-rica" component={MercadoCostaRica} />
            <Route path="/mercados/equador" component={MercadoEquador} />
            <Route path="/mercados/guatemala" component={MercadoGuatemala} />
            <Route path="/mercados/outros-mercados" component={MercadoOutros} />
            <Route path="/desenvolvedores" component={Desenvolvedores} />
            <Route path="/parceiros" component={Parceiros} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/midia" component={Midia} />
            <Route path="/seguranca" component={Seguranca} />
            <Route path="/compliance" component={Compliance} />
            <Route path="/contato" component={Contato} />
            <Route path="/privacidade" component={Privacidade} />
            <Route path="/termos" component={Termos} />
            <Route path="/ouvidoria" component={Ouvidoria} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
