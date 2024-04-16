export type Tech = {
    id: number,
    title: string,
    description: string,
    img: string,
  }
export type TechType = {
    techs: Tech[];
    error: string | undefined;
}