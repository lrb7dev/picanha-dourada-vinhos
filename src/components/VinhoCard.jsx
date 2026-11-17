// src/components/VinhoCard.jsx
export default function VinhoCard({ vinho, onClick }) {
  return (
    <button
      onClick={() => onClick(vinho)}
      className="group text-left w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-dourado-400 flex flex-col"
    >
      {/* Imagem mais compacta (proporção 4:5) */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={vinho.imagem}
          alt={vinho.nome}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge de disponibilidade menor */}
        <span
          className={`absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm ${
            vinho.disponivel
              ? "bg-emerald-500 text-white"
              : "bg-neutral-500 text-white"
          }`}
        >
          {vinho.disponivel ? "Disponível" : "Indisponível"}
        </span>
      </div>

      {/* Informações mais compactas */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-serif text-sm sm:text-base font-bold text-vinho-900 leading-tight line-clamp-2">
          {vinho.nome}
        </h3>
        <div className="mt-auto pt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-[11px] sm:text-xs">
          <span className="text-neutral-500 truncate">
            {vinho.uva} · {vinho.safra}
          </span>
          <span className="font-mono font-semibold text-vinho-700 bg-vinho-50 px-1.5 py-0.5 rounded w-fit">
            {vinho.codigo}
          </span>
        </div>
      </div>
    </button>
  );
}