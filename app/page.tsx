import ReportForm from "@/components/ReportForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-wide text-blue-700">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden="true" />
            SECURITY RESEARCH TOOLKIT
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Security Report Generator
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Turn vulnerability notes into structured security reports.
          </p>
        </header>
        <ReportForm />
      </div>
    </main>
  );
}
