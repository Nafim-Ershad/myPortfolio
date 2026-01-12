export type ProjectType = {
    name: string,
    s_desc: string,
    description: string,
    git: string
}

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    project: ProjectType
}

export type PortfolioType = {
    name: string,
    s_desc: string,
    description: string,
    src: string[],
    url: string,
    git: string
}

export interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
    data: PortfolioType
}

// Legacy Types
/*
export type Project = {
    name: string,
    description: string, 
    s_desc: string, 
    src: string[],
    url: string,
    git: string
}

export interface Project_Card {
    project: Project,
    num: number,
    current: number
}

export interface iComponentLoad {
    container: HTMLElement | Element | null;
    component: React.ReactNode;
}
*/