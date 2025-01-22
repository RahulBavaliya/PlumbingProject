"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, User } from "lucide-react";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

export default function ReviewsPage() {
  const [rating, setRating] = useState<string>("5");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://quotes-api-60ok.onrender.com/api/submitreview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          rating: parseInt(rating),
          comment,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit review');

      // Reset form
      setRating("5");
      setComment("");
      setName("");
      
      setMessage({ type: 'success', text: 'Your review has been submitted successfully!' });
      setTimeout(() => setMessage(null), 5000); // Clear message after 5 seconds
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage({ type: 'error', text: 'Failed to submit review. Please try again.' });
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-12 bg-background">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Customer Reviews</h1>
        <meta name="description" content="Read and submit reviews for Rajkot's most trusted plumbing service. Share your experience with our professional plumbing solutions." />
        <meta name="keywords" content="plumber reviews Rajkot, plumbing service reviews, best plumber Rajkot reviews, customer feedback" />

        {/* Notification Message */}
        {message && (
          <div
            className={`mb-4 p-4 rounded-md ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Submit Review Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Write a Review</h2>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm font-medium mb-1">
                Rating
              </label>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">★★★★★ (5)</SelectItem>
                  <SelectItem value="4">★★★★☆ (4)</SelectItem>
                  <SelectItem value="3">★★★☆☆ (3)</SelectItem>
                  <SelectItem value="2">★★☆☆☆ (2)</SelectItem>
                  <SelectItem value="1">★☆☆☆☆ (1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1">
                Your Review
              </label>
              <Textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with our service"
                rows={4}
                required
              />
            </div>
            <Button type="submit">Submit Review</Button>
          </form>
        </Card>

        {/* Reviews List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Recent Reviews</h2>
          <ReviewsList />
        </div>
      </div>
    </div>
  );
}

function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // const response = await fetch('https://quotes-api-60ok.onrender.com/api/getReview');
        // if (!response.ok) throw new Error('Failed to fetch reviews');
        // const data = await response.json();
        var data1 = [
          {
            "id": "1",
            "name": "John Doe",
            "rating": 4,
            "comment": "Great service, highly recommend!",
            "created_at": "2025-01-21T08:30:00Z"
          },
          {
            "id": "2",
            "name": "Jane Smith",
            "rating": 5,
            "comment": "Excellent experience, will definitely use again.",
            "created_at": "2025-01-19T14:45:00Z"
          },
          {
            "id": "3",
            "name": "Samuel Jackson",
            "rating": 3,
            "comment": "Good service, but room for improvement.",
            "created_at": "2025-01-20T10:10:00Z"
          },
          {
            "id": "4",
            "name": "Alice Brown",
            "rating": 4,
            "comment": "Friendly staff and quick service.",
            "created_at": "2025-01-18T09:15:00Z"
          },
          {
            "id": "5",
            "name": "David Wilson",
            "rating": 2,
            "comment": "Service was okay, but the wait time was too long.",
            "created_at": "2025-01-17T16:00:00Z"
          },
          {
            "id": "6",
            "name": "Emma Davis",
            "rating": 5,
            "comment": "Outstanding! Could not be more satisfied.",
            "created_at": "2025-01-15T12:00:00Z"
          },
          {
            "id": "7",
            "name": "Michael White",
            "rating": 3,
            "comment": "Service was decent, but there were some issues with the quality.",
            "created_at": "2025-01-14T13:25:00Z"
          },
          {
            "id": "8",
            "name": "Sophia Taylor",
            "rating": 4,
            "comment": "Good service overall, will return.",
            "created_at": "2025-01-13T08:45:00Z"
          },
          {
            "id": "9",
            "name": "James Miller",
            "rating": 1,
            "comment": "Extremely disappointed, would not recommend.",
            "created_at": "2025-01-10T17:30:00Z"
          },
          {
            "id": "10",
            "name": "Olivia Lee",
            "rating": 4,
            "comment": "Great value for the price, very satisfied.",
            "created_at": "2025-01-08T19:00:00Z"
          }
        ];
        
        setReviews(data1);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{review.name || "Anonymous"}</p>
                <div className="flex gap-1 mt-1">{renderStars(review.rating)}</div>
              </div>
            </div>
            <time className="text-sm text-muted-foreground">
              {new Date(review.created_at).toLocaleDateString()}
            </time>
          </div>
          <p className="mt-4 text-muted-foreground">{review.comment}</p>
        </Card>
      ))}
    </div>
  );
}