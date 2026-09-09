import { useResolvedImage } from "@/hooks/useSiteImage";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  source: string | null | undefined;
  fallback?: string;
  alt: string;
};

/** Image that accepts either a public URL or a storage path in the site-images bucket. */
const SiteImage = ({ source, fallback = "", alt, ...rest }: Props) => {
  const src = useResolvedImage(source, fallback);
  if (!src) return null;
  return <img src={src} alt={alt} {...rest} />;
};

export default SiteImage;
