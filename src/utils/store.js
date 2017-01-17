import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'



Vue.use(Vuex);
Vue.use(VueResource)

const state = {
  audio: {
    id: "",
    mp3Url: '',
    // mp3Url: "http://m2.music.126.net/BNTFaNAVmryQkoyuMTvIWw==/3442570907099641.mp3",
    imgUrl: "http://p4.music.126.net/dqCjAdyVSI0y4y1Jc_Q_cQ==/2429920697409434.jpg?param=130y130",
    name: '未知',
    artists: [],
    duration: 0,
    currentTime: 0,
    // ablum: {},
    popularity: 0
  },
  isPlay: true,
  currentListInfo: {
    audioList: [],
    ids: new Set()
  },
  favListInfo: {
    audioList: [],
    ids: new Set()
  },
  searchListInfo: {
    audioList: [],
    ids: new Set()
  },
  loadingState: true,
  currentIndex: 0,
  toggleHeader: true,
  togglePlaylist: false
}
const getters = {
  audio: state => state.audio,
  isPlay: state => state.isPlay,
  ablum: state => state.audio.ablum,
  loadingState: state => state.loadingState,
  curList: state => state.currentListInfo.audioList,
  favList: state => state.favListInfo.audioList,
  searchList: state => state.searchListInfo.audioList,
  currentIndex: state => state.currentIndex,
  togglePlaylist: state => state.togglePlaylist,
  toggleHeader: state => state.toggleHeader
}

const mutations = {
  toggleAudioLoadding: (state, flag) => {
    state.audioLodding = flag;
  },
  toggleHeader: (state, flag) => {
    state.toggleHeader = flag;
  },
  togglePlaylist(state, flag) {
    state.togglePlaylist = flag;
  },
  playAudio(state, index) {
    var audio = state.currentListInfo.audioList[index];
    state.currentIndex = index;
    state.audio = {...(state.audio),
      ...audio
    };
  },
  addAudioList(state, {
    audio,
    type = ''
  }) {
    var listInfo;
    switch (type) {
      case 'current':
        listInfo = state.currentListInfo
        break;
      case 'favor':
        listInfo = state.favListInfo
        break;
      case 'search':
        listInfo = state.searchListInfo
        break;
      default:
        listInfo = state.currentListInfo
    }
    if (!listInfo.ids.has(audio.id)) {
      listInfo.audioList.push(audio);
      listInfo.ids.add(audio.id);
    }
  },
  setAudioList(state, {
    audioList,
    type = ''
  }) {
    var listInfo;
    switch (type) {
      case 'current':
        listInfo = state.currentListInfo
        break;
      case 'favor':
        listInfo = state.favListInfo
        break;
      case 'search':
        listInfo = state.searchListInfo
        break;
      default:
        listInfo = state.currentListInfo
    }
    listInfo.audioList = {...(listInfo.audioList),
      ...audioList
    }
  },
  addSearchList(state, audio) {
    if (!state.searchListInfo.ids.has(audio.id)) {
      state.searchListInfo.audioList.push(audio);
      state.searchListInfo.ids.add(audio.id);
    }
  },
  setSearchList(state, audioList) {
    state.searchListInfo.searchList = {...(state.searchListInfo
        .audioList),
      ...audioList
    }
  },
  playAudioCurrentTime(state, time) {
    state.audio.currentTime = time;
  },
  isPlay(state, flag) {
    state.isPlay = flag;
  },

  deleteAudio(state, index) {
    state.currentListInfo.audioList.splice(index, 1);
  }
}

const actions = {
  getRadio({
      commit,
      state
    }, type) {
      commit("toggleAudioLoadding", true);
      // this.$Loading.start()
      console.log("测试这里！" + type)
      Vue.http.get(`http://127.0.0.1:1234/radio`)
        .then((res) => {
          // this.$Loading.finish()
          var audio = JSON.parse(res.body)
            .audio;
          if (type == 'init') {
            commit('setAudioList', audio)
          } else if (type == 'radio') {
            commit('setSearchList', audio)
          }
          console.log("测试这里 audio ！" + audio)
        })
        .catch(function (err) {
          // this.$Loading.failed()
          console.log("发生错误" + err)
            //
        });
    },
    getSong({
      commit,
      state
    }, id) {
      Vue.http.get(`http://127.0.0.1:1234/songDetail?id=${id}`)
        .then((res) => {
          var audio = JSON.parse(res.body)
            .audio;
          commit('addAudioList', audio)
          commit('playAudio', currentIndex + 1);
        })
        .catch((err) => {
          console.log("获取音乐失败" + err);
        })
    },
    search({
      commit,
      state
    }, param) {
      Vue.http.get(`http://127.0.0.1:1234/search?q=${param}`)
        .then((res) => {
          res = Array.of(res);
          commit('setSearchList', res);
        })
        .catch((err) => {
          console.log("查询失败" + err);
        })
    },
    getPlaylist({
      commit,
      state
    }, id) {
      Vue.http.get(`http://127.0.0.1:1234/playlist?id=${id}`)
        .then((res) => {
          res = JSON.parse(res.body);
          [].map.call(res, (item) => {
            console.log("测试" + item)
            commit('addSearchList', item);
          });
        })
        .catch((err) => {
          console.log("获取失败" + err);
        })
    }
    // ,initSearch
}


const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

export default store;
