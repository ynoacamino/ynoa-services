export type CreateLink = {
  ShortUrl: string,
  OriginalUrl: string,
  Public: boolean
};

export type Link = {
  ShortUrl: string,
  OriginalUrl: string,
  Public: boolean,

  UrlID: string,
  UserID: string,
  CreadtedAt: string,
  UpdatedAt: string
};

export type UpdateLink = {
  UrlID: string,
  ShortUrl: string,
  Public: boolean
};

export type DeleteLink = {
  UrlID: string
};
