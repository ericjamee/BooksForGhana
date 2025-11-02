import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { DonationSummary } from '../components/DonationSummary';
import { getDonations, Donation } from '../lib/storage';
import { mockDonations } from '../data/mock';

/**
 * Home page with hero section and featured content
 */
export const Home = () => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    // Load donations from localStorage or use mock data if empty
    const savedDonations = getDonations();
    if (savedDonations.length === 0) {
      setDonations(mockDonations);
    } else {
      setDonations(savedDonations);
    }
  }, []);

  return (
    <div>
      <Hero
        title="Books For Ghana"
        subtitle="Transforming lives through education, one book at a time. Help us provide quality educational resources to communities across Ghana."
        primaryCTA={{ label: 'Donate Now', href: '/donate' }}
        secondaryCTA={{ label: 'How to Send Books', href: '/how-to-send' }}
      />

      <div className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Books For Ghana connects donors worldwide with schools and communities in need.
              Every book you send, every donation you make, helps build a brighter future for Ghana's children.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">10,000+</h3>
              <p className="text-gray-600">Books Collected</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">50+</h3>
              <p className="text-gray-600">Schools Served</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">1,200+</h3>
              <p className="text-gray-600">Generous Donors</p>
            </Card>
          </div>

          {/* How It Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-xl font-bold text-primary-700">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Donate or Send Books
                    </h3>
                    <p className="text-gray-600">
                      Make a financial contribution or send gently used books directly to our distribution centers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-xl font-bold text-primary-700">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      We Sort & Catalog
                    </h3>
                    <p className="text-gray-600">
                      Our team carefully reviews and organizes all donations by age level and subject matter.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-xl font-bold text-primary-700">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Books Reach Students
                    </h3>
                    <p className="text-gray-600">
                      Partner schools and libraries receive books matched to their specific needs and curriculum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <span className="text-9xl">📖</span>
              </div>
            </div>
          </div>

          {/* Recent Donations & Call to Action */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <DonationSummary donations={donations} maxItems={5} />
            
            <Card className="bg-primary-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="mb-6 text-primary-100">
                Every donation, no matter the size, helps us reach more students and communities.
                Join our mission to bring the gift of reading to Ghana.
              </p>
              <Link to="/donate" className="btn bg-white text-primary-600 hover:bg-gray-50 inline-block">
                Donate Now
              </Link>
            </Card>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-4">💬</div>
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "Books For Ghana has transformed our school library. Our students now have access to
                a wide range of educational materials that weren't available before. Thank you to all the donors!"
              </blockquote>
              <cite className="text-gray-600 font-medium">
                - Head Teacher, Community School, Accra (mock)
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

