'use client'

import { COLORS } from "@/lib/constants";
import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import Button from "@/components/ui/Button";
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCard, motion, staggerContainerSlow } from "@/components/animations";
import {useTranslations} from "next-intl";

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
  const t = useTranslations('Home');
  const tCommon = useTranslations('Common');

  return (
    <section
      className="lg:px-32 lg:py-16 flex flex-col gap-8 px-8 py-16"
      style={{
        backgroundImage: 'url(/website_images/Home/bgBlog.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <AnimatedSection>
        <h2 className="lg:text-[40px] lg:leading-[40px] text-[32px] leading-[32px] font-bold text-center" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT_WHITE }}>
          {t('blog.title')}
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-md text-center" style={{ color: COLORS.TEXT_WHITE }}>
          {t('blog.description')}
        </p>
      </AnimatedSection>

      <StaggerContainer variants={staggerContainerSlow} className="flex lg:flex-row flex-col gap-8">
        {posts.map((post) => (
          <StaggerItem key={post.slug} className="flex-1">
            <Link href={`/blog/${post.slug}`}>
              <AnimatedCard className="flex flex-col gap-4 bg-white overflow-hidden h-full rounded-lg rounded-2xl">
                <div className="relative w-full h-[200px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2 px-8 py-4 flex-grow">
                  {post.category && (
                    <span style={{ color: COLORS.TEXT, fontSize: '10px', fontWeight: 600 }}>
                      {post.category.toUpperCase()}
                    </span>
                  )}
                  <h3 className="text-[20px] leading-[24px] font-bold line-clamp-2" style={{ fontFamily: 'var(--font-jost)', color: COLORS.TEXT }}>
                    {post.title}
                  </h3>
                  <p className="text-md line-clamp-2" style={{ color: COLORS.TEXT }}>
                    {post.description}
                  </p>
                  <time dateTime={post.date} className="mt-auto" style={{ color: COLORS.TEXT, fontSize: '10px' }}>
                    {post.date}
                  </time>
                </div>
              </AnimatedCard>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.5}>
        <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="mx-auto w-[300px]">
          <Button href="/blog" className="w-full" style={{ background: COLORS.TEXT_WHITE, color: COLORS.TEXT }}>
            {tCommon('readMoreArticles')}
          </Button>
        </motion.div>
      </AnimatedSection>

    </section>
  );
}
