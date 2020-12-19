//指定代理的前缀
let prefix = "/api/";
//导出
export default {
    //城市信息获取
    getcity: prefix + "getCitiesInfo",

    //正在热映数据获取
    getnowplaying: prefix + "getNowPlayingFilmList",

    //即将上映数据
    getComingSoon: prefix + "getComingSoonFilmList",
}