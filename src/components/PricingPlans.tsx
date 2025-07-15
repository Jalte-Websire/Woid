"use client";

import React from 'react';
import styles from './PricingPlans.module.css';

export interface PricingPlanFeature {
  icon?: React.ReactNode;
  text: string;
  included?: boolean;
}

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  description: string;
  subDescription?: string;
  features: PricingPlanFeature[];
  isPopular?: boolean;
  buttonText: string;
}


interface PricingPlansProps {
  plans: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
}

export default function PricingPlans({
  plans,
  onPlanSelect
}: PricingPlansProps) {
  const handlePlanSelect = (planName: string) => {
    if (onPlanSelect) {
      onPlanSelect(planName);
    }
  };

  return (
    <section className={styles.content}>
      <div className={styles.container}>
        <div className={styles.pricingPlans}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.plan} ${plan.isPopular ? styles.popular : ''}`}
            >
              {plan.isPopular && (
                <div className={styles.popularBadge}>Mest Populær</div>
              )}
              <div className={styles.planHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.amount}>{plan.price.toLocaleString()}</span>
                  <span className={styles.currency}>{plan.currency}</span>
                </div>
                <p>{plan.description}</p>
                {plan.subDescription && (
                  <p className={styles.subDescription}>{plan.subDescription}</p>
                )}
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={feature.included !== false ? styles.includedFeature : styles.excludedFeature}>
                    {feature.icon && (
                      <span className={styles.featureIcon}>{feature.icon}</span>
                    )}
                    <span className={styles.featureText}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={styles.planButton}
                onClick={() => handlePlanSelect(plan.name)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
} 