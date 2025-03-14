import "./globals.css";
import Topo from "./dComponenteTopo/Topo";
import ComponenteRodape from "./fComponenteRodape/page";

export const metadata = {
  title: "App Router Sorvetaria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
        <ComponenteRodape/>
      </body>
    </html>
  );
}
