'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PageNotFound() {
	return (
		<div className="container mx-auto my-[120px] flex flex-col items-center justify-center bg-[#fff] px-4 py-8">
			<div className="max-w-md w-full text-center">
				<div className="mb-8 flex justify-center">
					<Image src="/404.svg" alt="Description of the image" width={400} height={600} layout="intrinsic" />
				</div>

				<h1 className="text-4xl md:text-[28px] font-bold text-[#353535] mb-2">Page Not Found</h1>

				<p className="text-[#656565] text-[16px] mb-10">
					Oops! The page you are looking for doesn't exist or has been moved. Let's help you get back on
					track.
				</p>

				<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
					<Link
						href="/"
						className="bg-[#353535] hover:bg-[#656565] text-white font-medium py-3 px-6 transition duration-300 inline-block"
					>
						Go to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}
