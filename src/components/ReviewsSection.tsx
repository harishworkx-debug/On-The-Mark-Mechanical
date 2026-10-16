import { useState, useMemo } from 'react';
import { Star, CheckCircle2, ExternalLink, Wrench, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { reviews, reviewsSummary, Review } from '@/data/reviews';
import { business } from '@/data/business';

export function GoogleIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function StarRating({ rating, size = 'h-4 w-4' }: { rating: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${
            star <= rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function getAvatarColor(name: string): string {
  const colors = [
    'from-sky-500 to-navy-700 text-white',
    'from-emerald-500 to-teal-700 text-white',
    'from-blue-600 to-indigo-800 text-white',
    'from-amber-500 to-orange-700 text-white',
    'from-navy-700 to-navy-900 text-sky-300',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

interface ReviewsSectionProps {
  initialLimit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  id?: string;
}

export default function ReviewsSection({
  initialLimit,
  showFilters = true,
  title = 'Real Customer Reviews',
  subtitle = 'See what homeowners and businesses in Ann Arbor say about On The Mark Mechanical on Google.',
  compact = false,
  id = 'reviews',
}: ReviewsSectionProps) {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [starFilter, setStarFilter] = useState<'all' | '5'>('all');
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [displayCount, setDisplayCount] = useState(initialLimit || reviews.length);

  const toggleExpand = (reviewId: string) => {
    setExpandedReviews((prev) => ({ ...prev, [reviewId]: !prev[reviewId] }));
  };

  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      // Topic match
      const topicMatch =
        selectedTopic === 'All' || r.topics.includes(selectedTopic);
      // Star rating match
      const starMatch = starFilter === 'all' || r.rating === 5;
      return topicMatch && starMatch;
    });
  }, [selectedTopic, starFilter]);

  const visibleReviews = filteredReviews.slice(0, displayCount);

  return (
    <section id={id} className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold text-sky-800 ring-1 ring-sky-300 mb-4">
            <GoogleIcon className="h-4 w-4" />
            Verified Google Reviews
          </div>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl mx-auto text-gray-600">{subtitle}</p>}
        </div>

        {/* Rating Overview Card */}
        <div className="mb-10 rounded-2xl bg-white p-6 sm:p-8 shadow-md ring-1 ring-gray-200">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            {/* Left: Overall Rating */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <GoogleIcon className="h-8 w-8" />
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  Google Rating
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-center md:justify-start gap-3">
                <span className="text-5xl font-black text-navy-900 tracking-tight">
                  {reviewsSummary.rating.toFixed(1)}
                </span>
                <div>
                  <StarRating rating={5} size="h-5 w-5" />
                  <div className="text-xs text-gray-500 mt-1">
                    Based on {reviewsSummary.totalReviews} Google reviews
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                <a
                  href={business.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-xs font-bold text-white shadow transition-all hover:bg-sky-600 hover:shadow-md"
                >
                  Write a Review
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={business.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  View on Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Middle: Rating Distribution Bars */}
            <div className="md:col-span-5 space-y-1.5 text-xs text-gray-600">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count =
                  reviewsSummary.ratingDistribution[
                    stars as keyof typeof reviewsSummary.ratingDistribution
                  ] || 0;
                const percentage = (count / reviewsSummary.totalReviews) * 100;
                return (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="w-12 font-medium">{stars} stars</span>
                    <div className="h-2.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-gray-500 font-medium">{count}</span>
                  </div>
                );
              })}
            </div>

            {/* Right: Key Highlights */}
            <div className="md:col-span-3 bg-sky-50/70 rounded-xl p-4 ring-1 ring-sky-100">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5 mb-2">
                <Sparkles className="h-4 w-4 text-sky-600" />
                Customer Sentiments
              </div>
              <ul className="text-xs text-gray-700 space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 flex-shrink-0" />
                  <span>Prompt, same-day emergency calls</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 flex-shrink-0" />
                  <span>Fair, competitive & upfront pricing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 flex-shrink-0" />
                  <span>20+ years of trusted local service</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 flex-shrink-0" />
                  <span>Professional, friendly technicians</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        {showFilters && (
          <div className="mb-8 space-y-4">
            {/* Topic Filter Chips */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                <Filter className="h-3.5 w-3.5" />
                Sort & Filter by Topic:
              </div>
              <div className="flex flex-wrap gap-2">
                {reviewsSummary.topics.map((topic) => {
                  const isActive = selectedTopic === topic.name;
                  return (
                    <button
                      key={topic.name}
                      onClick={() => setSelectedTopic(topic.name)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-sky-500 text-white shadow-sm ring-1 ring-sky-600'
                          : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-sky-50 hover:text-sky-700'
                      }`}
                    >
                      <span>{topic.name}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                          isActive
                            ? 'bg-sky-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {topic.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rating Filter Pills */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-gray-500 font-medium">Rating:</span>
              <button
                onClick={() => setStarFilter('all')}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  starFilter === 'all'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100'
                }`}
              >
                All Ratings ({reviews.length})
              </button>
              <button
                onClick={() => setStarFilter('5')}
                className={`inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  starFilter === '5'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100'
                }`}
              >
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                5 Stars Only ({reviewsSummary.ratingDistribution[5]})
              </button>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className={`grid gap-6 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {visibleReviews.map((review) => {
            const isExpanded = expandedReviews[review.id];
            const isLong = review.text.length > 220;
            const displayText =
              isLong && !isExpanded
                ? `${review.text.slice(0, 220)}...`
                : review.text;

            return (
              <div
                key={review.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-sky-200"
              >
                <div>
                  {/* Top Bar: Author, Avatar & Google Icon */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br font-bold shadow-sm ${getAvatarColor(
                          review.author
                        )}`}
                      >
                        {getInitials(review.author)}
                      </div>
                      <div>
                        <div className="font-bold text-navy-900 text-sm">{review.author}</div>
                        <div className="text-xs text-gray-500">
                          {review.isLocalGuide && (
                            <span className="inline-flex items-center gap-1 font-semibold text-amber-700 mr-1.5">
                              ★ Local Guide
                            </span>
                          )}
                          <span>{review.reviewerInfo}</span>
                        </div>
                      </div>
                    </div>
                    <GoogleIcon className="h-5 w-5 flex-shrink-0" />
                  </div>

                  {/* Rating & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <StarRating rating={review.rating} />
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {displayText}
                  </p>
                  {isLong && (
                    <button
                      onClick={() => toggleExpand(review.id)}
                      className="mt-2 text-xs font-semibold text-sky-600 hover:text-sky-700"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}

                  {/* Positive Attributes */}
                  {review.positiveAttributes && review.positiveAttributes.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3 text-sky-600" />
                        Positive Feedback:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {review.positiveAttributes.map((attr) => (
                          <span
                            key={attr}
                            className="inline-flex items-center gap-1 rounded bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200"
                          >
                            <CheckCircle2 className="h-2.5 w-2.5 text-sky-600" />
                            {attr}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services tags */}
                  {review.services && review.services.length > 0 && (
                    <div className="mt-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5 flex items-center gap-1">
                        <Wrench className="h-3 w-3 text-gray-500" />
                        Services Provided:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {review.services.map((svc) => (
                          <span
                            key={svc}
                            className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700"
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    Verified Google Review
                  </span>
                  <a
                    href={business.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors"
                  >
                    View Original
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button (if limited) */}
        {filteredReviews.length > displayCount && (
          <div className="text-center mt-10">
            <button
              onClick={() => setDisplayCount(filteredReviews.length)}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-sky-400 transition-all"
            >
              Show All {filteredReviews.length} Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
