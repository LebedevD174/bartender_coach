export type Feature = {
  id: number;
  title: string;
};

export type FeatureID = Feature['id'];

export type FeatureType = {
  features: Feature[];
  error: string | undefined;
};
