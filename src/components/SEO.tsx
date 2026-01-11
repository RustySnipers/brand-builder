import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  noIndex = false,
}: SEOProps) {
  const siteName = "J. Brand Technologies";
  const siteUrl = "https://jbrandtech.com";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const defaultOgImage = `${siteUrl}/og-image.png`;
  const ogImageUrl = image || defaultOgImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      {/* TODO: Replace with proper 1200x630 PNG for better social sharing */}
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Geo Tags */}
      <meta name="geo.region" content="US-MI" />
      <meta name="geo.placename" content="Sanford" />
    </Helmet>
  );
}
