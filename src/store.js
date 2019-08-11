import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        camerax: {
            lon: 0,
            lat: 0,
            // height: 0,
            // alt: 0,
            // heading: 0,
            // pitch: 0,
            // roll: 0
        }
    },
    mutations: {
        updateCamera(state) {
            console.log(" mutations state", state);
            // state.camera=
            // state.camera.lon = 100;
            // state.camera.lat = 200;
            // state.camera.height = height;
            // state.camera.alt = alt;
        }

    },
    actions: {
        updateCamera(context) {
            console.log("update..");
            console.log(context);


            context.commit('updateCamera')
        }
    }
})
