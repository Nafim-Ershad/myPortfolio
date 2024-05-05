export type Project = {
    name: string,
    description: string, 
    s_desc: string, 
    src: string[],
    url: string
}

export interface Project_Card {
    project: Project
}