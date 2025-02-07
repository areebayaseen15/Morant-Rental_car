// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'q7jyb29u', // Replace with your project ID
  dataset: 'production', // Replace with your dataset
  apiVersion: '2025-01-17', // Replace with your API version
  useCdn: true, // Optional, enable CDN for faster queries
});

export default client;
