import * as images from "../../../../@exampleAssets";
import moment from "moment";

/* eslint-disable max-len */
export default [
  {
    title: "Teams",
    conversations: [
      {
        id: 1,
        name: "Office Managers",
        status: "online",
        last_message: {
          time: moment().subtract(1, "hours"),
          message:
            "We have lake-front vacation rentals. No specific liability waiver for that, but this is some more text here."
        },
        users: [
          {
            imgUrl: images.a01
          },
          {
            imgUrl: images.a06
          },
          {
            imgUrl: images.a11
          }
        ]
      },
      {
        id: 2,
        name: "Finance Team",
        notification: 2,
        last_message: {
          time: moment().subtract(2, "days"),
          message:
            "Hi guys, can you help me on this one? I do really need help. I’m really exhausted today and I would appreciate your touch."
        },
        users: [
          {
            imgUrl: images.a04
          },
          {
            avatarPlaceholder: { color: "yellow", content: "JP" }
          }
        ]
      }
    ]
  },
  {
    title: "Personal",
    conversations: [
      {
        id: 3,
        name: "Ivan Copeland",
        status: "online",
        last_message: {
          time: moment().subtract(746, "seconds"),
          message:
            "I was watching a tv program on Joanne Lumley in Japan and she was staying in this sketchy hotel."
        },
        users: [
          {
            imgUrl: images.a27
          }
        ],
        building: {
          name: "Bauhaus Archive",
          imgUrl: images.b19
        }
      },
      {
        id: 4,
        name: "Delia Saunders",
        status: "online",
        last_message: {
          time: moment().subtract(882, "seconds"),
          message:
            "A lady with a 4,5 star rating (4,5 on everything) has just made a reservation."
        },
        users: [
          {
            avatarPlaceholder: { color: "indigo", content: "DS" }
          }
        ],
        building: {
          name: "Lloyd's Building",
          imgUrl: images.b02
        }
      },
      {
        id: 5,
        name: "Lelia Alexander",
        last_message: {
          time: moment().subtract(1758, "seconds"),
          message:
            "You always give good advice. What would you say to someone asking you about what you do with such knowledge?"
        },
        users: [
          {
            imgUrl: images.a25
          }
        ],
        building: {
          name: "Dome of the Rock",
          imgUrl: images.b05
        }
      },
      {
        id: 6,
        name: "Lela Phelps",
        last_message: {
          time: moment().subtract(17258, "seconds"),
          message:
            "Can they leave them at the beach. I just hate it when my stress levels goes up rocket high."
        },
        users: [
          {
            imgUrl: images.a13
          }
        ],
        building: {
          name: "Lotus Temple",
          imgUrl: images.b08
        }
      }
    ]
  }
];
