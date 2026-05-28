export interface PersonaAttribute {
  id: number;
  name: string;
  level: number;
}

export interface Persona {
  id: number;
  user_id?: number | null;
  name: string;
  story: string;
  category_id: number;
  category: string | null;
  share: string;
  attributes: PersonaAttribute[];
}

export interface PersonaPayload {
  name: string;
  story: string;
  category_id: number;
  share: string;
  attributes: PersonaAttribute[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Attribute {
  id: number;
  name: string;
}
