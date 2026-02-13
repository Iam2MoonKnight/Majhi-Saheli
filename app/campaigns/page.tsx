import { getCampaigns } from '@/lib/supabase-functions';
import Link from 'next/link';

export default async function CampaignsPage() {
  const campaigns = await getCampaigns(false); // Only active campaigns

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wide">ACTIVE CAMPAIGNS</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Support Our Campaigns</h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              Join us in making a direct impact through our targeted fundraising campaigns
            </p>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => {
              const progress = (campaign.raised_amount / campaign.goal_amount) * 100;
              const daysLeft = campaign.end_date 
                ? Math.max(0, Math.ceil((new Date(campaign.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))
                : null;

              return (
                <div
                  key={campaign.id}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {campaign.featured_image ? (
                    <div className="h-56 overflow-hidden bg-gray-200">
                      <img
                        src={campaign.featured_image}
                        alt={campaign.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-56 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                      <span className="text-7xl">🎯</span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {campaign.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">{campaign.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="font-semibold text-gray-900">
                          ₹{campaign.raised_amount?.toLocaleString() || 0}
                        </span>
                        <span className="text-gray-600">
                          of ₹{campaign.goal_amount?.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-violet-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>{Math.round(progress)}% funded</span>
                        {daysLeft !== null && (
                          <span>{daysLeft} days left</span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/donate?campaign=${campaign.slug}`}
                      className="block w-full px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition text-center shadow-lg"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No active campaigns</h3>
            <p className="text-gray-600 mb-8">Check back soon for new fundraising campaigns!</p>
            <Link
              href="/donate"
              className="inline-block px-8 py-4 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition shadow-lg"
            >
              Make a General Donation
            </Link>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want to Create Your Own Campaign?</h2>
          <p className="text-xl text-violet-100 mb-8">
            Partner with us to launch a targeted campaign for a specific cause or community
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-violet-600 font-semibold rounded-lg hover:bg-violet-50 transition shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
