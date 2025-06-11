import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGig(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    };
  }

  static mapGiphyItemsToGifArray( items: GiphyItem[] ):Gif[] {
    return items.map( this.mapGiphyItemToGig );
  }
}
