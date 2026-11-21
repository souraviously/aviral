import React from 'react';
import { Heart } from 'lucide-react';
import { WeddingConfig } from '../types';
import { ImperialCorner, GoldDivider } from './Ornaments';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';

export const StorySection: React.FC<{ wedding: WeddingConfig }> = ({ wedding: _wedding }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto relative">
      <ScrollReveal>
        <div className="relative group rounded-3xl p-8 sm:p-14 royal-midnight-card text-center border border-[var(--accent-gold)]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <ImperialCorner position="top-left" size={38} />
          <ImperialCorner position="top-right" size={38} />
          <ImperialCorner position="bottom-left" size={38} />
          <ImperialCorner position="bottom-right" size={38} />

          {/* Golden Heart Accent */}
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 rounded-full border border-[var(--accent-gold)]/50 bg-[var(--accent-gold)]/10 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              <Heart className="w-5 h-5 text-[var(--accent-gold)] fill-[var(--accent-gold)]/30 animate-pulse" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-[var(--accent-gold-light)] uppercase mb-2">
            {t('story.subtitle')}
          </p>

          {/* Section Title */}
          <h2 className="font-cinzel-dec text-3xl sm:text-5xl font-bold text-gold-gradient tracking-wide pt-1 pb-1 inline-block leading-snug">
            {t('story.title')}
          </h2>

          <GoldDivider variant="imperial" className="max-w-xs mx-auto my-6" />

          {/* Story Paragraphs */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="font-serif-luxury text-base sm:text-xl text-[var(--text-secondary)] italic leading-relaxed">
              {t('story.p1')}
            </p>

            <div className="flex items-center justify-center gap-3 my-2 opacity-60">
              <span className="w-12 h-[1px] bg-[var(--accent-gold)]" />
              <span className="text-[var(--accent-gold)] text-xs">✦</span>
              <span className="w-12 h-[1px] bg-[var(--accent-gold)]" />
            </div>

            <p className="font-serif-luxury text-base sm:text-xl text-[var(--text-secondary)] italic leading-relaxed">
              {t('story.p2')}
            </p>

            <p className="font-cinzel text-sm sm:text-lg font-semibold text-gold-gradient tracking-wide pt-2 leading-relaxed">
              {t('story.p3')}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
