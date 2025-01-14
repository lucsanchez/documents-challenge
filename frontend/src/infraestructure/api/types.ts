export interface ApiDocumentResponse {
  ID: string;
  Title: string;
  Version: string;
  CreatedAt: string;
  UpdatedAt: string;
  Attachments: string[];
  Contributors: ApiContributorResponse[];
}

export interface ApiContributorResponse {
  ID: string;
  Name: string;
}
