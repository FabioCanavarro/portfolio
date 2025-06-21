export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    featured: boolean;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface Research {
    title: string;
    description: string;
    role: string;
}