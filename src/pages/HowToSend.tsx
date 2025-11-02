import { Card } from '../components/Card';

/**
 * How to Send Books page with step-by-step instructions
 */
export const HowToSend = () => {
  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Send Books
          </h1>
          <p className="text-xl text-secondary-100">
            Follow these simple steps to send your books directly to schools in Ghana
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="max-w-4xl mx-auto">
          {/* Printable Checklist */}
          <Card className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Packing Checklist</h2>
              <button
                onClick={handlePrintChecklist}
                className="btn btn-primary no-print"
              >
                🖨️ Print Checklist
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span>✓</span> Good to Send
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Elementary & middle school books</li>
                  <li>• Science & math textbooks</li>
                  <li>• Story books & novels</li>
                  <li>• Reference books (dictionaries, atlases)</li>
                  <li>• Educational workbooks</li>
                  <li>• Books in English</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-red-600">
                  <span>✗</span> Cannot Accept
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Damaged or torn books</li>
                  <li>• Magazines or newspapers</li>
                  <li>• Religious materials</li>
                  <li>• Political materials</li>
                  <li>• Outdated textbooks (&gt;10 years)</li>
                  <li>• Very large/heavy collections</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Step-by-Step Instructions */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step Guide</h2>

            {[
              {
                step: 1,
                title: 'Select Your Books',
                icon: '📚',
                description: 'Choose 5-20 gently used or new books appropriate for ages 6-16. Focus on educational content in good condition.',
              },
              {
                step: 2,
                title: 'Pack Your Box',
                icon: '📦',
                description: 'Use a sturdy cardboard box. Books should fill the box to prevent shifting during transport. Ideal box size: 12" × 9" × 12" or similar.',
              },
              {
                step: 3,
                title: 'Label Carefully',
                icon: '🏷️',
                description: 'Download and print our shipping label template (mock link below). Include: your name, book count, and preferred school or "any school".',
              },
              {
                step: 4,
                title: 'Mail Your Package',
                icon: '✉️',
                description: 'Ship via your preferred postal service. Tracking recommended. Estimated shipping time: 3-4 weeks.',
              },
              {
                step: 5,
                title: 'Track & Confirm',
                icon: '📊',
                description: 'We\'ll email you when your books arrive and let you know which school received them. Full impact report included!',
              },
            ].map((item) => (
              <Card key={item.step}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary-600">STEP {item.step}</span>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Shipping Information */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-primary-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span>📍</span> Shipping Address
            </h3>
            <div className="bg-white rounded-lg p-6 mb-4">
              <p className="font-mono text-sm leading-relaxed">
                Books For Ghana<br />
                Distribution Center<br />
                123 Education Street<br />
                Accra, Ghana 00233<br />
                (mock)
              </p>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Important:</strong> Please ensure your return address is clearly visible on the package.
              For multiple boxes, label them as "Box 1 of 3", etc.
            </p>
          </Card>

          {/* Helpful Tips */}
          <Card className="mt-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>💡</span> Helpful Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Packing:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Use small to medium boxes</li>
                  <li>• Pack books flat when possible</li>
                  <li>• Fill empty spaces with padding</li>
                  <li>• Seal with strong packing tape</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Preparation:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Remove personal bookmarks/notes</li>
                  <li>• Clean covers if needed</li>
                  <li>• Pack heavier books at bottom</li>
                  <li>• Include a small note (optional)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Alternative: Financial Donation */}
          <Card className="mt-8 bg-primary-50 border-primary-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer to Donate Financially?
              </h3>
              <p className="text-gray-700 mb-6">
                Financial donations allow us to purchase books locally in Ghana, reduce shipping costs,
                and support local businesses. Every dollar goes further!
              </p>
              <a href="/donate" className="btn btn-primary text-lg">
                Make a Donation
              </a>
            </div>
          </Card>

          {/* Contact for Questions */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have questions about sending books? We're here to help!
            </p>
            <a href="/contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

