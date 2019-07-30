<template>
    <v-container fluid grid-list-md>
        
          <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="400"
     
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
     
          
       

      <v-divider></v-divider>

      <v-list>
          <div>
                <span  class="title mt-5" >Osagie Jacobs</span>
              <v-btn color="black">text <v-icon> fas fa-twitter </v-icon></v-btn>
               
          </div>
         
        
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
                        <vue-typer class="title"
                            :text='["Hi, I am Osagie Jacob","Here, you will find info on me"]'
                            :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='70'
                            :type-delay='100' :pre-erase-delay='2000' :erase-delay='250' erase-style='backspace'
                            :erase-on-complete='true' caret-animation='expand'></vue-typer>

                    </v-flex>
                     <v-flex hidden-xs-only && hidden-md-and-up d-flex>
                        <!-- <span  class="display-1" >Hi, I'm Osagie Jacobs</span>  -->
                        <vue-typer class="display-1"
                            :text='["Hi, I am Osagie Jacob","Here, you will find info on me"]'
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
                    <v-btn class="buttonheight" round outline color="black"> About Me
                        <v-icon right>fa-fire</v-icon>



                    </v-btn>

                </v-flex>

                <v-flex d-flex xs4 sm4 md4>

                    <v-btn round class="buttonheight" outline color="black">
                        Expertise <v-icon  right>fa-clipboard </v-icon>
                    </v-btn>
                </v-flex>
                <v-flex d-flex xs4 sm4 md4>
                    <v-btn  @click.stop="drawer = !drawer" round outline class="buttonheight" color="black">
                        Contact
                        <v-icon right>fa-envelope </v-icon>
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
                        <v-icon right>fa-envelope </v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>

            <v-layout column wrap class="buttonssmandup" hidden-sm-and-up>
                <!-- Buttons for the smallest view -->
                 <v-flex d-flex xs4 sm4 md4>
                     <v-btn class="buttonheight" flat round color="black"> About Me
                         <v-icon right>fa-fire</v-icon> </v-btn>

                 </v-flex>

                 <v-flex d-flex xs4 sm4 md4>

                     <v-btn round class="buttonheight" flat  color="black">
                         Expertise <v-icon color="green" right>fa-clipboard </v-icon>
                     </v-btn>
                 </v-flex>
                 <v-flex d-flex xs4 sm4 md4>
                     <v-btn round class="buttonheight" flat color="black">
                         Contact
                         <v-icon right>fa-envelope </v-icon>
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
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ]

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

    .vue-typer {
        color: #1DE9B6
    }
</style>