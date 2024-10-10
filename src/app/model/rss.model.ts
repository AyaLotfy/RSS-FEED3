
export class RSS {
    // "title": "Honda teams up with GM on self-driving cars",
    // "link": "http://money.cnn.com/2018/10/03/technology/gm-honda-cruise-automomous-car/index.html?section=money_technology",
    
    // "pubDate": "Wed, 03 Oct 2018 10:15:35 EDT",
    // "content": "Read full story for latest details.",
    // "contentSnippet": "Read full story for latest details.",
    // "guid": "http://money.cnn.com/2018/10/03/technology/gm-honda-cruise-automomous-car/index.html?section=money_technology",
    // "isoDate": "2018-10-03T14:15:35.000Z"
  constructor
    (
      public title: string = '',
      public link: string = '',
      public pubDate: string = '',
      public content: string = '',
      public contentSnippet: string = '',
      public guid: string = '', 
      public isoDate: string = ''
    ) {

  }
 
}

