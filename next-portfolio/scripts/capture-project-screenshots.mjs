import { writeFile } from 'node:fs/promises';

const projects = [
  ['shopnest', 'https://sarfrazsaeed.github.io/shopnest/'],
  ['foodiex', 'https://sarfrazsaeed.github.io/foodiex/'],
  ['novasaas', 'https://sarfrazsaeed.github.io/novasaas-landing-page/'],
  ['pulsecrm', 'https://pulsecrm-kappa.vercel.app/'],
  ['smarthire', 'https://sarfrazsaeed.github.io/smart-hr-job-matching/']
];

await Promise.all(projects.map(async ([name, url]) => {
  const captureUrl = `https://image.thum.io/get/width/1440/crop/900/wait/8/noanimate/${url}`;
  const response = await fetch(captureUrl);
  if (!response.ok) throw new Error(`Could not capture ${name}: ${response.status}`);
  await writeFile(`public/projects/${name}.png`, Buffer.from(await response.arrayBuffer()));
  console.log(`Captured ${name}`);
}));
