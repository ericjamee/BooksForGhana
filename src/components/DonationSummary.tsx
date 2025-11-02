import { Donation } from '../lib/storage';

interface DonationSummaryProps {
  donations: Donation[];
  maxItems?: number;
}

/**
 * Component to display recent donations
 */
const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
};

/**
 * Donation summary showing recent donations
 */
export const DonationSummary = ({ donations, maxItems = 5 }: DonationSummaryProps) => {
  const recentDonations = donations
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxItems);

  if (recentDonations.length === 0) {
    return (
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
        <p className="text-gray-500">No donations yet. Be the first!</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
      <div className="space-y-3">
        {recentDonations.map((donation) => (
          <div
            key={donation.id}
            className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex-1">
              <p className="font-medium text-gray-900">
                {donation.name}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span>${donation.amount.toFixed(2)}</span>
                <span>•</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  donation.frequency === 'monthly'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {donation.frequency}
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {formatTimeAgo(donation.date)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

