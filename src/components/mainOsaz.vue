<template>
    <v-container fluid grid-list-md>
       

   

    <v-navigation-drawer
      v-model="drawer"
     
      absolute
      class="black"
      width="500"
      temporary
    >
      <v-list class="pa-1">
      

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text" >John Leider</v-list-tile-title>
          </v-list-tile-content>

     
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
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn   class="buttonheight" round outline color="black">  <router-link to="/about">About Me</router-link> 
                        <v-icon color="" right>fa-fire</v-icon>
                    </v-btn>
                </v-flex>

                <v-flex d-flex xs4 sm4 md4>

                    <v-btn round class="buttonheight" outline color="black">
                        Expertise <v-icon right>fa-clipboard </v-icon>
                    </v-btn>
                </v-flex>
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn @click.stop="drawer = !drawer" round outline class="buttonheight" color="black">
                        Contact
                        <v-icon right>fa-address-card </v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>

            <v-layout row wrap class="buttonsforxsanddown" hidden-md-and-up && hidden-xs-only>
                <!-- buttons for the next view after the biggest -->
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn class="buttonheight" round color="black"> About Me
                        <v-icon right>fa-fire</v-icon>



                    </v-btn>

                </v-flex>

                <v-flex d-flex xs4 sm4 md4>

                    <v-btn round class="buttonheight" outline color="black">
                        Expertise <v-icon right>fa-clipboard </v-icon>
                    </v-btn>
                </v-flex>
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn round class="buttonheight" color="black">
                        Contact
                        <v-icon right>fa-address-card </v-icon>
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
                mini:null

            }
        },
        methods: {
            setClass() {

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