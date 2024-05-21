const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const userString = searchParams.get("mail");
await actions.setVariable('userString', userString);
await actions.runQuery('emailVerification');