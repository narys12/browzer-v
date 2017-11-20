<template>
  <div>
    <v-layout>
      <v-flex xs12 md6>
        <v-card v-for="memory in memories" :key="memory.id">
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex xs2 md1>
                <v-avatar size="36px" slot="activator">
                  <img :src="memory.user.avatar" alt="">
                </v-avatar>
              </v-flex>
              <v-flex xs10 md11>
                <v-layout row wrap>
                  <v-flex xs12>
                    <strong>{{ memory.user.displayName }}</strong>
                  </v-flex>
                  <v-flex xs12>
                    <v-icon color="blue">place</v-icon>
                    {{ memory.location.state }} . {{ memory.location.city }} . {{ memory.location.place }}
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-media :src="memory.gallery[0]"
            height="200px">
          </v-card-media>
          <v-card-title class="grey--text">
            {{ memory.date | moment("from") }}
          </v-card-title>
          <v-card-actions class="white">
            <v-icon color="red" v-if="memory.likes.includes(memory.user.id)">thumb_up</v-icon>
            <v-icon v-else>thumb_up</v-icon>
            {{ memory.likes.length }}
            <v-spacer></v-spacer>
            <v-icon>mode_comment</v-icon>
            {{ memory.commentsCount }}
            <v-spacer></v-spacer>
            <v-icon>view_module</v-icon>
            {{ memory.gallery.length }}
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        memories: [
          {
            id: '1',
            user: {
              id: '1',
              displayName: 'Douz12',
              name: 'Naris Raz',
              avatar: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2698155/1160/772/m1/fpnw/wm0/supertramp-2017-.jpg?1494963184&s=0b92c85a15996f9dd8f0c4eee8c16f07'
            },
            location: {
              place: 'Vieux Port',
              country: '',
              city: 'Marseille',
              state: 'France'
            },
            date: Date.now(),
            gallery: [
              'https://imghtlak.mmtcdn.com/blog/sites/default/files/road-trip-indian-license.jpg',
              'https://pre00.deviantart.net/e478/th/pre/i/2012/191/f/7/trip_to_dabravino___the_path_in_the_forest_by_thegoldeagle-d56olmu.jpg'
            ],
            likes: [
              '1', '2'
            ],
            commentsCount: 3
          },
          {
            id: '2',
            user: {
              id: '2',
              displayName: 'Naris Raz',
              name: 'Naris Raz',
              avatar: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2698155/1160/772/m1/fpnw/wm0/supertramp-2017-.jpg?1494963184&s=0b92c85a15996f9dd8f0c4eee8c16f07'
            },
            location: {
              place: 'Vieux Port',
              country: '',
              city: 'Marseille',
              state: 'France'
            },
            description: 'Cool pics from my trip in France',
            date: Date.now(),
            gallery: [
              'https://pre00.deviantart.net/e478/th/pre/i/2012/191/f/7/trip_to_dabravino___the_path_in_the_forest_by_thegoldeagle-d56olmu.jpg'
            ],
            likes: [
              '3'
            ],
            commentsCount: 3
          }
        ]
      }
    }
}
</script>