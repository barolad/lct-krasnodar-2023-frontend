import { useState } from "react";

interface UseStepProps {
  totalSteps: number;
}

interface UseStepReturn {
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
}

const useStep = ({ totalSteps }: UseStepProps): UseStepReturn => {
  const [currentStep, setCurrentStep] = useState(0);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const nextStep = () => {
    setCurrentStep((prevStep) => clamp(prevStep + 1, 0, totalSteps - 1));
  };

  const previousStep = () => {
    setCurrentStep((prevStep) => clamp(prevStep - 1, 0, totalSteps - 1));
  };

  const goToStep = (step: number) => {
    setCurrentStep(clamp(step, 0, totalSteps - 1));
  };

  return {
    currentStep,
    nextStep,
    previousStep,
    goToStep,
  };
};

export default useStep;
