"use client";

import { Card } from "./ui/card";
import { SubjectProps } from "@/types/subject";

export default function SubjectItem({ subjects }: SubjectProps) {

    return (
        <Card className="max-h-75 overflow-y-auto space-y-2 p-3 rounded-md">
            <Card.Header>
                <Card.Title>Matérias</Card.Title>
            </Card.Header>

            <hr className="mt-1 mb-3" />

            {subjects.map(subject => (
                <Card.Content className="flex flex-col gap-1" key={subject.id}>
                    <Card.Title>{subject.name}</Card.Title>
                    <Card.Description className="text-md">
                        Nota 1: {subject.grade1}</Card.Description>
                    <Card.Description className="text-md">
                        Nota 2: {subject.grade2}</Card.Description>
                </Card.Content>
            ))}
        </Card>
    )
};