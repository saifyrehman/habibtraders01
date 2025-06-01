
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Habib ur Rehman"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold mt-4">Habib ur Rehman</h1>
          <p className="text-gray-600">Owner - Habib Traders</p>
        </div>
        <div className="mt-6 text-sm text-gray-800 space-y-1">
          <p><strong>NTN:</strong> 6938581-4</p>
          <p><strong>Phone:</strong> 0334-1008769 / 0302-1309900</p>
          <p><strong>Email:</strong> habiburrehman8769@gmail.com</p>
          <p><strong>Address:</strong> Street 29, Allama Iqbal Colony, Tench Bhata, Rawalpindi</p>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/923341008769"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
