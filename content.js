// content.js
var isRunning = false;
var isPomu = false;
var isComment = false;
var isLiveChat = false;
// const memberBadge = {
//   // member 1 month
//   "https://yt3.ggpht.com/Otv-LqYLhRy6jMTfXN_j8wo7dh0_UxEuAzGM8hhZLzoNdl16NRov8SqniPBUY90jnVMYlklKI0eHLLve=s32-k-nd":
//     '<img src="https://i.ibb.co/jJtTw4G/1-seed.png" alt="1-seed" style="height:16px;width:16px">',
//   //member 2 month
//   "https://yt3.ggpht.com/A4R5j7sscJWTU0NwxoUSBQm4hcVfH7De8jrukuQ_05ITM-lNx5ENqR8zm7LFQXjkmiKj7pF85iBIfklyOg=s32-k-nd":
//     '<img src="https://i.ibb.co/r5K4pRf/2-sprout.png" alt="2-sprout" style="height:16px;width:16px">',
//   //member 3 month
//   "https://yt3.ggpht.com/6YYy6158MQ8Y1a05XVlQUhrXpQRz8T-T2hCOnKhnn_6ysM3JjufMVBnO6oi5rwj-HFPl8A7jqpe2d4uhaQ=s32-k-nd":
//     '<img src="https://i.ibb.co/qg1DLwk/3-flower.png" alt="3-flower" style="height:16px;width:16px">',
//   //member 6 month
//   "https://yt3.ggpht.com/gAq7jDekvG5e_Az-VnKhS-Sy-rZDgyHIdGQAhks2iWlN7rMkiTlxnW5ztMW96ynyEIG1hMe67LLLCP6q=s32-k-nd":
//     '<img src="https://i.ibb.co/7bBPmkr/6-silverpp.png" alt="6-silverpp" style="height:16px;width:16px">',
//   //member 1 year
//   "https://yt3.ggpht.com/8EkhzT5LZB8Y1DrCywZwPACLpgvLpFrfkfFtT4Az8za6De8tiPys0k-6tDOSqvn8mfGAz9c8oz_rr9R_=s32-k-nd":
//     '<img src="https://i.ibb.co/hM5YVyb/12-goldenpp.png" alt="12-goldenpp" style="height:16px;width:16px">',
//   //member 2 year
//   "https://yt3.ggpht.com/IJi2sP8aHFPN6iCbBPzRgu54MKttJyG39knrNOKfop90WkLcO-BegRNWnZ1PveuTHqPTNO16x2ne5Tw=s32-k-nd":
//     '<img src="https://i.ibb.co/wCNxtXN/24-Pomu.png" alt="24-Pomu" style="height:16px;width:16px">',
// };
const memberBadge = {
  // member 1 month
  "https://yt3.ggpht.com/Otv-LqYLhRy6jMTfXN_j8wo7dh0_UxEuAzGM8hhZLzoNdl16NRov8SqniPBUY90jnVMYlklKI0eHLLve=s32-k-nd":
    "https://i.ibb.co/jJtTw4G/1-seed.png",
  //member 2 month
  "https://yt3.ggpht.com/A4R5j7sscJWTU0NwxoUSBQm4hcVfH7De8jrukuQ_05ITM-lNx5ENqR8zm7LFQXjkmiKj7pF85iBIfklyOg=s32-k-nd":
    "https://i.ibb.co/r5K4pRf/2-sprout.png",
  //member 3 month
  "https://yt3.ggpht.com/6YYy6158MQ8Y1a05XVlQUhrXpQRz8T-T2hCOnKhnn_6ysM3JjufMVBnO6oi5rwj-HFPl8A7jqpe2d4uhaQ=s32-k-nd":
    "https://i.ibb.co/qg1DLwk/3-flower.png",
  //member 6 month
  "https://yt3.ggpht.com/gAq7jDekvG5e_Az-VnKhS-Sy-rZDgyHIdGQAhks2iWlN7rMkiTlxnW5ztMW96ynyEIG1hMe67LLLCP6q=s32-k-nd":
    "https://i.ibb.co/7bBPmkr/6-silverpp.png",
  //member 1 year
  "https://yt3.ggpht.com/8EkhzT5LZB8Y1DrCywZwPACLpgvLpFrfkfFtT4Az8za6De8tiPys0k-6tDOSqvn8mfGAz9c8oz_rr9R_=s32-k-nd":
    "https://i.ibb.co/hM5YVyb/12-goldenpp.png",
  //member 2 year
  "https://yt3.ggpht.com/IJi2sP8aHFPN6iCbBPzRgu54MKttJyG39knrNOKfop90WkLcO-BegRNWnZ1PveuTHqPTNO16x2ne5Tw=s32-k-nd":
    "https://i.ibb.co/wCNxtXN/24-Pomu.png",
};

const emotes = {
  pomubadge:
    '<img src="https://yt3.ggpht.com/hLHcCR6ZgeGGiWq7npYezynTzf6TqHxRBGHGHvk_n0zbSufNHhQmZnbm2E0KwZTjG7sAe7AlcA=s32-c-k" style="height:24px;width:24px;margin-right:2px">',
  _love:
    '<img src="https://i.ibb.co/Jv8pGj9/Love.png" alt="Love" style="height:24px;width:24px;margin-right:2px">',
  _yay: '<img src="https://i.ibb.co/L1DXfp5/yay.png" alt="yay" style="height:24px;width:24px;margin-right:2px">',
  _wow: '<img src="https://i.ibb.co/W21xJLn/wow.png" alt="wow" style="height:24px;width:24px;margin-right:2px">',
  _tiger:
    '<img src="https://i.ibb.co/qJXTQc1/tiger.png" alt="tiger" style="height:24px;width:24px;margin-right:2px">',
  _censored:
    '<img src="https://i.ibb.co/c374crj/censored.png" alt="censored" style="height:24px;width:24px;margin-right:2px">',
  _sunglass:
    '<img src="https://i.ibb.co/mbkmWTj/glass.png" alt="glass" style="height:24px;width:24px;margin-right:2px">',
  _fear:
    '<img src="https://i.ibb.co/KD1tP37/Fear.png" alt="Fear" style="height:24px;width:24px;margin-right:2px">',
  _blush:
    '<img src="https://i.ibb.co/5TPQ6Gs/blush.png" alt="blush" style="height:24px;width:24px;margin-right:2px">',
  _ppp: '<img src="https://i.ibb.co/dJWy2hh/ppp.webp" alt="ppp" style="height:24px;width:24px;margin-right:2px">',
  _cry: '<img src="https://i.ibb.co/5Wj6KLC/cry.png" alt="cry" style="height:24px;width:24px;margin-right:2px">',
  _placehold:
    '<img src="https://i.ibb.co/zVyZ6B1/placehold.webp" alt="placehold" style="height:24px;width:24px;margin-right:2px">',
  _pomudachi:
    '<img src="https://i.ibb.co/QK35zKT/pomudachi.webp" alt="pomudachi" style="height:24px;width:24px;margin-right:2px">',
  _rofl:
    '<img src="https://i.ibb.co/Jyg5Hq7/rofl.webp" alt="rofl" style="height:24px;width:24px;margin-right:2px">',
  _uuu: '<img src="https://i.ibb.co/Jymprtj/uuu.webp" alt="uuu" style="height:24px;width:24px;margin-right:2px">',
  _wave:
    '<img src="https://i.ibb.co/k6L98DC/wave.webp" alt="wave" style="height:24px;width:24px;margin-right:2px">',
  _hearthand2:
    '<img src="https://i.ibb.co/nrm28vm/hearthand2.webp" alt="hearthand2" style="height:24px;width:24px;margin-right:2px">',
  _hearthand1:
    '<img src="https://i.ibb.co/fSqNmgx/hearthand1.webp" alt="hearthand1" style="height:24px;width:24px;margin-right:2px">',
  _iii: '<img src="https://i.ibb.co/zJwwG3V/iii.webp" alt="iii" style="height:24px;width:24px;margin-right:2px">',
  _mmm: '<img src="https://i.ibb.co/cLYM4Xn/mmm.webp" alt="mmm" style="height:24px;width:24px;margin-right:2px">',
  _ooo: '<img src="https://i.ibb.co/VD5Xnks/ooo.webp" alt="ooo" style="height:24px;width:24px;margin-right:2px">',
  _penlight:
    '<img src="https://i.ibb.co/TbM7ZsB/penlight.webp" alt="penlight" style="height:24px;width:24px;margin-right:2px">',
  _otsu:
    '<img src="https://i.ibb.co/hVCB10V/otsu.webp" alt="otsu" style="height:24px;width:24px;margin-right:2px">',
  _confusion:
    '<img src="https://i.ibb.co/Ssh1hBK/confusion.webp" alt="confusion" style="height:24px;width:24px;margin-right:2px">',
  _pomdeadpan:
    '<img src="https://i.ibb.co/yp0rn5q/pomdeadpan.webp" alt="pomdeadpan" style="height:24px;width:24px;margin-right:2px">',
  _verycool:
    '<img src="https://i.ibb.co/VxQ7ggJ/verycool.webp" alt="verycool" style="height:24px;width:24px;margin-right:2px">',
  _headpat:
    '<img src="https://i.ibb.co/q7wTQQR/headpat.webp" alt="headpat" style="height:24px;width:24px;margin-right:2px">',
};

const emoteGroup = {
  _2_hearthand: emotes._hearthand1 + emotes._hearthand2,
  _2_coolOK: emotes._sunglass + emotes._verycool,
  _3_cheer_pmdc: emotes._penlight + emotes._pomudachi + emotes._penlight,
  _3_cheer_cool: emotes._penlight + emotes._sunglass + emotes._penlight,
  _3_cheer_yay: emotes._penlight + emotes._yay + emotes._penlight,
  _3_cheer_cry: emotes._penlight + emotes._cry + emotes._penlight,
  _3_otsupp: emotes._otsu + emotes._ppp + emotes._ppp,
  _6_impomu:
    emotes._iii +
    emotes._mmm +
    emotes._ppp +
    emotes._ooo +
    emotes._mmm +
    emotes._uuu,
  _7_iluvpomu:
    emotes._iii +
    emotes._hearthand1 +
    emotes._hearthand2 +
    emotes._ppp +
    emotes._ooo +
    emotes._mmm +
    emotes._uuu,
};

const mood = {
  _song_cover: [
    { item: emotes._love, weight: 7 },
    { item: emotes._tiger, weight: 3 },
    { item: emotes._placehold, weight: 3 },
    { item: emotes._yay, weight: 2 },
    { item: emotes._cry, weight: 2 },
  ],
};

//input array [{item, weight}]
function getWeightedRandomObject(array) {
  const totalWeight = array.reduce((sum, obj) => sum + obj.weight, 0);
  let randomValue = Math.random() * totalWeight;

  for (const obj of array) {
    randomValue -= obj.weight;
    if (randomValue <= 0) {
      return obj.item;
    }
  }
}

//TODO: MAKE BETTER TRIGGERS (intercept ajax?)
//1. check if the page is a youtube video
if (window.location.href.includes("www.youtube.com/watch")) {
  console.log("content manipulation is running");
  isRunning = false;
  var lolcount = 0;
  var iframe;
  var frdoc;

  // Function to be executed when an element is updated
  function handleElementUpdate() {
    //only works for pomu videos
    if (isPomu) {
      const chatlist = frdoc.querySelectorAll("#message");
      chatlist.forEach((element) => {
        var message = element.innerHTML.toLowerCase();
        if (/lo+l/i.test(message) || /lmf?ao/i.test(message)) {
          lolcount += 4;
        }
        if (!message.includes("□")) return;

        //laughing
        if (lolcount > 0) {
          lolcount -= 1;
          element.innerHTML = element.innerHTML.replaceAll(
            getWeightedRandomObject([
              { item: emotes._rofl, weight: 4 },
              { item: emotes._yay, weight: 1.5 },
              { item: emotes._confusion, weight: 0.2 },
              { item: emotes._pomdeadpan, weight: 0.3 },
            ])
          );
        }
        //i hearthand pomu
        if (message.includes("□□□□□□□")) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□□□□□□□",
            emoteGroup._7_iluvpomu
          );
        } //impomu
        else if (message.includes("□□□□□□")) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□□□□□□",
            emoteGroup._6_impomu
          );
        }
        // cool moment
        if (message.includes("gamer") || message.includes("gaming")) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            emotes._sunglass
          );
        }
        // singing

        //pkz and pp energy
        if (message.includes("kz") || /□□\s*energy/i.test(message)) {
          element.innerHTML = element.innerHTML.replaceAll(
            /□(?=.*(?:kz|energy))/gi,
            emotes._ppp
          );
        }
        //love
        if (message.includes("love")) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._love);
        } else if (
          //cry
          message.includes("miss") ||
          message.includes("last") ||
          message.includes("cry")
        ) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._cry);
          // wave
        } else if (message.includes("hi") || message.includes("bye")) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._wave);
        }
        //the rest is randomized, weights optimized for kokokara cover for now
        else {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject(mood._song_cover)
          );
        }
      });
    }
  }

  //pomu channel checker
  let intervalChannelChecker;
  intervalChannelChecker = setInterval(() => {
    var channels = Array.from(
      document.querySelectorAll("yt-formatted-string.ytd-channel-name")
    );
    if (channels.length > 0) {
      isPomu =
        channels.filter((el) => el.innerHTML.includes("@Pomu")).length > 0;
      clearInterval(intervalChannelChecker);
    }
  }, 20);

  //livechat checker
  let livechatChecker;
  livechatChecker = setInterval(() => {
    iframe = document.getElementById("chatframe");
    if (iframe) {
      frdoc = iframe.contentDocument || iframe.contentWindow.document;
      if (frdoc) {
        var chatlist = frdoc.querySelectorAll("#message");
        if (chatlist.length > 0) {
          clearInterval(livechatChecker);
        }
      }
    }
  }, 20);

  //comments checker //can be slow since comments are not constantly rushing in
  let commentsChecker = setInterval(() => {
    var content = document.querySelectorAll(
      "div.ytd-item-section-renderer#contents"
    );
    if (content.length > 0) {
      var commentsection = content[0];
      imgs = commentsection.querySelectorAll("img");
      imgs.forEach((img) => {
        if (img.src in memberBadge) {
          img.src = memberBadge[img.src];
        }
      });
      var comments = commentsection.querySelectorAll("yt-formatted-string");
      comments.forEach((el) => {
        el.innerHTML.replaceAll(
          "□",
          getWeightedRandomObject([
            { item: emotes._love, weight: 2 },
            { item: emotes._yay, weight: 1 },
            { item: emotes._headpat, weight: 1 },
            { item: emotes._sunglass, weight: 1 },
          ])
        );
      });
    }
  }, 500);

  var intId = setInterval(handleElementUpdate, 30);
}
