import Hero from "./components/Hero";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <main className="flex p-6 bg-gray-950 min-h-dvh flex-col items-center gap-6">
      <Hero />
      <NavBar />
    </main>
  );
}

export default App;
