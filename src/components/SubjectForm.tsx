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

            <Card.Content className="grid grid-cols-3 gap-2 justify-between py-2 md:flex md:flex-1 md:flex-row">
                {children}
            </Card.Content>
        </Card>
    )
};