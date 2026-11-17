// src/components/Filtros.jsx
export default function Filtros({
  tipos,
  tipoSelecionado,
  setTipoSelecionado,
  busca,
  setBusca,
}) {
  return (
    <div className="mb-5 space-y-3">
      {/* Busca */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">
          🔍
        </span>
        <input
          type="text"
          placeholder="Buscar vinho por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-white border border-neutral-200 rounded-xl pl-9 pr-9 py-2.5 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-dourado-400 focus:border-transparent"
        />
        {busca && (
          <button
            onClick={() => setBusca("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-vinho-800 text-lg w-6 h-6 flex items-center justify-center"
            aria-label="Limpar busca"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filtros por tipo */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        <BotaoFiltro
          ativo={tipoSelecionado === "Todos"}
          onClick={() => setTipoSelecionado("Todos")}
        >
          Todos
        </BotaoFiltro>
        {tipos.map((tipo) => (
          <BotaoFiltro
            key={tipo}
            ativo={tipoSelecionado === tipo}
            onClick={() => setTipoSelecionado(tipo)}
          >
            {tipo}
          </BotaoFiltro>
        ))}
      </div>
    </div>
  );
}

function BotaoFiltro({ ativo, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
        ativo
          ? "bg-vinho-900 text-white border-vinho-900"
          : "bg-white text-vinho-900 border-neutral-200 hover:border-vinho-900"
      }`}
    >
      {children}
    </button>
  );
}