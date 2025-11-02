import { useState } from 'react';
import { DonationForm, DonationFormData } from '../components/DonationForm';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import { saveDonation, generateReceiptNumber } from '../lib/storage';
import { Card } from '../components/Card';

/**
 * Donation page with form and confirmation modal
 * TODO: integrate Stripe for production payment processing
 */
export const Donate = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastDonation, setLastDonation] = useState<DonationFormData | null>(null);
  const [receiptNumber, setReceiptNumber] = useState('');

  const handleDonationSubmit = (data: DonationFormData) => {
    // Generate unique receipt number
    const receipt = generateReceiptNumber();
    
    // Save to localStorage
    saveDonation({
      id: Date.now().toString(),
      ...data,
      date: new Date().toISOString(),
      receiptNumber: receipt,
    });

    setReceiptNumber(receipt);
    setLastDonation(data);
    setShowConfirmation(true);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleShareDonation = () => {
    // Copy to clipboard (mock functionality)
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make a Donation
          </h1>
          <p className="text-xl text-primary-100">
            Your contribution helps us provide books and educational resources to schools across Ghana.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold mb-6">Donation Details</h2>
                <DonationForm onSubmit={handleDonationSubmit} />
              </Card>

              {/* Donation Info */}
              <Card className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Where Your Donation Goes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📦</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Shipping & Logistics</h4>
                      <p className="text-sm text-gray-600">Covering costs to deliver books to schools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏫</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">School Partnerships</h4>
                      <p className="text-sm text-gray-600">Building relationships with local educators</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Library Development</h4>
                      <p className="text-sm text-gray-600">Creating and stocking community libraries</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Donate?</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>100% tax-deductible (mock)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Impact reports sent quarterly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Recurring donations available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Secure payment processing (mock)</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold mb-4">Questions?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We're here to help! Reach out if you have any questions about donating.
                </p>
                <a href="/contact" className="btn btn-outline w-full text-center">
                  Contact Us
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Donation Confirmed!"
        showCloseButton={false}
      >
        {lastDonation && (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You, {lastDonation.name}!
            </h3>
            <p className="text-gray-600 mb-6">
              Your {lastDonation.frequency} donation of <strong>${lastDonation.amount.toFixed(2)}</strong> 
              {' '}has been received.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">Receipt Number</p>
              <p className="text-2xl font-mono font-bold text-primary-600">{receiptNumber}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handlePrintReceipt}
                className="btn btn-outline"
              >
                📄 Print Receipt
              </button>
              <button
                type="button"
                onClick={handleShareDonation}
                className="btn btn-ghost"
              >
                🔗 Share
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              A confirmation email has been sent to {lastDonation.email}
            </p>
          </div>
        )}
      </Modal>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="Receipt link copied to clipboard!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

