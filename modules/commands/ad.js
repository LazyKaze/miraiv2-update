module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "πππ«πͺ_βπ£π ππππ₯",
  description: "Kiα»m tra thΓ΄ng tin admin bot.",
  commandCategory: "ThΓ΄ng tin adminbot",
  usages: "adm",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://media.giphy.com/media/mf4qECoTz8ZVK/giphy.gif",
"https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif",
"https://media.giphy.com/media/6U47YlEnJQNeb05Csh/giphy.gif",
"https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
"https://media.giphy.com/media/TlDd1mxmPGQo/giphy.gif",
"https://media.giphy.com/media/6SpbCkTjqmsKs/giphy.gif",
"https://media.giphy.com/media/3o85xkQFBFZGLecJry/giphy.gif",
"https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
"https://media.giphy.com/media/a6pzK009rlCak/giphy.gif",
"https://i.pinimg.com/originals/1a/26/e5/1a26e51bfd0aa963e0a48618175a9836.gif",
"https://i.pinimg.com/originals/5f/8f/35/5f8f35f1bbd00e354a0a071d06fcb2ce.gif",
"https://i.pinimg.com/originals/e8/10/c0/e810c0bb9b2b38e611b75426b733f9b5.gif",
"https://i.pinimg.com/originals/ca/3c/c9/ca3cc93647057e7ccce951ce0bd777f5.gif",
"https://i.pinimg.com/originals/f8/ba/e3/f8bae313dbee24d67d29770508e8cedd.gif",
"https://i.pinimg.com/originals/c4/3c/00/c43c005a8ad97b3a860a7464f3face97.gif",
"https://i.pinimg.com/originals/88/21/b5/8821b5beb925737cecbf67b1e573fa2e.gif",
"https://i.pinimg.com/originals/72/48/62/724862d06dfbb69beb0f21e4285d3575.gif",
"https://i.pinimg.com/originals/fc/a6/1b/fca61b6693560a29210dd33dcd203f57.gif",
"https://i.pinimg.com/originals/0f/2d/b8/0f2db86540afb15dd763a99b9a248baf.gif",
"https://i.pinimg.com/originals/c6/9a/e2/c69ae2e4f239da4584b548b6dfe226ba.gif",
"https://i.pinimg.com/originals/58/1f/c7/581fc7b69f373c3cc2be99f58a840cfd.gif",
"https://i.pinimg.com/originals/be/e0/96/bee096e95d49eeb2e8539633388ca013.gif",
"https://i.pinimg.com/originals/9e/91/fe/9e91feda4e8cf0c5ddad28ee53c07f50.gif",
"https://i.pinimg.com/originals/f1/39/81/f13981f2dc628bbe208747caabdbddf3.gif",
"https://i.pinimg.com/originals/42/3c/9a/423c9a21fc58034aae78b7ebc2b62673.gif",
"https://media.giphy.com/media/1gOykJJoWktIkf2yuO/giphy.gif",
"https://4.bp.blogspot.com/-yAExPAr7JeA/WDaBRVuJwxI/AAAAAAALb7I/Dbvda0KD5uECF3_SBjsvkl2_mqP9_BweQCLcB/s1600/AS000834_17.gif",
  ];
  var callback = () => api.sendMessage({body:`π ADMIN BOT πππ«πͺ_βπ£π ππππ₯ π 
  π TΓͺn\nNguyα»n Ngα»c Anh TΓΊ
  β Tuα»i:\n2009
  π€ Giα»i tΓ­nh:\nNam
  π Sinh ngΓ y:\n18-07-2009
  π« Chiα»u cao / cΓ’n nαΊ·ng:\n1m7/?Kg
  π Mα»i quan hα»:\nΔα»c ThΓ’n
  π QuΓͺ quΓ‘n:\nQuαΊ£ng NgΓ£i
  π€ NΖ‘i α»:\nHα» ChΓ­ Minh
  βοΈ Cung:\nCα»± GiαΊ£i
  π« Gu:\nLΓΉn - Cute
  πΈ TΓ­nh cΓ‘ch:\nBα»P
  π± Facebook:\nhttps://www.facebook.com/NguyenNgocAnhTu.VN
  πΎ Zalo:\n0332413262
  π Gmail: Nguyenngocanhtuwork@gmail.com
π’ LΖ°u Γ½ cho cΓ‘c qtv vΓ  tv trong box: 
- Vui lΓ²ng khΓ΄ng spam khi sα»­ dα»₯ng Δα» trΓ‘nh die bot
- KhΓ΄ng sα»­ dα»₯ng lα»nh nhiα»u cα»§a lα»nh ΔΓ³
- Δα»«ng chα»­i bot vΓ¬ nΓ³ ΔΖ°α»£c lαΊ­p trΓ¬nh tα»± Δα»ng rα»i box
- Δα»«ng report bot vΓ¬ nΓ³ cute lαΊ―m ><
- NαΊΏu bot ko hoαΊ‘t Δα»ng hay bα» lα»i hay liΓͺn hα» qua sdt hoαΊ·c nhαΊ―n tin mess Δα» ΔΖ°α»£c liΓͺn hα» trα»±c tiαΊΏp vα»i mΓ¬nh
=> YΓͺu mα»i ngΖ°α»i nhiα»u lαΊ―m <3 hΓ£y Δα»ng hΓ nh cΓΉng vα»i bot vΓ  mΓ¬nh nhΓ© <3
------------
βDonate:
π³MB:\n955585899999\nNGUYEN NGOC ANH TU
π³VCB:\n1026350156\nNGUYEN NGOC ANH TU
π²MoMo:\n03324132632\nNGUYEN NGOC ANH TU

----πππ«πͺ_βπ£π ππππ₯----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };