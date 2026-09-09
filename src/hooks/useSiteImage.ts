import { useQuery } from "@tanstack/react-query";
import { getNamedSiteImage, resolveImageSrc } from "@/lib/siteImages";

/** Named site image (from the site_images table), with a static fallback. */
export const useSiteImage = (key: string, fallback: string) => {
  const { data } = useQuery({
    queryKey: ["site_image", key],
    queryFn: () => getNamedSiteImage(key),
    staleTime: 5 * 60 * 1000,
  });
  return data || fallback;
};

/** Resolves an image reference that may be a URL or a storage path. */
export const useResolvedImage = (value: string | null | undefined, fallback = "") => {
  const { data } = useQuery({
    queryKey: ["resolved_image", value],
    queryFn: () => resolveImageSrc(value),
    enabled: !!value,
    staleTime: 5 * 60 * 1000,
  });
  return data || (value && /^(https?:\/\/|\/)/i.test(value) ? value : fallback);
};
