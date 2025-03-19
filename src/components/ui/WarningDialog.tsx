import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

interface WarningDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function WarningDialog({ isOpen, onClose, onConfirm }: WarningDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-primary-900 border border-gray-800 rounded-xl p-6 z-50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 text-yellow-500">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Unsaved Changes</h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              You have unsaved changes in the form. Are you sure you want to leave? Your changes will be lost.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-yellow-500 text-primary-900 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Leave anyway
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}