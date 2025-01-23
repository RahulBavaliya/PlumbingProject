"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import Image from "next/image";

type GalleryImage = {
  id: number;
  title: string;
  url: string;
  full_size_url: string;
  description: string;
  tags: string[];
  category: string;
  thumbnail_url: string;
};

type GalleryData = {
  gallery_page: {
    title: string;
    description: string;
    gallery_settings: {
      categories: string[];
    };
    images: GalleryImage[];
    search: {
      filter_tags: string[];
    };
  };
};

const defaultGalleryData = {
  gallery_page: {
    title: "Our Work Gallery",
    description: "Browse through our collection of completed plumbing projects and installations",
    gallery_settings: {
      categories: ["bathroom", "kitchen", "repair", "installation"]
    },
    images: [
      {
        id: 1,
        title: "Modern Bathroom Installation",
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        full_size_url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=100",
        description: "Complete bathroom renovation with modern fixtures and fittings",
        tags: ["bathroom", "installation", "modern"],
        category: "bathroom",
        thumbnail_url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80"
      },
      {
        id: 2,
        title: "Kitchen Sink Installation",
        url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
        full_size_url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=100",
        description: "Modern kitchen sink installation with premium fixtures",
        tags: ["kitchen", "installation", "sink"],
        category: "kitchen",
        thumbnail_url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80"
      },
      {
        id: 3,
        title: "Pipe Repair Work",
        url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
        full_size_url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&q=100",
        description: "Emergency pipe repair and maintenance service",
        tags: ["repair", "pipes", "emergency"],
        category: "repair",
        thumbnail_url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80"
      }
    ],
    search: {
      filter_tags: ["bathroom", "kitchen", "repair", "installation", "emergency", "maintenance"]
    }
  }
};

export default function GalleryPage() {
  const [galleryData, setGalleryData] = useState<GalleryData>(defaultGalleryData);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("https://quotes-api-60ok.onrender.com/api/getImages");
        if (!response.ok) throw new Error("Failed to fetch gallery");
        const data = await response.json();
        if (data && data.gallery_page) {
          setGalleryData(data);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
        // Keep using default data if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading gallery...</div>
      </div>
    );
  }

  const filteredImages = galleryData.gallery_page.images.filter((image) => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="container max-w-7xl py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{galleryData.gallery_page.title}</h1>
          <p className="text-muted-foreground">{galleryData.gallery_page.description}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Input
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {galleryData.gallery_page.gallery_settings.categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{image.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {image.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {image.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <Button
                variant="ghost"
                className="absolute -top-12 right-0 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.full_size_url}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="bg-background p-4 mt-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}