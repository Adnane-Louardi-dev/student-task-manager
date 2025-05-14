'use client';
import React from 'react';
import Link from 'next/link';
import { Code, Server, BookOpen } from 'lucide-react'; // استيراد الأيقونات
import './page.css';

export default function react() {
  return (
    <section className="projects">
      <h2 className="projects-title">Nos Projets</h2>
      <p className="projects-description">Cliquez sur un projet pour voir les détails :</p>

      <Link href="/dashboard/projects/react" className="project-link">
        <div className="project-card">
          <Code className="project-icon" />
          <h3>Projet React</h3>
          <p>Application frontend avec React.</p>
        </div>
      </Link>

      <Link href="/dashboard/projects/system" className="project-link">
        <div className="project-card">
          <Server className="project-icon" />
          <h3>Projet System</h3>
          <p>Application de gestion système.</p>
        </div>
      </Link>

      <Link href="/dashboard/projects/quiz" className="project-link">
        <div className="project-card">
          <BookOpen className="project-icon" />
          <h3>Projet Quiz</h3>
          <p>Plateforme avec quiz interactifs.</p>
        </div>
      </Link>
    </section>
  );
}