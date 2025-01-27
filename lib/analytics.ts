"use client";

type EventNames = 
  | 'book_service'
  | 'contact_form_submit'
  | 'review_submit'
  | 'gallery_view'
  | 'language_change'
  | 'theme_change'
  | 'service_view';

interface AnalyticsEvent {
  name: EventNames;
  params?: Record<string, string | number | boolean>;
}

export function trackEvent({ name, params = {} }: AnalyticsEvent) {
  // Only track events if gtag is available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    window.gtag('event', name, params);
  }
}