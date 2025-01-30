import "./globals.css";
import Topo from "./componentes/Topo/Topo";

export const metadata = {
  title: "Navegancao",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
