export interface AITool {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
  oneLiner: string;
  icon: string;
  tags: string[];
}

export interface Category {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
}
