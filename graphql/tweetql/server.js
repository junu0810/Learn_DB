import { ApolloServer, gql } from "apollo-server";
import fetch from 'node-fetch'


let tweets =[
  {
    id:"1",
    text:"first one",
    userId: "2"
  },
  {
    id:"2",
    text:"Bye",
    userId: "1"
  }
]

let users = [
  {
  id: "1",
  firstname: "Baek",
  lastname: "Joon", 
  // fullName: "BaekJoon"
  },
  {
  id: "2",
  firstname: "Tom",
  lastname: "Holand",
  // fullName: "SpiderMan"
  }
]

const typeDefs = gql`
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allMovies: [Movie!]!
    allUser : [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
    ping : String!
    test : Test!
  }
  type company {
    com_uid: String,
    com_name: String,
    com_licence_no: String,
    com_address: String,
    com_contact_no: String,
    com_email: String,
    com_description: String,
    com_joindate: String,
    com_account_no: String,
    bank_name: String
  }
  type bank {
    String : String
  }
  type Test {
    companyallcount: String,
    company_list: [company ],
    bank_list: [bank]
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    deleteTweet(id: ID!): Boolean!
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
  }
`;
 
const resolvers = {
  Query: {
    //argumen로 받는값에 따라 데이터를 보내준다.
    tweet(root, {id}){
      return tweets.find(tweet => tweet.id = id)
    },
    ping(){
      return "pong"
    },
    // allTweets을 통해서 tweets배열을 return해준다.
    allTweets(){
      return tweets
    },
    allUser(){
      return users
    },
    // REST API를 통해 데이터를 가공하여 보내주는 방법 
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((r) => r.json())
        .then((json) => json.data.movies);
    },
    movie(_, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((r) => {
          console.log(r)
          r.json()
        })
        .then((json) => json.data.movie);
    },
    test(){
      return fetch("http://127.0.0.1:8000/company/")
      .then((r) => {
       return r.json()
      })
      .then((json) => {
        // console.log(json.data)
        console.log(json)
        return json}
        );
      }

  },
  Mutation: {
    postTweet(__, {text, userId}){
      const newTweet = {
        id: tweets.length + 1,
        text,
      }
      tweets.push(newTweet)
      return newTweet
    },
    deleteTweet(__, args){
      const tweet = tweets.find(tweet => tweet.id == args.id)
      if(!tweet) return false
      tweets = tweets.filter(tweet => tweet.id !== args.id)
      return true
    }
  },
  User:{
    // fullName이라는 칼럼이 없으므로 여기서 칼럼을 지정하여 값을 만들어 준다..
    // fullName(){
    //   return "Hello"
    // }
    // 해당 유저의 칼럼을 argument로 가져서 데이터를 생성할 수 있다.
    fullName({firstname, lastname}){
      return `${firstname} ${lastname}`
    }
  },
  Tweet:{
    //Tweet의 author 부분을 확인하여 User와의 관계를 형성해준다.
    author({ userId }){
      return users.find(user => user.id === userId)
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});

// type User {
//   id: ID
//   username: String
// }
// type Tweet {
//   id: ID
//   text: String
//   hello: String
//   author: User
// }
// type Query {
// allTweets안에 전체 Tweet이 배열형태로 출력된다.
//   allTweets: [Tweet]
// Params에 들어가는 id값을 받아서 처리해주는 부분 (GET /api/v1/tweet/:id)
//   tweet(id: ID): Tweet
// }
// POST, DELETE 요청과 같은것은 Mutation안에 넣어서 관리한다. 
// type Mutation {
// POST 요청의 경우 text에 내용을 그리고 userID 에 작성자 id를 입력하도록 한다.
//   postTweet(text: String, userId: ID): Tweet
//   deleteTweet(id: ID!): Boolean!
// }
// graphql은 기본적으로 nullable이 된다 따라서 require로 필드를 만들고 싶으면 !를 뒤에 붙이면 Notnull필드가 된다. (EX : deleteTweet(id: ID!): Boolean!)

// https://altair.sirmuel.design/ 에서 graphql을 관리할 수 있는 클라이언트 및 프로그램을 받을 수 있다.(Graphql을 위한 시스템으로 에러발생시 좀더 상세히 나온다.)