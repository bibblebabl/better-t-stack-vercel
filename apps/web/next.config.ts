import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/:path*`,
			},
			{
				source: "/rpc/:path*",
				destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/rpc/:path*`,
			},
		];
	},
};

export default nextConfig;
