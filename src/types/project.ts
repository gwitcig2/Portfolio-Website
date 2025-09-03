/**
 * Defines how to structure a metadata entry for one of my projects.
 *
 * id: identifier to route to so that <ProjectShowcase /> knows what project to display
 * title: title of the project
 * description: holds one or more paragraphs articulating my project and what I learned from it
 * skills: a list of skills I learned from the project
 * images: holds image URLs so that I can show a gallery of images for my projects
 *
 */
export type Project = {
    id: string;
    title: string;
    description: string;
    skills: string[];
    images: string[];
}