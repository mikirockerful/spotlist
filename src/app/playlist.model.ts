interface CoverImage {
    height: number,
    width: number,
    url: string
}

export interface Playlist {
    id: string;
    name: string;
    description: string;
    uri: string;
    images: Array<CoverImage>
}