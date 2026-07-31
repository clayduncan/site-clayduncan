import type { CollectionEntry } from 'astro:content';

const CENTRAL_TIME_ZONE = 'America/Chicago';

function getDateKeyInTimeZone(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone,
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== 'literal')
      .map((part) => [part.type, part.value]),
  );

  return `${values.year}-${values.month}-${values.day}`;
}

export function getPublishDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getCentralTodayKey(now = new Date()) {
  return getDateKeyInTimeZone(now, CENTRAL_TIME_ZONE);
}

export function isPublishedBlogPost(
  post: CollectionEntry<'blog'>,
  now = new Date(),
) {
  return (
    !post.data.draft &&
    getPublishDateKey(post.data.publishDate) <= getCentralTodayKey(now)
  );
}
