// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import VinhoCard from "./components/VinhoCard";
import VinhoModal from "./components/VinhoModal";
import { vinhos } from "./data/vinhos";

export default function App() {
  const [vinhoSelecionado, setVinhoSelecionado] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {vinhos.map((vinho) => (
            <VinhoCard
              key={vinho.id}
              vinho={vinho}
              onClick={setVinhoSelecionado}
            />
          ))}
        </div>

        {vinhos.length === 0 && (
          <p className="text-center text-neutral-500 py-12">
            Nenhum vinho cadastrado.
          </p>
        )}
      </main>

      <footer className="text-center text-xs text-neutral-400 py-8">
        © Picanha Dourada · Catálogo de Vinhos
      </footer>

      {vinhoSelecionado && (
        <VinhoModal
          vinho={vinhoSelecionado}
          onClose={() => setVinhoSelecionado(null)}
        />
      )}
    </div>
  );
}