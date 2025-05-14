import React from 'react';

const drives = [
  {
    title: "1ère année - Semestre 1",
    url: "https://drive.google.com/drive/folders/1SPxlvT6rhF_ZijQweqyZhOcKCOLOmE-K?usp=drive_link"
  },
  {
    title: "1ère année - Semestre 2",
    url: "https://drive.google.com/drive/folders/1yGH_-giQdRdWTSw4yRdx-qyxRGRSsFgf?usp=drive_link"
  },
  {
    title: "2ère année - Semestre 3",
    url: "https://drive.google.com/drive/folders/1dOvuUMCrEmILyB8Y5DSTe6ng_-OkLiwJ?usp=drive_link"
  },
  {
    title: "2ème année - Semestre 4",
    url: "https://drive.google.com/drive/folders/1jfzjwe7kMXjxkmuIEvRytUmP0H4Hafoj?usp=drive_link"
  },
  {
    title: "3ème année - Semestre 5",
    url: "https://drive.google.com/drive/folders/1mvlBcWO8QX_-7JPYA3_18JDCT8JTUqJq?usp=drive_link"
  },
  {
    title: "3ère année - Semestre 6",
    url: "https://drive.google.com/drive/folders/1KFqmyOQO4gDmkpNF8IrcPMuNBFhQOl1G?usp=drive_link"
  },
];

export default function Drive() {
  return (
    <div className="p-8">
      <h1 className="text-6xl font-bold mb-6 text-center">Mes Drives </h1>
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
