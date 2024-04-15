export type Barware = {
    id: number;
    title: string;
    description: string;
    img: string;
  };

export type BarwareType = {
    barwares: Barware[];
    error: string | undefined;
}