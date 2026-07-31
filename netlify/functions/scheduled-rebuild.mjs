export default async function scheduledRebuild() {
  const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;

  if (!buildHookUrl) {
    console.error('NETLIFY_BUILD_HOOK_URL is not configured.');
    return new Response('Missing NETLIFY_BUILD_HOOK_URL.', { status: 500 });
  }

  const response = await fetch(buildHookUrl, { method: 'POST' });

  if (!response.ok) {
    const body = await response.text();
    console.error('Scheduled rebuild hook failed.', {
      status: response.status,
      body,
    });
    return new Response('Scheduled rebuild hook failed.', { status: 502 });
  }

  return new Response('Scheduled rebuild hook triggered.', { status: 200 });
}
