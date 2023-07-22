import { SanityClientLike, SanityImageSource } from '@sanity/image-url/lib/types/types';
import { UseNextSanityImageDimensions, UseNextSanityImageOptions, UseNextSanityImageProps } from './types';
export declare const DEFAULT_BLUR_UP_IMAGE_WIDTH = 64;
export declare const DEFAULT_BLUR_UP_IMAGE_QUALITY = 30;
export declare const DEFAULT_BLUR_UP_AMOUNT = 50;
export declare const DEFAULT_FALLBACK_IMAGE_QUALITY = 75;
export declare function getImageDimensions(id: string): UseNextSanityImageDimensions;
export declare function getCroppedDimensions(image: SanityImageSource, baseDimensions: UseNextSanityImageDimensions): UseNextSanityImageDimensions;
export declare function useNextSanityImage(sanityClient: SanityClientLike, image: null, options?: UseNextSanityImageOptions): null;
export declare function useNextSanityImage(sanityClient: SanityClientLike, image: SanityImageSource, options?: UseNextSanityImageOptions & {
    enableBlurUp?: true;
}): Required<UseNextSanityImageProps> & {
    placeholder: 'blur';
};
export declare function useNextSanityImage(sanityClient: SanityClientLike, image: SanityImageSource, options?: UseNextSanityImageOptions & {
    enableBlurUp?: false;
}): Omit<UseNextSanityImageProps, 'blurDataURL'> & {
    placeholder: 'empty';
};
export declare function useNextSanityImage(sanityClient: SanityClientLike, image: SanityImageSource, options?: UseNextSanityImageOptions): UseNextSanityImageProps;
