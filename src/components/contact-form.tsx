"use client";

import { useState } from "react";

type FormState = {
  company: string;
  name: string;
  email: string;
  stage: string;
  interest: string;
  challenge: string;
};

const initialState: FormState = {
  company: "",
  name: "",
  email: "",
  stage: "",
  interest: "",
  challenge: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("success");
      setMessage("Thanks. SmartQA will reply with next steps within one business day.");
      setForm(initialState);
      return;
    }

    setStatus("error");
    setMessage("Submission failed. Please email hello@smartqa.pro instead.");
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card rounded-[2.25rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company"
          value={form.company}
          onChange={(value) => setForm((current) => ({ ...current, company: value }))}
          required
        />
        <Field
          label="Name"
          value={form.name}
          onChange={(value) => setForm((current) => ({ ...current, name: value }))}
          required
        />
        <Field
          label="Work email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
          required
        />
        <Field
          label="Company stage"
          placeholder="Startup, scaleup, agency, enterprise"
          value={form.stage}
          onChange={(value) => setForm((current) => ({ ...current, stage: value }))}
        />
      </div>
      <div className="mt-5">
        <Field
          label="Interest"
          placeholder="Services, SmartQA Autopilot, or both"
          value={form.interest}
          onChange={(value) => setForm((current) => ({ ...current, interest: value }))}
        />
      </div>
      <div className="mt-5">
        <label className="block text-sm font-medium text-sand">
          Main QA challenge
          <textarea
            className="form-input mt-2 min-h-36 rounded-[1.75rem] px-5 py-4 text-sm"
            placeholder="Tell SmartQA what is slowing releases, where automation is fragile, or what you need to improve."
            value={form.challenge}
            onChange={(event) =>
              setForm((current) => ({ ...current, challenge: event.target.value }))
            }
            required
          />
        </label>
      </div>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Inquiry"}
        </button>
        <p className="text-sm text-muted">{message || "Typical response time: within one business day."}</p>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-sand">
      {label}
      <input
        type={type}
        className="form-input mt-2 h-13 rounded-full px-5 text-sm"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        required={required}
      />
    </label>
  );
}