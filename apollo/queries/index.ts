import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
  query LoginByGoogle($google_token: String!) {
    loginByGoogle(google_token: $google_token) {
      id
      name
      created_at
      social_type_id
      access_token
      expires_in
      profile_url
    }
  }
`;

export const REFRESH_TOKEN = gql`
  query {
    refreshToken {
      id
      name
      access_token
      expires_in
      profile_url
    }
  }
`;

export const GET_ROOMS = gql`
  query GetRooms {
    rooms {
      id
      title
      receiver {
        id
        name
      }
      inviter {
        id
        name
      }
      location {
        latitude
        longitude
      }
      reserved_time
      completed_time
      roomStatus {
        id
        name
      }
      recentChat {
        id
        content
        isSender
        created_at
      }
      lastViewedChat {
        id
        content
        isSender
        created_at
      }
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($room_id: String!, $offset: Int, $limit: Int) {
    room(room_id: $room_id) {
      id
      title
      receiver {
        id
        name
      }
      inviter {
        id
        name
      }
      location {
        latitude
        longitude
      }
      reserved_time
      completed_time
      roomStatus {
        id
        name
      }
      chats(offset: $offset, limit: $limit) {
        id
        content
        created_at
        room_id
        isSender
        chat_type_id
        sender {
          id
        }
      }
      recentChat {
        id
        content
        isSender
        created_at
      }
      lastViewedChat {
        id
        content
        isSender
        created_at
      }
    }
  }
`;

export const GET_CHATS = gql`
  query GETCHAT($room_id: String!, $offset: Int, $limit: Int) {
    chats(room_id: $room_id, offset: $offset, limit: $limit) {
      id
      isSender
      content
      created_at
      room_id
      chat_type_id
      sender {
        id
      }
    }
  }
`;
