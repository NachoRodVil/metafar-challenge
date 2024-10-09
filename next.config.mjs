/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        TWELVEDATA_API_KEY: process.env.TWELVEDATA_API_KEY,
    }
};

export default nextConfig;
