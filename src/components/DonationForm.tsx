import { useState, FormEvent } from 'react';

interface DonationFormProps {
  onSubmit: (data: DonationFormData) => void;
}

export interface DonationFormData {
  amount: number;
  name: string;
  email: string;
  frequency: 'one-time' | 'monthly';
}

/**
 * Donation form with validation
 * TODO: integrate Stripe for production payment processing
 */
export const DonationForm = ({ onSubmit }: DonationFormProps) => {
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 25,
    name: '',
    email: '',
    frequency: 'one-time',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof DonationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const newErrors: Partial<Record<keyof DonationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.amount < 1) {
      newErrors.amount = 'Minimum donation is $1';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Clear errors and submit
    setErrors({});
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Amount */}
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
          Donation Amount *
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600">$</span>
          <input
            type="number"
            id="amount"
            min="1"
            step="0.01"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
            className={`input pl-8 ${errors.amount ? 'input-error' : ''}`}
            required
          />
        </div>
        {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
        <div className="flex gap-2 mt-2">
          {[25, 50, 100, 250].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setFormData({ ...formData, amount: preset })}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              ${preset}
            </button>
          ))}
        </div>
      </div>

      {/* Frequency */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Frequency *
        </label>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="frequency"
              value="one-time"
              checked={formData.frequency === 'one-time'}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value as 'one-time' | 'monthly' })}
              className="text-primary-600 focus:ring-primary-500"
            />
            <span>One-time</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="frequency"
              value="monthly"
              checked={formData.frequency === 'monthly'}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value as 'one-time' | 'monthly' })}
              className="text-primary-600 focus:ring-primary-500"
            />
            <span>Monthly</span>
          </label>
        </div>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
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
          Email Address *
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

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : 'Complete Donation'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        * This is a mock donation flow. No actual payment will be processed.
      </p>
    </form>
  );
};

