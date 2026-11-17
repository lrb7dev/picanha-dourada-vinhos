// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-vinho-900 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col items-center gap-1">
        <span className="text-dourado-400 text-xs font-semibold tracking-[0.25em] uppercase">
          Picanha Dourada
        </span>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-center">
          Catálogo de Vinhos
        </h1>
        <p className="text-vinho-200 text-xs md:text-sm text-center mt-1">
          Toque em um vinho para ver detalhes
        </p>
      </div>
    </header>
  );
}