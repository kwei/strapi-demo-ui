import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '192.168.24.145',
				port: '1337',
				pathname: '**',
				search: '',
			},
		],
	},
};

export default nextConfig;
