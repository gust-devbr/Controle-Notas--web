"use client";

import { useState, useEffect } from "react";

import SubjectForm from "@/components/SubjectForm";
import SubjectItem from "@/components/SubjectItem";
import GradesChart from "@/components/GradesChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Subject } from "@/types/subject";
import { FormData } from "@/types/subject";

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [form, setForm] = useState<FormData>({
    name: "",
    grade1: "",
    grade2: ""
  });

  async function fetchSubjects() {
    const res = await fetch("/api/subjects");
    const data = await res.json();
    setSubjects(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSubjects()
  }, []);

  function handleChange(name: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!form.name || !form.grade1 || !form.grade2) return;
    
    await fetch("/api/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        grade1: Number(form.grade1),
        grade2: Number(form.grade2)
      })
    });

    setForm({
      name: "",
      grade1: "",
      grade2: ""
    });

    fetchSubjects();
  };

  const totalAverage =
    subjects.length > 0
      ? subjects.reduce((acc, sub) => acc + Number(sub.average), 0) / subjects.length
      : 0;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col p-6 pb-20 gap-10 bg-zinc-100">
        <h1 className="text-center -mb-3 text-3xl font-semibold font-serif">Controle de Notas</h1>

        <SubjectForm>
          <Input
            name="name"
            
            label="Matéria"
            className="w-full"
            value={form.name}
            onChange={(value) => handleChange("name", value)}
          />
          <Input
            name="grade1"
            label="Nota 1"
            className="w-full"
            value={form.grade1}
            onChange={(value) => handleChange("grade1", value)}
          />
          <Input
            name="grade2"
            label="Nota 2"
            className="w-full"
            value={form.grade2}
            onChange={(value) => handleChange("grade2", value)}
          />

          <Button
            type="submit"
            className="w-100 md:w-40">
            Adicionar
          </Button>

        </SubjectForm>

        <SubjectItem
          subjects={subjects}
        />

        <GradesChart
          title="Gráfico de Notas"
          subjects={subjects}
        />

        <h2 className="text-xl text-center">
          Média Total: {totalAverage.toFixed(1)}
        </h2>

      </div>
    </form>
  )
};