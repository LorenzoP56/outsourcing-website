"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blogsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(posts.length / blogsPerPage);
  const startIndex = currentPage * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = posts.slice(startIndex, endIndex);

  // Reset to first page when screen size changes
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const handlePageChange = (newPage: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    const newPage = currentPage === 0 ? totalPages - 1 : currentPage - 1;
    handlePageChange(newPage);
  };

  const handleNext = () => {
    const newPage = currentPage === totalPages - 1 ? 0 : currentPage + 1;
    handlePageChange(newPage);
  };

  const handlePageClick = (pageIndex: number) => {
    if (pageIndex !== currentPage) {
      handlePageChange(pageIndex);
    }
  };

  // Se non ci sono post, mostra un messaggio
  if (posts.length === 0) {
    return (
      <section className="lg:px-32 lg:py-16 px-8 py-16">
        <p className="text-center text-gray-500">Nessun articolo disponibile al momento.</p>
      </section>
    );
  }

  return (
    <section className="lg:px-32 lg:py-16 px-8 py-16">
      <div className="flex flex-col gap-16">
        {/* Blog Grid - 3x2 (3 columns, 2 rows) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {currentBlogs.map((blog, index) => (
            <Link
              key={startIndex + index}
              href={`/blog/${blog.slug}`}
              className="block"
            >
              <article
                className="flex flex-col gap-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white h-full cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-[240px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-grow">
                  {/* Category */}
                  {blog.category && (
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: COLORS.BLUE }}
                    >
                      {blog.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-jost)", color: COLORS.TEXT }}
                  >
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: COLORS.TEXT }}>
                    {blog.description}
                  </p>

                  {/* Date */}
                  <time className="text-sm mt-auto" style={{ color: COLORS.TEXT }}>
                    {blog.date}
                  </time>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination - Only show if more than 6 blogs */}
        {totalPages > 1 && (
          <div className="flex flex-row gap-4 justify-center items-center">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ borderColor: COLORS.TEXT }}
              aria-label="Pagina precedente"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke={COLORS.TEXT}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-colors"
                  style={{
                    backgroundColor: index === currentPage ? COLORS.BLUE : "transparent",
                    color: index === currentPage ? "white" : COLORS.TEXT,
                    border: index === currentPage ? "none" : `2px solid ${COLORS.TEXT}`,
                  }}
                  aria-label={`Pagina ${index + 1}`}
                  aria-current={index === currentPage ? "page" : undefined}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ borderColor: COLORS.TEXT }}
              aria-label="Pagina successiva"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke={COLORS.TEXT}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
