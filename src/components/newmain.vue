<template>
    <v-container fluid grid-list-md>
       

   

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      class="black"
      width="500"
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon color="white" >chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text" >John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon color="white" >chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          
          class="white--text"
        >
          <v-list-tile-action>
            <v-icon color="red" right>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>



     
        <div>
            <v-layout id="osazIntro" column wrap>
                <v-flex d-flex xs12 sm12 md3>
                    <v-flex hidden-sm-and-down d-flex>
                        <!-- <span  class="display-3" ></span>  -->
                        <vue-typer class="display-2"
                            :text='["Hi, I am Osagie Jacob","Here, you will find all you need to know about me"]'
                            :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='70'
                            :type-delay='100' :pre-erase-delay='2000' :erase-delay='250' erase-style='backspace'
                            :erase-on-complete='true' caret-animation='expand'></vue-typer>
                    </v-flex>
                    <v-flex hidden-sm-and-up d-flex>
                        <!-- <span  class="display-1" >Hi, I'm Osagie Jacobs</span>  -->
                        <vue-typer class="title" :text='["Hi, I am Osagie Jacob","Here, you will find info on me"]'
                            :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='70'
                            :type-delay='100' :pre-erase-delay='2000' :erase-delay='250' erase-style='backspace'
                            :erase-on-complete='true' caret-animation='expand'></vue-typer>

                    </v-flex>
                    <v-flex hidden-xs-only && hidden-md-and-up d-flex>
                        <!-- <span  class="display-1" >Hi, I'm Osagie Jacobs</span>  -->
                        <vue-typer class="display-1" :text='["Hi, I am Emmanuel","Here, you will find info on me"]'
                            :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='70'
                            :type-delay='100' :pre-erase-delay='2000' :erase-delay='250' erase-style='backspace'
                            :erase-on-complete='true' caret-animation='expand'></vue-typer>

                    </v-flex>
                </v-flex>
            </v-layout>


            <!-- md up to large viewports -->
            <v-layout row wrap class="buttons" hidden-sm-and-down>

                <!-- Buttons for the biggest view -->
                <v-flex  v-for="(link, index) in links" :key="index" d-flex xs4 sm4 md4>
                    <v-btn @click="goTo(index)"  router class="buttonheight" round outline color="black"> 
                        {{link.text}}
                        <v-icon color="" right> {{link.icon}} </v-icon>
                    </v-btn>
                </v-flex>
                  <v-flex d-flex xs4 sm4 md4>
                    <v-btn @click="drawer = !drawer"   class="buttonheight" round outline color="black"> 
                        Contact
                        <v-icon color="" right> fa-address-card </v-icon>
                    </v-btn>
                </v-flex>               
            </v-layout>



                     <!-- buttons for the next view after the biggest -->


            <v-layout row wrap class="buttonsforxsanddown" hidden-md-and-up && hidden-xs-only>
               
               <v-flex v-for="(link, index) in links" :key="index" d-flex xs4 sm4 md4>
                    <v-btn   class="buttonheight" round outline color="black"> 
                        {{link.text}}
                        <v-icon color="" right> {{link.icon}} </v-icon>
                    </v-btn>
                </v-flex>
                  <v-flex d-flex xs4 sm4 md4>
                    <v-btn @click="drawer = !drawer"   class="buttonheight" round outline color="black"> 
                        Contact
                        <v-icon color="" right> fa-address-card </v-icon>
                    </v-btn>
                </v-flex>

               
            </v-layout>

            <v-layout column wrap class="buttonssmandup" hidden-sm-and-up>
                <!-- Buttons for the smallest view -->
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn class="buttonheight" outline round color="black"> About Me
                        <v-icon right>fa-fire</v-icon>
                    </v-btn>

                </v-flex>

                <v-flex d-flex xs4 sm4 md4>

                    <v-btn round outline class="buttonheight" color="black">
                        Expertise <v-icon right>fa-clipboard </v-icon>
                    </v-btn>
                </v-flex>
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn round class="buttonheight" outline color="black">
                        Contact
                        <v-icon right>fa-address-card </v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>


        </div>


    </v-container>
</template>


<script>
    export default {

        data() {
            return {
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando.
             Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, 
             explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu,
              alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
                drawer: null,
                items: [{
                        title: '@Osagie',
                        icon: 'fab fa-twitter'
                    },
                    {
                        title: '@osagie',
                        icon: 'fab fa-instagram'
                    },
                ],
                mini:null,
                links: [
                    {
                        icon: 'fa-fire', text: 'About', route: '/about'
                    },
                    {
                        icon: 'fa-clipboard', text: 'Expertise', route: '/expertise'
                    }

                ]

            }
        },
        methods: {
            goTo(index) {
                console.log(index);
                if (index === 0) {
                    this.$router.push({ path: `/about` });
                } else if (index === 1) {
                    this.$router.push({ path: `/expertise` })
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .buttons {
        position: relative;
        top: 13rem;
    }

    #osazIntro {
        position: relative;
        top: 2rem;
    }

    .buttonssmandup {
        position: relative;
        top: 15rem;
    }

    .buttonsforxsanddown {
        position: relative;
        top: 10rem;

    }

    .buttonheight {
        height: 4rem;
    }

 
</style>