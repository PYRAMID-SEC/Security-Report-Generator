"use client";

import { FormEvent, useState } from "react";
import ReportPreview from "@/components/ReportPreview";

type ReportFields = {
  title: string;
  target: string;
  severity: string;
  description: string;
  steps: string;
  impact: string;
  remediation: string;
};

const emptyFields: ReportFields = { title: "", target: "", severity: "", description: "", steps: "", impact: "", remediation: "" };

function buildMarkdown(fields: ReportFields) {
  return `# ${fields.title}

## Summary
${fields.description}

## Severity
${fields.severity}

## Target
${fields.target}

## Steps to Reproduce

${fields.steps}

## Impact
${fields.impact}

## Remediation
${fields.remediation}`;
}

const inputClassName = "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function ReportForm() {
  const [fields, setFields] = useState<ReportFields>(emptyFields);
  const [markdown, setMarkdown] = useState("");

  function updateField(field: keyof ReportFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
  }

  function generateReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMarkdown(buildMarkdown(fields));
  }

  function clearReport() {
    setFields(emptyFields);
    setMarkdown("");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
      <form onSubmit={generateReport} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7 border-b border-slate-200 pb-5"><h2 className="text-xl font-semibold text-slate-950">Vulnerability details</h2><p className="mt-1 text-sm text-slate-500">Add the details you want included in your report.</p></div>
        <div className="space-y-5">
          <label className="block text-sm font-semibold text-slate-800">Vulnerability Title<input required value={fields.title} onChange={(event) => updateField("title", event.target.value)} className={inputClassName} placeholder="e.g. Image Upload Limit Bypass" /></label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-800">Target<input required value={fields.target} onChange={(event) => updateField("target", event.target.value)} className={inputClassName} placeholder="e.g. example.com" /></label>
            <label className="block text-sm font-semibold text-slate-800">Severity<select required value={fields.severity} onChange={(event) => updateField("severity", event.target.value)} className={inputClassName}><option value="" disabled>Select severity</option><option>Critical</option><option>High</option><option>Medium</option><option>Low</option><option>Informational</option></select></label>
          </div>
          <label className="block text-sm font-semibold text-slate-800">Description<textarea required value={fields.description} onChange={(event) => updateField("description", event.target.value)} className={`${inputClassName} min-h-28 resize-y`} placeholder="Describe the vulnerability and where it occurs." /></label>
          <label className="block text-sm font-semibold text-slate-800">Steps to Reproduce<textarea required value={fields.steps} onChange={(event) => updateField("steps", event.target.value)} className={`${inputClassName} min-h-36 resize-y`} placeholder={"1. Submit a request...\n2. Observe the response..."} /></label>
          <label className="block text-sm font-semibold text-slate-800">Impact<textarea required value={fields.impact} onChange={(event) => updateField("impact", event.target.value)} className={`${inputClassName} min-h-28 resize-y`} placeholder="Explain what an attacker can achieve." /></label>
          <label className="block text-sm font-semibold text-slate-800">Remediation<textarea required value={fields.remediation} onChange={(event) => updateField("remediation", event.target.value)} className={`${inputClassName} min-h-28 resize-y`} placeholder="Describe the recommended fix." /></label>
        </div>
        <button type="submit" className="mt-7 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Generate Report</button>
      </form>
      {markdown ? <ReportPreview markdown={markdown} onClear={clearReport} /> : <div className="flex min-h-72 flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center lg:min-h-[34rem]"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700" aria-hidden="true">#</div><h2 className="mt-5 text-lg font-semibold text-slate-900">Your report will appear here</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Complete the fields and generate a clean Markdown report ready to share.</p></div>}
    </div>
  );
}