export type Language = 'zh' | 'en';

export interface Translations {
  header: {
    title: string;
    github: string;
    blog: string;
    language: string;
  };
  sections: {
    about: {
      title: string;
      content: string[];
      hobbies: string;
      hobbiesContent: string;
      favoriteAuthors: string;
      favoriteAuthorsContent: string;
      favoriteTopics: string;
      favoriteTopicsContent: string;
    };
    portfolio: {
      title: string;
      projectTitle: string;
      projectDescription: string;
      homepage: string;
    };
    skills: {
      title: string;
      general: string;
      languages: string;
      development: {
        title: string;
        philosophy: string;
        programmingLanguages: string;
        frontendFrameworks: string;
        backendFrameworks: string;
        databases: string;
        cloudProviders: string;
        developmentMode: string;
      };
      management: {
        title: string;
        content: string;
      };
    };
    contact: {
      title: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    header: {
      title: "Lucien's Home",
      github: "Github",
      blog: "博客",
      language: "English",
    },
    sections: {
      about: {
        title: "个人介绍",
        content: [
          "Lucien Chen(陈熹)，一个不断折腾的 IT 男，现居中国广东深圳。",
          "喜欢体验新鲜事物，探寻世界运行的真相。",
        ],
        hobbies: "爱好",
        hobbiesContent: "读书，编程，音乐，游戏，美食……还有小猫咪。",
        favoriteAuthors: "喜欢的作家",
        favoriteAuthorsContent: "余华，蔡崇达",
        favoriteTopics: "喜欢的话题",
        favoriteTopicsContent: "技术，认知，搞钱",
      },
      portfolio: {
        title: "作品集",
        projectTitle: "开源博客框架：TOBE-BLOG",
        projectDescription: "TOBE-BLOG 是我和几位小伙伴一起开发并运营的学习博客网站，其理念为 \"Have fun together, grow up together\"，意为\"同欢乐，共成长\"，主张长期主义的个人积累和成长（personal development）。无论是专业技能，语言学习，读书感悟，还是沟通技巧，团队管理方面，在这里都是鼓励分享的话题。未来计划会不断攒出优秀，有趣的共创项目，以创带练，以练带学。",
        homepage: "主页",
      },
      skills: {
        title: "技能树",
        general: "通用",
        languages: "自然语言：中文（普通话），英语",
        development: {
          title: "开发",
          philosophy: "开发理念：技术服务于业务，不追求极致的技术，而最求极致的收益",
          programmingLanguages: "最熟悉的编程语言：Java, Javascript, SQL, Typescript, Golang",
          frontendFrameworks: "最熟练的前端框架：React, Angular",
          backendFrameworks: "最熟练的后端框架：spring-boot 全家桶",
          databases: "最熟悉的数据库：MySQL, Oracle, Postgre",
          cloudProviders: "最熟悉的云厂商：AWS, Alicloud",
          developmentMode: "最喜欢的开发模式及框架：Agile + scrum",
        },
        management: {
          title: "管理",
          content: "5年以上敏捷开发团队管理经验，团队成员包括前后端Dev，PM，QA，DBA等。团队规模最大时达到14人。主要负责开发任务的评估，分解以及制定排期。 利用敏捷开发管理工具，确保开发任务有序开展并高质量地按时完成。 此外，2年项目管理经验，2019年获得 PMP 项目认证。",
        },
      },
      contact: {
        title: "联系方式",
      },
    },
    footer: {
      copyright: "Copyright © {year} · Lucien's Home",
    },
  },
  en: {
    header: {
      title: "Lucien's Home",
      github: "Github",
      blog: "Blog",
      language: "中文",
    },
    sections: {
      about: {
        title: "About Me",
        content: [
          "Lucien Chen, an IT enthusiast who never stops exploring, currently living in Shenzhen, Guangdong, China.",
          "I enjoy experiencing new things and exploring how the world works.",
        ],
        hobbies: "Hobbies",
        hobbiesContent: "Reading, Programming, Music, Gaming, Food... and kittens.",
        favoriteAuthors: "Favorite Authors",
        favoriteAuthorsContent: "Yu Hua, Cai Chongda",
        favoriteTopics: "Favorite Topics",
        favoriteTopicsContent: "Technology, Cognition, Making Money",
      },
      portfolio: {
        title: "Portfolio",
        projectTitle: "Open Source Blog Framework: TOBE-BLOG",
        projectDescription: "TOBE-BLOG is a learning blog website developed and operated by me and several friends. Its philosophy is \"Have fun together, grow up together\", advocating long-term personal development and growth. Whether it's professional skills, language learning, reading insights, communication skills, or team management, all topics are encouraged to be shared here. In the future, we plan to create excellent and interesting collaborative projects, learning through creation and practice.",
        homepage: "Homepage",
      },
      skills: {
        title: "Skills",
        general: "General",
        languages: "Natural Languages: Chinese (Mandarin), English",
        development: {
          title: "Development",
          philosophy: "Development Philosophy: Technology serves business, pursuit of optimal returns rather than ultimate technology",
          programmingLanguages: "Most Familiar Programming Languages: Java, Javascript, SQL, Typescript, Golang",
          frontendFrameworks: "Most Proficient Frontend Frameworks: React, Angular",
          backendFrameworks: "Most Proficient Backend Frameworks: Spring-boot family",
          databases: "Most Familiar Databases: MySQL, Oracle, Postgre",
          cloudProviders: "Most Familiar Cloud Providers: AWS, Alicloud",
          developmentMode: "Favorite Development Mode and Framework: Agile + scrum",
        },
        management: {
          title: "Management",
          content: "Over 5 years of agile development team management experience, with team members including frontend and backend developers, PMs, QAs, DBAs, etc. The largest team size reached 14 people. Mainly responsible for evaluating, breaking down development tasks, and planning schedules. Using agile development management tools to ensure tasks are carried out in an orderly manner and completed on time with high quality. Additionally, 2 years of project management experience, obtained PMP certification in 2019.",
        },
      },
      contact: {
        title: "Contact",
      },
    },
    footer: {
      copyright: "Copyright © {year} · Lucien's Home",
    },
  },
}; 