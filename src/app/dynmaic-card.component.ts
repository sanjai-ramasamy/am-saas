import { Component } from '@angular/core';

@Component({
    selector: 'app-dynamic-card',
    template: `
      <div *ngFor="let card of cards; let i = index" class="card">
        <div (click)="toggleEdit(card)">
          <div *ngIf="!card.isEditing; else editTemplate">
            <div class="card-content">
              {{ card.title }}
              {{ card.content }}
            </div>
          </div>
          <ng-template #editTemplate>
            <div class="card-content">
            <input type="text" [(ngModel)]="card.title" (blur)="saveEdit(card)">
            <input type="text" [(ngModel)]="card.content" (blur)="saveEdit(card)">
            </div>
          </ng-template>
        </div>
      </div>
    `,
    styles: [
      `
        .card {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          cursor: pointer;
        }
      `,
    ],
  })
export class DynamicCardComponent {
  cards: any = [
    {
      id: 1,
      title: "Investment Highlights",
      content: "This investment opportunity presents a compelling case in the health startup sector. The company has developed a unique product that addresses a significant pain point in the market. With a strong and experienced founding team, a scalable business model, and a large addressable market, this startup has the potential for substantial growth and profitability.",
      isEditing:false,
       isExpanded: true
    },
    {
      id: 2,
      title: "USP",
      content: "What sets this company apart from its competitors is its innovative approach to solving a specific problem in the health industry. By leveraging cutting-edge technology and data analytics, the company offers a personalized and data-driven solution that significantly improves patient outcomes. This unique selling proposition positions the company as a leader in the market, with a clear advantage over traditional healthcare providers.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 3,
      title: "Product / Service",
      content: "The company's product is a digital health platform that caters to a wide range of target groups, including patients, healthcare providers, and insurance companies. The platform offers comprehensive health monitoring, personalized treatment plans, and real-time data analysis. By addressing the pain points of inefficient healthcare delivery, lack of patient engagement, and fragmented data, the company aims to revolutionize the way healthcare is delivered and experienced.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 4,
      title: "Team",
      content: "The founding team consists of highly accomplished individuals with extensive experience in the healthcare and technology sectors. The CEO, a former healthcare executive, brings deep industry knowledge and a track record of successful product launches. The CTO, a seasoned technologist, has a strong background in developing scalable platforms. Together, the team possesses the necessary expertise to drive the company's growth and navigate the complexities of the healthcare industry.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 5,
      title: "Business Model",
      content: "The company generates revenue through a subscription-based model, offering tiered pricing plans for different user segments. Additionally, strategic partnerships with healthcare providers and insurance companies provide additional revenue streams. The scalable nature of the platform allows for rapid customer acquisition and expansion into new markets.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 6,
      title: "Marketing & Distribution",
      content: "To reach its target customers, the company employs a multi-channel marketing strategy, including digital advertising, partnerships with healthcare providers, and direct sales efforts. The platform's user-friendly interface and personalized approach ensure high customer engagement and retention. The company also plans to leverage data-driven marketing techniques to optimize customer acquisition and conversion rates.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 7,
      title: "Market & Competition",
      content: "The market for digital health solutions is experiencing rapid growth, with a projected CAGR of 20% over the next five years. The total addressable market is estimated to be in the billions, driven by increasing healthcare costs and the need for more efficient and patient-centric solutions. While there are existing competitors in the market, the company's unique value proposition and superior technology position it for significant market share capture.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 8,
      title: "Finances",
      content: "The company's financial plan demonstrates a clear path to profitability. With a current revenue of $X million, the company projects a 3x increase in revenue over the next three years. Key performance indicators, such as customer acquisition cost and customer lifetime value, are favorable and indicate strong financial health.",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 9,
      title: "Financing Needs and Use of Capital",
      content: "The company is seeking to raise $X million in this funding round to support its expansion plans. The capital will be primarily allocated towards product development, sales and marketing efforts, and talent acquisition. A portion of the funds will also be reserved for potential strategic partnerships and market expansion.",
     isEditing:false,
     isExpanded: true
    },
    {
      id: 10,
      title: "Investment Hypothesis",
      content: "This health startup presents a compelling investment opportunity due to its unique product offering, experienced team, scalable business model, and significant market potential. The company's innovative approach to healthcare delivery positions it for rapid growth and disruption in the industry. With a clear path to profitability and a strong market position, this investment has the potential to generate substantial returns for investors.",
      isEditing:false,
      isExpanded: true
    }
  ];

  toggleEdit(card: any) {
    card.isEditing = !card.isEditing;
  }

  saveEdit(card: any) {
    card.isEditing = false;
  }
}
