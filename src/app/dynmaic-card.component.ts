import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-dynamic-card',
    template: `
        <div class="cp">
      <div *ngFor="let card of cards; let i = index" class="card card-1" (click)="select(i)">
      <div class="card-content">
             <div class="a-l card-ti"> {{ card.title }}  </div>
             <div class="a-l card-content"> {{ card.content }}  </div>
        </div>
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
    @Input() dataFromParent: String;
    @Output() sendDataToParent = new EventEmitter<string>();
    select(i:any){
        this.sendDataToParent.emit(i);
    }
    dummy: any = [
        {
          id: 1,
          title: "Investment Highlights",
          content: "",
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
          title: "Product/Service",
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
        }
    ]
    change(id:any){
        this.cards[id].content = this.dummy[id].content;
    }

  cards: any = [
    {
      id: 1,
      title: "Investment Highlights",
      content: "BarWash Limited\n\n1. Investment Highlights:\nBarWash Limited is a UK registered limited company that aims to commercialize an innovative format for the bars, pubs, and clubs industry. The company offers a unique value proposition by combining a full-service laundrette and a fully-licensed bar in a single, city-center location. Directed primarily at young people, BarWash aims to provide convenience and fun by offering laundry services, a bar, coffee shop, catering, and internet access. The company has a first-mover advantage in a new segment within a mature market and has the potential for further expansion.\n\n",
      isEditing:false,
       isExpanded: true
    },
    {
      id: 2,
      title: "USP",
      content: "\nBarWash stands out from the competition by offering a comprehensive range of products and services within a single complex. The combination of laundry facilities, a bar, coffee shop, catering, and internet access creates a unique and convenient experience for customers. The company's value proposition is based on the principles of convenience and fun, making the chore of doing laundry as painless as possible.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 3,
      title: "Product/Service",
      content: "\nBarWash offers state-of-the-art laundry facilities for washing and drying clothes, along with additional value-added services such as ironing, folding, dry cleaning drop-off, and collection. The company also operates a fully-licensed bar, a coffee shop, and catering services. Customers can also enjoy wireless internet access while using the facilities.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 4,
      title: "Team",
      content: "\nThe management team of BarWash consists of experienced directors with a background in the bars, pubs, and clubs industry. The team has close links with the local and national press, which will be leveraged for promotional campaigns.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 5,
      title: "Business Model",
      content: ":\nBarWash generates revenue through the sale of laundry services, food and beverages, and merchandising. The company offers competitive pricing for its products and services, with mark-ups on consumables ranging from 30% to 70%. The business model is designed to target the niche student, key worker, and young professional markets.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 6,
      title: "Marketing & Distribution",
      content: "\nBarWash plans to reach its target customers through focused promotional campaigns, including advertising in student newspapers and magazines, flyers and posters, radio spots, and sponsoring student sports teams. The company will also target student accommodation in the proposed catchment area. Public relations and ongoing promotional strategies will be implemented to generate awareness and attract customers.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 7,
      title: "Market & Competition",
      content: "\nThe market opportunity for BarWash is significant, with a large potential customer base of young people, particularly students and young professionals. The company's unique concept and value proposition differentiate it from competitors. However, low barriers to entry and the potential for government regulations in the marketing of alcoholic drinks pose risks and threats.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 8,
      title: "Finances",
      content: "\nThe market opportunity for BarWash is significant, with a large potential customer base of young people, particularly students and young professionals. The company's unique concept and value proposition differentiate it from competitors. However, low barriers to entry and the potential for government regulations in the marketing of alcoholic drinks pose risks and threats.\n\n",
      isEditing:false,
      isExpanded: true
    },
    {
      id: 9,
      title: "Financing Needs and Use of Capital",
      content: "\nBarWash is seeking capital investment to fund its start-up and strategic implementation. The company aims to use the capital to establish its brand, secure suitable properties, and expand its operations.\n\n",
     isEditing:false,
     isExpanded: true
    },
    {
      id: 10,
      title: "Investment Hypothesis",
      content: "\nBarWash presents a compelling investment opportunity due to its unique value proposition, experienced management team, and significant market potential. The company's innovative concept and potential for further expansion make it an attractive investment option.\n\nPlease note that this investment memo contains certain analyses, statements, estimates, and forward-looking projections that reflect management's views and involve various risks and uncertainties. Investors should carefully consider the information provided and conduct their own due diligence before making any investment decisions",
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
