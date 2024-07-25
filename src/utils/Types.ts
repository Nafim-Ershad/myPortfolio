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