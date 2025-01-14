export interface Document {
  id: string;
  title: string;
  version: string;
  created_at: string;
  updated_at: string;
  attachments: string[];
  contributors: Contributor[];
}

export interface Contributor {
  id: string;
  name: string;
}
