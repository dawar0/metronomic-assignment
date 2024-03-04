import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <Header />
      {children}
    </Sidebar>
  );
}
