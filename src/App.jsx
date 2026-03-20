import Hero from "./components/Hero";
import NavBar from "./components/Navbar/NavBar";
import Ranking from "./components/Ranking";

function App() {
  return (
    <main className="flex p-6 bg-zinc-950 min-h-dvh flex-col items-center gap-6">
      <Hero />
      <Ranking />
      <NavBar />
    </main>
  );
}

export default App;
