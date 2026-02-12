"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';
import { SubjectProps } from '@/types/subject';
import { Card } from './ui/card';

export default function GradesChart({ subjects, title }: SubjectProps) {
    return (
        <Card>
            <Card.Content className='w-full h-75'>
                <Card.Title className='mb-8 mt-4'>{title}</Card.Title>

                <ResponsiveContainer className="-ml-6 w-full h-full">
                    <BarChart data={subjects}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Bar
                            dataKey="average"
                            fill="#3b82f6"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Card.Content>
        </Card>
    )
};