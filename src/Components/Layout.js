import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <main className="wrapper">
      <Navbar />
      {children}
    </main>
  );
}
