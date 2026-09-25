"use client";

import { useState } from "react";

type ReportPreviewProps = {
  markdown: string;
  onClear: () => void;
};

export default function ReportPreview({ markdown, onClear }: ReportPreviewProps) {
  const [copied, setCopied] = useState(false);

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Generated output</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Security report</h2>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={onClear} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">Clear</button>
          <button type="button" onClick={copyMarkdown} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">{copied ? "Copied" : "Copy Markdown"}</button>
        </div>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap p-6 font-mono text-sm leading-7 text-slate-700">{markdown}</pre>
    </section>
  );
}