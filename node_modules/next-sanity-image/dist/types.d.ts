import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { ImageLoader } from 'next/image';
export { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
export declare type UseNextSanityImageDimensions = {
    width: number;
    height: number;
    aspectRatio: number;
};
export declare type UseNextSanityImageBuilderOptions = {
    width: number | null;
    originalImageDimensions: UseNextSanityImageDimensions;
    croppedImageDimensions: UseNextSanityImageDimensions;
    quality: number | null;
};
export declare type UseNextSanityBlurUpImageBuilderOptions = {
    width: number | null;
    originalImageDimensions: UseNextSanityImageDimensions;
    croppedImageDimensions: UseNextSanityImageDimensions;
    quality: number | null;
    blurAmount: number | null;
};
export declare type UseNextSanityImageBuilderBase<Options> = (imageUrlBuilder: ImageUrlBuilder, options: Options) => ImageUrlBuilder;
export declare type UseNextSanityImageBuilder = UseNextSanityImageBuilderBase<UseNextSanityImageBuilderOptions>;
export declare type UseNextSanityBlurUpImageBuilder = UseNextSanityImageBuilderBase<UseNextSanityBlurUpImageBuilderOptions>;
export declare type UseNextSanityImageOptions = {
    imageBuilder?: UseNextSanityImageBuilder;
    blurUpImageBuilder?: UseNextSanityBlurUpImageBuilder;
    blurUpImageQuality?: number;
    blurUpImageWidth?: number;
    blurUpAmount?: number;
    enableBlurUp?: true | false;
};
export declare type UseNextSanityImageProps = {
    loader: ImageLoader;
    src: string;
    width: number;
    height: number;
    blurDataURL?: string;
    placeholder: string;
};
