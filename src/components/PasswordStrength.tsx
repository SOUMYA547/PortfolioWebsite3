import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  const calculateStrength = (pass: string) => {
    let score = 0;
    const checks = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      numbers: /[0-9]/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };

    Object.values(checks).forEach(check => {
      if (check) score += 20;
    });

    const newFeedback = [];
    if (!checks.length) newFeedback.push('Use at least 8 characters');
    if (!checks.uppercase) newFeedback.push('Include uppercase letters');
    if (!checks.lowercase) newFeedback.push('Include lowercase letters');
    if (!checks.numbers) newFeedback.push('Include numbers');
    if (!checks.special) newFeedback.push('Include special characters');

    setStrength(score);
    setFeedback(newFeedback);
  };

  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 20) return 'bg-red-500';
    if (strength <= 40) return 'bg-orange-500';
    if (strength <= 60) return 'bg-yellow-500';
    if (strength <= 80) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (strength <= 20) return 'Very Weak';
    if (strength <= 40) return 'Weak';
    if (strength <= 60) return 'Medium';
    if (strength <= 80) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-gray-800">
      <div className="flex items-center mb-4">
        <Shield className="h-6 w-6 text-green-400 mr-2" />
        <h3 className="text-xl font-bold text-white">Password Strength Analyzer</h3>
      </div>
      <div className="space-y-4">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type a password to test..."
          className="w-full bg-black/50 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-green-400"
        />
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${getStrengthColor()}`}
            style={{ width: `${strength}%` }}
          />
        </div>
        <div className="flex items-center">
          {strength > 0 && (
            <>
              {strength > 60 ? (
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
              )}
              <span className={`text-${getStrengthColor().replace('bg-', '')}`}>
                {getStrengthText()}
              </span>
            </>
          )}
        </div>
        {feedback.length > 0 && (
          <ul className="space-y-1 text-sm">
            {feedback.map((item, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <XCircle className="h-4 w-4 text-red-400 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};