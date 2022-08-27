
import { StreamingServiceDto } from './streaming-service-dto';

export const ALLFILMS: StreamingServiceDto[] = [
    {
        name: "Netflix",
        films: [
          {
            title: "Bird Box",
            genre: [
              "Mystery",
              "Sci-Fi"
            ],
            active: true,
            poster: "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png"
  
          },
          {
            title: "Im Thinking of Ending Things",
            genre: [
              "Horror",
              "Drama"
            ],
            active: true,
            poster: "https://phsnews.com/wp-content/uploads/2020/11/Im_Thinking_of_Ending_Things.jpg"
          },
          {
            title: "The Grey Man",
            genre: [
              "Action"
            ],
            active: true,
            poster: "https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png"
          }
        ]
      },
      {
        name: "HBO",
        films: [
          {
            title: "Justice League",
            genre: [
              "Action"
            ], 
            active: true,
            poster: "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/justice_league_whv_keyart.jpg"
          },
          {
            title: "The Wire",
            genre: [
              "Drama"
            ],
            active: true,
            poster: "https://m.media-amazon.com/images/I/81ucKbnIugS._SL1500_.jpg"
          },
          {
            title: "Whiplash",
            genre: [
              "Drama",
              "Suspense"
            ],
            active: true,
            poster: "https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg"
          },
        ]
      },
      {
        name: "Hulu",
        films: [
          {
            title: "127 Hours",
            genre: [
              "Suspense"
            ],
            active: true,
            poster: "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE0OTc5Mw@@._V1_.jpg"
          },
          {
            title: "Looper",
            genre: [
              "Action",
              "Sci-Fi"
            ],
            active: true,
            poster: "https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_FMjpg_UX1000_.jpg"
          },
          {
            title: "Prometheus",
            genre: [
              "Sci-Fi",
              "Suspense"
            ],
            active: true,
            poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Prometheusposterfixed.jpg"
          }
        ]
      }
    ]