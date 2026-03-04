export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[var(--background)]">
      <div className="max-w-md w-full text-center space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <img 
          src="foto-mini-bio.jpeg" 
          alt="Foto de Ricardo Filipe"
          width="180"
          height="180"
          className="mx-auto rounded-full border-4 border-blue-500 object-cover"
        />
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Ricardo Filipe Melo França</h1>
          <p className="text-blue-600 dark:text-blue-400 font-medium">Estudante de Ciência da Computação</p>
        </div>

        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Tenho 23 anos e estou cursando o 5º período de Ciência da Computação. 
          Antes de iniciar esta graduação, cursei Engenharia de Telecomunicações. 
          Sou amante de esportes e acompanho, principalmente, futebol, futebol americano e corridas.
        </p>
      </div>
    </main>
  );
}