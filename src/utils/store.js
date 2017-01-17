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
    popularity: -1,
    lyric: "找不到歌词"
  },
  isPlay: false,
  currentListInfo: {
    audioList: [],
    index: 0,
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
  showHead: true,
  loadingState: true,
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
  currentIndex: state => state.currentListInfo.index,
  showHead: state => state.showHead,
  togglePlaylist: state => state.togglePlaylist
}

const mutations = {
  toggleAudioLoadding: (state, flag) => {
    state.loadingState = flag;
  },
  showHead: (state, flag) => {
    state.showHead = flag;
  },
  togglePlaylist(state, flag) {
    console.log(flag)
    state.togglePlaylist = flag;
  },
  addAudioList(state, {
    audio,
    type
  }) {
    switch (type) {
      case 'current':
        {
          console.log(state + "here")
          if (state.currentListInfo.ids.has(audio.id)) {
            state.currentListInfo.audioList.map(function (item, index) {
              if (item.id === audio.id) {
                state.audio = {...(state.audio), ...(item)
                }
                state.currentListInfo.index = index
              }
            })
          } else {
            state.currentListInfo.audioList.push(audio);
            state.currentListInfo.ids.add(audio.id);
            state.audio = {...(state.audio), ...(audio)
            }
            state.currentListInfo.index = state.currentListInfo.audioList.length
          }
        }
        break;
      case 'favor':
        if (!state.favListInfo.ids.has(audio.id)) {
          state.favListInfo.audioList.push(audio);
          state.favListInfo.ids.add(audio.id);
        }
        break;
      case 'search':
        if (!state.searchListInfo.ids.has(audio.id)) {
          state.searchListInfo.audioList.push(audio);
          state.searchListInfo.ids.add(audio.id);
        }
        break;
      default:
        break;
    }
  },
  setLrc: (state, lrc) => {
    state.audio = {...(state.audio), lrc
    }
  },
  setAudioList(state, {
    audioList,
    type
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
    listInfo.audioList = audioList
  },
  setAudioCurrentTime(state, time) {
    state.audio.currentTime = time;
  },
  isPlay(state, flag) {
    state.isPlay = flag;
  },
  deleteAudio(state, index) {
    state.currentListInfo.audioList.splice(index, 1);
  },
  setAudio(state, index) {
    if (state.currentListInfo.audioList.length > 0) {
      var audio = state.currentListInfo.audioList[index];
      state.currentListInfo.index = index;
      state.audio = {...(state.audio), ...(audio)
      }
      state.isPlay = true
      state.toggleAudioLoadding = false
    }
  }
}

const actions = {

  getRadio({
      commit,
      state
    }, type) {
      commit("toggleAudioLoadding", true);
      Vue.http.get(`http://127.0.0.1:1234/radio`)
        .then((res) => {
          var audio = JSON.parse(res.body)
            .audio;
          var info = {
            audio: audio,
            type: type
          }
          commit('addAudioList', info)
        })
        .catch(function (err) {
          console.log("发生错误" + err)
        });
      commit("toggleAudioLoadding", false);
    },
    getSong({
      commit,
      state
    }, id) {
      commit("toggleAudioLoadding", true);
      Vue.http.get(`http://127.0.0.1:1234/song?id=${id}`)
        .then((res) => {
          var audio = JSON.parse(res.body)
            .song;
          var info = {
            audio: audio,
            type: 'current'
          }
          commit('addAudioList', info)
        })
        .catch((err) => {
          console.log("获取音乐失败" + err);
        })
      commit("toggleAudioLoadding", false);
    },
    search({
      commit,
      state
    }, param) {
      commit("toggleAudioLoadding", true);
      Vue.http.get(`http://127.0.0.1:1234/search?${param}`)
        .then((res) => {
          console.log(res)
          var audioList = JSON.parse(res.body);
          if (/(offset=)\S*/.test(param)) {
            audioList.map((audio) => {
              var info = {
                audio: audio,
                type: 'search'
              }
              commit('addAudioList', info)
            })
          } else {
            var info = {
              audioList: audioList,
              type: 'search'
            }
            commit('setAudioList', info)
          }
        })
        .catch((err) => {
          console.log("查询失败" + err);
        })
      commit("toggleAudioLoadding", false);
    },
    getPlaylist({
      commit,
      state
    }, id) {
      commit("toggleAudioLoadding", true);
      Vue.http.get(`http://127.0.0.1:1234/playlist?id=${id}`)
        .then((res) => {
          var audioList = JSON.parse(res.body);
          var info = {
            audioList: audioList,
            type: 'search'
          }
          commit('setAudioList', info);
        }, (err) => {
          console.log("vue-resource 失败测试:" + err)
            // 错误处理地方
        })
        .catch((err) => {
          console.log("获取失败" + err);
        })
      commit("toggleAudioLoadding", false);
    },
    getLyric({
      commit, state
    }, id) {
      commit("toggleAudioLoadding", true);
      Vue.http.get(`http://127.0.0.1:1234/playlist?id=${id}`)
        .then((res) => {
          var lyric = JSON.parse(res)
          commit('setLrc', lyric)
        })
        .catch((err) => {
          console.log("获取失败" + err);
        })
      commit("toggleAudioLoadding", false);
    }
}


const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

export default store;
