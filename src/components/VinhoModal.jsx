// src/components/VinhoModal.jsx
import { useEffect } from "react";

export default function VinhoModal({ vinho, onClose }) {
  // Fecha ao apertar ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    // Bloqueia scroll do fundo
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!vinho) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 animate-[fadeIn_.2s_ease-out]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        {/* Imagem */}
        <div className="relative aspect-video bg-neutral-100">
          <img
            src={vinho.imagem}
            alt={vinho.nome}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-vinho-900 w-9 h-9 rounded-full flex items-center justify-center shadow-md text-lg font-bold"
          >
            ✕
          </button>
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
              vinho.disponivel
                ? "bg-emerald-500 text-white"
                : "bg-neutral-500 text-white"
            }`}
          >
            {vinho.disponivel ? "Disponível" : "Indisponível"}
          </span>
        </div>

        {/* Conteúdo */}
        <div className="p-5 sm:p-6">
          <h2 className="font-serif text-2xl font-bold text-vinho-900 leading-tight">
            {vinho.nome}
          </h2>

          <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600">
            {vinho.uva && (
              <span className="bg-neutral-100 px-2 py-1 rounded">🍇 {vinho.uva}</span>
            )}
            {vinho.safra && (
              <span className="bg-neutral-100 px-2 py-1 rounded">📅 Safra {vinho.safra}</span>
            )}
            {vinho.pais && (
              <span className="bg-neutral-100 px-2 py-1 rounded">🌎 {vinho.pais}</span>
            )}
          </div>

          {vinho.observacao && (
            <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
              {vinho.observacao}
            </p>
          )}

          {/* Código em destaque */}
          <div className="mt-5 bg-vinho-900 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <p className="text-vinho-200 text-[10px] uppercase tracking-widest font-semibold">
                Código do vinho
              </p>
              <p className="text-dourado-400 font-mono text-2xl font-bold tracking-wider mt-0.5">
                {vinho.codigo}
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard?.writeText(vinho.codigo)}
              className="bg-dourado-500 hover:bg-dourado-600 text-vinho-950 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-colors"
            >
              Copiar
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 text-center mt-4">
            Informe este código ao atendente para solicitar
          </p>
        </div>
      </div>
    </div>
  );
}