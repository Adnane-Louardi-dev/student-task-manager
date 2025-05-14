import React from 'react';

const drives = [
  {
    title: "1ère année - Semestre 1",
    url: "https://drive.google.com/drive/folder1"
  },
  {
    title: "2ème année - Semestre 2",
    url: "https://drive.google.com/drive/folder2"
  },
  {
    title: "3ème année - Semestre 1",
    url: "https://drive.google.com/drive/folder3"
  }
];

export default function Drive() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mes Drives pour ce semestre</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {drives.map((drive, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          >
            <span className="text-5xl mb-4">📁</span>
            <h2 className="text-lg font-semibold mb-2">{drive.title}</h2>
            <a
              href={drive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Ouvrir le Drive
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
