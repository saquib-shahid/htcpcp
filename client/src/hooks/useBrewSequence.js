import { useState, useCallback } from 'react';

export const BREW_STEPS = {
  IDLE: 'IDLE',
  BLOOD_TYPE: 'VALIDATING BLOOD TYPE',
  PROVENANCE: 'VERIFYING BEAN PROVENANCE',
  PERMIT: 'CHECKING MUNICIPAL BREW PERMIT',
  CAPTCHA: 'AWAITING MILK AUTHORIZATION', // Requires manual resolution
  BLOCKCHAIN: 'BLOCKCHAIN ROAST VERIFICATION', // Slowly goes to 99%
  BIOMETRIC: 'BIOMETRIC MOOD ANALYSIS',
  BREWING: 'EXECUTING HTCPCP BREW PROTOCOL', // This fails with 418
  TEAPOT: '418_TEAPOT'
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function useBrewSequence() {
  const [currentStep, setCurrentStep] = useState(BREW_STEPS.IDLE);
  const [progress, setProgress] = useState(0);
  const [isBrewing, setIsBrewing] = useState(false);
  const [errorHeader, setErrorHeader] = useState(null);

  const startBrew = useCallback(async () => {
    if (isBrewing) return;
    setIsBrewing(true);
    setProgress(0);

    try {
      // Step 1
      setCurrentStep(BREW_STEPS.BLOOD_TYPE);
      await delay(1000);
      setProgress(15);

      // Step 2
      setCurrentStep(BREW_STEPS.PROVENANCE);
      await delay(1200);
      setProgress(30);

      // Step 3
      setCurrentStep(BREW_STEPS.PERMIT);
      await delay(800);
      setProgress(45);

      // Step 4 - Stop and wait for CAPTCHA
      setCurrentStep(BREW_STEPS.CAPTCHA);
      setIsBrewing(false); 
      // The flow halts here until resolveCaptcha is called
    } catch (e) {
      console.error(e);
      setIsBrewing(false);
    }
  }, [isBrewing]);

  const resolveCaptcha = useCallback(async () => {
    setIsBrewing(true);
    setProgress(60);

    try {
      // Step 5 - Blockchain takes 8s, progress crawls to 99%
      setCurrentStep(BREW_STEPS.BLOCKCHAIN);
      for (let i = 60; i < 99; i+=2) {
        await delay(8000 / 20); // Spread 8s over 20 ticks
        setProgress(i);
      }
      setProgress(99);

      // Step 6
      setCurrentStep(BREW_STEPS.BIOMETRIC);
      await delay(1500);

      // Step 7 - Execute Brew
      setCurrentStep(BREW_STEPS.BREWING);
      await delay(1000);

      // Throws 418 ALWAYS
      const error = new Error("I'm a teapot. Short and stout. Handle: present. Spout: present. Coffee: never.");
      error.status = 418;
      error.headers = {
        'X-Coffee-Pot-Status': 'Teapot',
        'X-Brew-Protocol': 'HTCPCP/1.0',
        'X-RFC': '2324',
        'X-Larry-Masinter': 'Legend'
      };
      throw error;

    } catch (e) {
      if (e.status === 418) {
        setErrorHeader(e.headers);
        setCurrentStep(BREW_STEPS.TEAPOT);
      }
    } finally {
      setIsBrewing(false);
    }
  }, []);

  const reset = useCallback(() => {
    setCurrentStep(BREW_STEPS.IDLE);
    setProgress(0);
    setIsBrewing(false);
    setErrorHeader(null);
  }, []);

  return { currentStep, progress, isBrewing, errorHeader, startBrew, resolveCaptcha, reset };
}
