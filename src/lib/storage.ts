/**
 * localStorage helper utilities for managing donation data persistence
 */

export interface Donation {
  id: string;
  amount: number;
  name: string;
  email: string;
  frequency: 'one-time' | 'monthly';
  date: string;
  receiptNumber: string;
}

const STORAGE_KEY = 'books-for-ghana-donations';

/**
 * Get all donations from localStorage
 */
export const getDonations = (): Donation[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading donations from localStorage:', error);
    return [];
  }
};

/**
 * Save a new donation to localStorage
 */
export const saveDonation = (donation: Donation): void => {
  try {
    const donations = getDonations();
    donations.push(donation);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
  } catch (error) {
    console.error('Error saving donation to localStorage:', error);
  }
};

/**
 * Clear all donations (useful for development/testing)
 */
export const clearDonations = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing donations from localStorage:', error);
  }
};

/**
 * Generate a mock receipt number
 */
export const generateReceiptNumber = (): string => {
  return `BFG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
};

