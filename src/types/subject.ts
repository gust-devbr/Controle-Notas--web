export interface Subject {
    id: number | string,
    name: string,
    grade1: number,
    grade2: number,
    average: number,
};

export interface SubjectProps {
    subjects: Subject[]
    title?: string
};

export interface FormData {
    name: string,
    grade1: string,
    grade2: string
};