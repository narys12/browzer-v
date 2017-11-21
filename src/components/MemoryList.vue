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
                    {{ memory.date | moment("from") }}
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-flex xs12>
            <v-card color="light-blue lighten-4" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                      <v-card-media
                        :src="memory.gallery.main.src"
                        height="125px"
                        contain
                      ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-card-actions class="white">
            <v-icon color="red lighten-2" v-if="memory.likes.includes(memory.user.id)">thumb_up</v-icon>
            <v-icon v-else>thumb_up</v-icon>
            {{ memory.likes.length }}
            <v-spacer></v-spacer>
            <v-icon>mode_comment</v-icon>
            {{ memory.commentsCount }}
            <v-spacer></v-spacer>
            <v-icon>view_module</v-icon>
            {{ memory.gallery.count }}
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
            date: Date.now(),
            gallery: {
              main: {
                src: 'https://imghtlak.mmtcdn.com/blog/sites/default/files/road-trip-indian-license.jpg',
                location: {
                  place: 'Vieux Port',
                  country: '',
                  city: 'Marseille',
                  state: 'France'
                }
              },
              count: 1
            },
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
            gallery: {
              main: {
                src: 'https://pre00.deviantart.net/e478/th/pre/i/2012/191/f/7/trip_to_dabravino___the_path_in_the_forest_by_thegoldeagle-d56olmu.jpg',
                location: {
                  place: 'Tsy aiko',
                  country: '',
                  city: 'Toamasina',
                  state: 'Madagascar'
                }
              },
              count: 1
            },
            description: 'Cool pics from my trip in France',
            date: Date.now(),
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
