"use client";

import React from "react";
import { Card } from "./ui/card";

interface ChildrenProps {
    children: React.ReactNode
};

export default function SubjectForm({ children }: ChildrenProps) {
    return (
        <Card>
            <Card.Title className="ml-5 mt-3">Adicionar Matéria</Card.Title>

            <hr className="mt-4 mb-3" />

            <Card.Content className="flex flex-1 flex-row gap-2 justify-between py-2">
                {children}
            </Card.Content>
        </Card>
    )
};