export interface Giphy {
  id: string;
  title: string;
  url: string;
  bitly_url: string;
  rating: string;
  username: string;
  embed_url: string;
  source: string;
  images: {
    fixed_height: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    original: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
    downsized: {
      url: string;
      width: string;
      height: string;
      size: string;
    };
  };
}

export interface GiphyBaseRequest {
  limit: number;
  offset: number;
  rating?: string;
  fmt?: string;
}

export interface GiphySearchPayload extends GiphyBaseRequest {
  q?: string;
}

export interface GiphyPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface GiphyMeta {
  status: number;
  msg: string;
  response_id: string;
}

export interface GiphyResponse {
  data: Array<Giphy>;
  pagination: GiphyPagination;
  meta: GiphyMeta;
}
