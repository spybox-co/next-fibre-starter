/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUGGING_FACE_API_TOKEN: process.env.HUGGING_FACE_API_TOKEN,
  },
};

export default nextConfig;
