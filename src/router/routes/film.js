import films from "@/views/Films/Films"
import nowplaying from "@/views/Films/NowPlaying"
import commingsoon from "@/views/Films/CommingSoon"

var filmRouter= {path:"/films",
component:films,
redirect:"/films/nowplaying",
children:[
  {path:"nowplaying",component:nowplaying},
  {path:"commingsoon",component:commingsoon}
]   
};

export default filmRouter