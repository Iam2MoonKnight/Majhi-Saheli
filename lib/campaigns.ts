import { Campaign as SupabaseCampaign } from './types';

export type CampaignStatus = 'ongoing' | 'completed' | 'upcoming';
export type CampaignCategory = 'education' | 'health' | 'training';

export interface CampaignItem {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  status: CampaignStatus;
  category: CampaignCategory;
  location: string;
  image?: string | null;
}

export const fallbackCampaigns: CampaignItem[] = [
  {
    id: 'education-kits-2024',
    title: 'Back-to-School Kits for Girls',
    description:
      'Provide uniforms, books, and learning kits for 600 girls across remote villages to keep them in school.',
    goalAmount: 750000,
    raisedAmount: 420000,
    status: 'ongoing',
    category: 'education',
    location: 'Satara District, Maharashtra',
    image: null,
  },
  {
    id: 'maternal-health-camps',
    title: 'Maternal Health Camps',
    description:
      'Monthly health camps offering prenatal checkups, nutrition guidance, and safe delivery planning.',
    goalAmount: 500000,
    raisedAmount: 190000,
    status: 'ongoing',
    category: 'health',
    location: 'Nashik District, Maharashtra',
    image: null,
  },
  {
    id: 'skill-atelier',
    title: 'Skill Atelier for Women Artisans',
    description:
      'A six-month training program in tailoring, embroidery, and market access for 120 women.',
    goalAmount: 650000,
    raisedAmount: 0,
    status: 'upcoming',
    category: 'training',
    location: 'Ahmednagar District, Maharashtra',
    image: null,
  },
  {
    id: 'clean-water-villages',
    title: 'Clean Water for Villages',
    description:
      'Completed installation of filtration units and safe water kiosks serving 3 villages.',
    goalAmount: 300000,
    raisedAmount: 300000,
    status: 'completed',
    category: 'health',
    location: 'Solapur District, Maharashtra',
    image: null,
  },
];

export const getFeaturedCampaign = (campaigns: CampaignItem[] = fallbackCampaigns) => {
  return campaigns.find((campaign) => campaign.status === 'ongoing') || campaigns[0];
};

export const getCampaignById = (id: string, campaigns: CampaignItem[] = fallbackCampaigns) => {
  return campaigns.find((campaign) => campaign.id === id) || null;
};

export const mapSupabaseCampaign = (campaign: SupabaseCampaign): CampaignItem => {
  const status: CampaignStatus =
    campaign.status === 'active' ? 'ongoing' : campaign.status === 'completed' ? 'completed' : 'upcoming';

  return {
    id: campaign.slug || campaign.id,
    title: campaign.title,
    description: campaign.description,
    goalAmount: campaign.goal_amount,
    raisedAmount: campaign.raised_amount,
    status,
    category: 'education',
    location: 'Rural Maharashtra',
    image: campaign.featured_image ?? null,
  };
};

export const mapSupabaseCampaigns = (campaigns: SupabaseCampaign[]) => {
  return campaigns.map(mapSupabaseCampaign);
};
