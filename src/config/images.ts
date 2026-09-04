import imagesData from "./images.json";

/**
 * Automatically converts a Google Drive preview share link into a direct CDN image link.
 * If already a direct link or local path, returns it as-is.
 */
export function resolveImageUrl(urlOrPath: string): string {
  if (!urlOrPath) return "";

  // 1. If Google Drive share link: https://drive.google.com/file/d/FILE_ID/view...
  const driveMatch = urlOrPath.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }

  // 2. If Google Drive open link: https://drive.google.com/open?id=FILE_ID
  const driveIdMatch = urlOrPath.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (urlOrPath.includes("drive.google.com") && driveIdMatch && driveIdMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveIdMatch[1]}`;
  }

  // 3. If standard direct URL, Google UserContent, or local path (/images/...)
  return urlOrPath;
}

/**
 * Resolves any YouTube URL (standard, youtu.be, or embed) into an embeddable iframe URL.
 */
export function resolveVideoEmbedUrl(url: string): string {
  if (!url) return "";

  // 1. If youtu.be/ID
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch && youtuBeMatch[1]) {
    return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
  }

  // 2. If youtube.com/watch?v=ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (url.includes("youtube.com") && watchMatch && watchMatch[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  return url;
}

export const siteImages = imagesData;
export default siteImages;
