import ClientProvidersWrapper from "./ClientProvidersWrapper";
import "./globals.css";
import Link from "next/link";
import ClientProvider from "./GlobalRedux.tsx/ClientProvider";
import ClientNavbar from "./ClientNavbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvidersWrapper>
          <ClientProvider>
            <div className="overflow-hidden">
              <ClientNavbar />
              {children}
            </div>
          </ClientProvider>
        </ClientProvidersWrapper>
      </body>
    </html>
  );
}
