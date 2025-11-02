import { useState, FormEvent } from 'react';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import { Card } from '../components/Card';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact page with form and validation
 */
export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Clear errors and simulate submission
    setErrors({});
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-secondary-100">
            Have a question? We'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`input ${errors.name ? 'input-error' : ''}`}
                      required
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`input ${errors.email ? 'input-error' : ''}`}
                      required
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`input ${errors.message ? 'input-error' : ''}`}
                      required
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    <p className="mt-1 text-xs text-gray-500">
                      Minimum 10 characters
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@booksforghana.org" className="text-sm text-primary-600 hover:underline">
                        info@booksforghana.org
                      </a>
                      <p className="text-xs text-gray-500">(mock)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600">
                        +233 XX XXX XXXX
                      </p>
                      <p className="text-xs text-gray-500">(mock)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">
                        Accra, Ghana<br />
                        Distribution Center
                      </p>
                      <p className="text-xs text-gray-500">(mock)</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-secondary-50 border-secondary-200">
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Monday - Friday:</strong><br />9:00 AM - 5:00 PM GMT</p>
                  <p><strong>Saturday:</strong><br />10:00 AM - 2:00 PM GMT</p>
                  <p><strong>Sunday:</strong><br />Closed</p>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold mb-3">Response Time</h3>
                <p className="text-sm text-gray-600">
                  We typically respond within 24-48 hours during business days.
                  Thank you for your patience!
                </p>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'How do I know my donation is being used effectively?',
                  a: 'We provide quarterly impact reports showing where donations go and what schools receive books.',
                },
                {
                  q: 'Can I donate specific types of books?',
                  a: 'Yes! When sending books, you can specify preferences, though we ensure books are appropriately distributed.',
                },
                {
                  q: 'Is my donation tax-deductible?',
                  a: 'Yes, Books For Ghana is a registered non-profit organization. (mock - consult with tax professional)',
                },
                {
                  q: 'How often should I expect updates?',
                  a: 'Monthly donor newsletters and quarterly detailed impact reports keep you informed of all activities.',
                },
              ].map((faq, idx) => (
                <Card key={idx}>
                  <h3 className="font-semibold text-gray-900 mb-2">Q: {faq.q}</h3>
                  <p className="text-sm text-gray-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        showCloseButton={false}
      >
        <div className="text-center py-4">
          <div className="text-6xl mb-4">✉️</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600 mb-6">
            We've received your message and will get back to you within 24-48 hours.
          </p>
          <button
            type="button"
            onClick={() => setShowSuccess(false)}
            className="btn btn-primary"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="Message sent successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

