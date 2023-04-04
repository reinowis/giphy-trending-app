export const GIPHY_TRENDING_ENDPOINT = '/trending';
export const GIPHY_SEARCH_ENDPOINT = '/search';
export const DEFAULT_GIPHY_QUERY = {
    offset: 0,
    limit: 10,
};

export enum GiphyBrowsingTypes {
    TRENDING = 'TRENDING',
    DEFAULT = 'DEFAULT',
}