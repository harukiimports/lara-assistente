// Tipos do Lara Assistente

export type PlanType = 'bronze' | 'prata' | 'gold';

export interface Plan {
  id: PlanType;
  name: string;
  price: number;
  popular?: boolean;
  borderColor: string;
  features: string[];
  description?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  plan: PlanType;
  createdAt: Date;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  adminOnly?: boolean;
}
