export type Barware = {
    id: number;
    title: string;
    description: string;
    img: string;
  };

export type BarwareType = {
    barware: Barware[];
    error: string | undefined;
}