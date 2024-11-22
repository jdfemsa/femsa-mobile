type CharacterStatus = "Alive" | "Dead" | "unknown";
type CharacterGender = "Male" | "Female" | "unknown" | "other";
type CharacterSpecies =
  | "Humanoid"
  | "Alien"
  | "Robot"
  | "Human"
  | "Mythological Creature"
  | "Animal"
  | "unknown";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: CharacterSpecies;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

type APIInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type APIResponse = {
  info: APIInfo;
  results: Character[];
};

export type BaseType = {
  name: string;
  image: string;
};
export type Origin = BaseType;
export type Location = BaseType;
