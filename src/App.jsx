// src/App.jsx
import { useMemo, useState } from "react";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import VinhoCard from "./components/VinhoCard";
import VinhoModal from "./components/VinhoModal";
import { vinhos } from "./data/vinhos";

export default function App() {
  const [vinhoSelecionado, setVinhoSelecionado] = useState(null);
  const [busca, setBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("Todos");

  // Lista de tipos únicos derivada dos dados
  const tipos = useMemo(() => {
    const set = new Set(vinhos.map((v) => v.tipo).filter(Boolean));
    return Array.from(set).sort();
  }, []);

  // Aplica filtros de busca + tipo
  const vinhosFiltrados = useMemo(() => {
    return vinhos.filter((v) => {
      const matchTipo =
        tipoSelecionado === "Todos" || v.tipo === tipoSelecionado;
      const matchBusca =
        !busca.trim() ||
        v.nome.toLowerCase().includes(busca.trim().toLowerCase());
      return matchTipo && matchBusca;
    });
  }, [busca, tipoSelecionado]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-6">
        <Filtros
          tipos={tipos}
          tipoSelecionado={tipoSelecionado}
          setTipoSelecionado={setTipoSelecionado}
          busca={busca}
          setBusca={setBusca}
        />

        {/* Contador de resultados */}
        <p className="text-xs text-neutral-500 mb-3">
          {vinhosFiltrados.length}{" "}
          {vinhosFiltrados.length === 1 ? "vinho encontrado" : "vinhos encontrados"}
        </p>

        {vinhosFiltrados.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {vinhosFiltrados.map((vinho) => (
              <VinhoCard
                key={vinho.id}
                vinho={vinho}
                onClick={setVinhoSelecionado}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-neutral-500">
            <p className="text-4xl mb-2">🍷</p>
            <p className="font-medium">Nenhum vinho encontrado</p>
            <p className="text-xs mt-1">
              Tente outro termo ou remova os filtros
            </p>
            {(busca || tipoSelecionado !== "Todos") && (
              <button
                onClick={() => {
                  setBusca("");
                  setTipoSelecionado("Todos");
                }}
                className="mt-4 text-xs font-semibold text-vinho-800 underline hover:text-vinho-900"
              >
                Limpar filtros
              </button>
            )}
          </div>
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