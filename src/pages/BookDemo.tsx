import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Building2, User } from 'lucide-react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { WarningDialog } from '../components/ui/WarningDialog';
import { supabase } from '../lib/supabase';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  businessname: z.string().min(2, 'Business name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookDemo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    businessname: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<BookingFormData> & { general?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  const hasUnsavedChanges = useCallback(() => {
    return formData.name !== '' || formData.businessname !== '' || 
           formData.email !== '' || formData.message !== '';
  }, [formData]);

  const handleNavigate = (path: string) => {
    if (hasUnsavedChanges() && !isSuccess) {
      setShowWarning(true);
      setPendingNavigation(path);
    } else {
      navigate(path);
    }
  };

  const handleConfirmNavigation = () => {
    setShowWarning(false);
    if (pendingNavigation) {
      navigate(pendingNavigation);
    }
  };

  const submitToMakeWebhook = async (data: BookingFormData) => {
    try {
      const webhookData = {
        ...data,
        timestamp: new Date().toISOString(),
        source: 'website_demo_booking'
      };

      const response = await fetch('https://hook.eu2.make.com/e39nqsf92len34h71fspdcsuf5k4fohl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (!response.ok) {
        throw new Error('Webhook submission failed');
      }

      return true;
    } catch (error) {
      console.error('Error submitting to webhook:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      bookingSchema.parse(formData);

      // Submit to Book Demo table
      const { error: supabaseError } = await supabase
        .from('Book Demo')
        .insert([{
          name: formData.name,
          businessname: formData.businessname,
          email: formData.email,
          message: formData.message,
          status: false
        }]);

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      // Submit to webhook
      await submitToMakeWebhook(formData);
      
      setIsSuccess(true);
      setFormData({ name: '', businessname: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<BookingFormData> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof BookingFormData] = err.message;
          }
        });
        setErrors(formattedErrors);
      } else {
        setErrors({
          general: error instanceof Error ? error.message : 'An error occurred while submitting the form. Please try again.'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof BookingFormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof BookingFormData];
        return newErrors;
      });
    }
  };

  return (
    <>
      <WarningDialog
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        onConfirm={handleConfirmNavigation}
      />
      
      <section className="py-20 bg-primary-800 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800"
            >
              <h1 className="text-3xl font-bold mb-6 text-white">Book a Demo</h1>
              <p className="text-gray-300 mb-8">
                Schedule a personalized demo to see how our AI solutions can transform your business.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-500/10 border border-green-500 rounded-lg p-4 text-green-400"
                >
                  <p>Thank you for booking a demo! We'll be in touch shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {errors.general && (
                    <div className="bg-red-400/10 border border-red-400 rounded-lg p-4 text-red-400">
                      {errors.general}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-primary-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent text-white"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Business Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="businessname"
                      value={formData.businessname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-primary-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent text-white"
                      placeholder="Acme Corp"
                    />
                    {errors.businessname && (
                      <p className="mt-1 text-red-400 text-sm">{errors.businessname}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-primary-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent text-white"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Message
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-primary-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent text-white"
                      placeholder="Tell us about your business needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-blue text-white py-3 rounded-lg hover:bg-accent-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Booking...' : 'Book Demo'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}