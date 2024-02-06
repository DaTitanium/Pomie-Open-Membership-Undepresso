// content.js
var isRunning = false;
var isPomu = false;
var isComment = false;
var isLiveChat = false;

var currentMood = "_song_cover";

const memberBadge = {
  // member 1 month
  "https://yt3.ggpht.com/Otv-LqYLhRy6jMTfXN_j8wo7dh0_UxEuAzGM8hhZLzoNdl16NRov8SqniPBUY90jnVMYlklKI0eHLLve":
    "https://i.ibb.co/jJtTw4G/1-seed.png",
  "https://yt3.ggpht.com/vqYWeHsW22q_79B5EsMe7Y6Vp1r7IB8eeV_vCVPfLL0FcgxNFha2YyXifYpkTOj3DPbiZe8ewqEk4JY":
    "https://i.ibb.co/jJtTw4G/1-seed.png",
  //member 2 month
  "https://yt3.ggpht.com/A4R5j7sscJWTU0NwxoUSBQm4hcVfH7De8jrukuQ_05ITM-lNx5ENqR8zm7LFQXjkmiKj7pF85iBIfklyOg":
    "https://i.ibb.co/r5K4pRf/2-sprout.png",
  "https://yt3.ggpht.com/YinW9wvZMsZEHXow2pR3ZeKiP2YuV6cgl6VdGsFo3tgilLJmaUEnI71KAx87Hf9-nIv1hjBO368xcwed":
    "https://i.ibb.co/r5K4pRf/2-sprout.png",
  //member 3 month
  "https://yt3.ggpht.com/6YYy6158MQ8Y1a05XVlQUhrXpQRz8T-T2hCOnKhnn_6ysM3JjufMVBnO6oi5rwj-HFPl8A7jqpe2d4uhaQ":
    "https://i.ibb.co/qg1DLwk/3-flower.png",
  "https://yt3.ggpht.com/pXR9awenP6d6R834AgGxte9GJkrUIH_JEhTQhshA55tMmthEV8smNV8GFUhqgnNAvQEaNSml5EQhIzM":
    "https://i.ibb.co/qg1DLwk/3-flower.png",
  //member 6 month
  "https://yt3.ggpht.com/gAq7jDekvG5e_Az-VnKhS-Sy-rZDgyHIdGQAhks2iWlN7rMkiTlxnW5ztMW96ynyEIG1hMe67LLLCP6q":
    "https://i.ibb.co/7bBPmkr/6-silverpp.png",
  "https://yt3.ggpht.com/qh4HyXNMbx5x0_HtQ53rpdtMdEv7OTq6hsebWwybYRlKtdYH5m6bq8kviuVZMvxAbGHWH86FV15Opfs":
    "https://i.ibb.co/7bBPmkr/6-silverpp.png",
  //member 1 year
  "https://yt3.ggpht.com/8EkhzT5LZB8Y1DrCywZwPACLpgvLpFrfkfFtT4Az8za6De8tiPys0k-6tDOSqvn8mfGAz9c8oz_rr9R_":
    "https://i.ibb.co/hM5YVyb/12-goldenpp.png",
  "https://yt3.ggpht.com/A7z3O6-V5fqP9Iqir9mCx0ZtclhD_Hd9hEt6maeUUQvkn4oZa9eL5g0c410LMJP52BnVjC7X9IgdAdQ":
    "https://i.ibb.co/hM5YVyb/12-goldenpp.png",
  //member 2 year
  "https://yt3.ggpht.com/IJi2sP8aHFPN6iCbBPzRgu54MKttJyG39knrNOKfop90WkLcO-BegRNWnZ1PveuTHqPTNO16x2ne5Tw":
    "https://i.ibb.co/wCNxtXN/24-Pomu.png",
  "https://yt3.ggpht.com/10JOq58eLyZ4iDjJF70DABY58cEy50mehcwRcOJ6d99rBqKRktWLe2voJAtIob8-PAwKISdGtJ_nHeJs":
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
  _excited:
    '<img src="https://i.ibb.co/djrPNTW/excited.webp" alt="excited" style="height:24px;width:24px;margin-right:2px">',
  _drool:
    '<img src="https://i.ibb.co/xh17DpH/drool.webp" alt="drool" style="height:24px;width:24px;margin-right:2px">',
  _sleep:
    '<img src="https://i.ibb.co/CwM5KNr/sleep.webp" alt="sleep" style="height:24px;width:24px;margin-right:2px">',
  _bonk:
    '<img src="https://i.ibb.co/0hgHpb1/bonk.webp" alt="bonk" style="height:24px;width:24px;margin-right:2px">',
  _angry:
    '<img src="https://i.ibb.co/jJNWTHh/angry.webp" alt="angry" style="height:24px;width:24px;margin-right:2px">',
  _pien:
    '<img src="https://i.ibb.co/Yf1c68N/pien.webp" alt="pien" style="height:24px;width:24px;margin-right:2px">',
  _notlikthis:
    '<img src="https://i.ibb.co/v1jZk3X/notlikthis.webp" alt="notlikthis" style="height:24px;width:24px;margin-right:2px">',
  _ded: '<img src="https://i.ibb.co/4WnS4jr/ded.webp" alt="ded" style="height:24px;width:24px;margin-right:2px">',
  _choochoo:
    '<img src="https://i.ibb.co/k6HS543/choochoo.webp" alt="choochoo" style="height:24px;width:24px;margin-right:2px">',
  _pomusuke:
    '<img src="https://i.ibb.co/GR7MV4f/pomusuke.webp" alt="pomusuke" style="height:24px;width:24px;margin-right:2px">',
  _pomusuke2:
    '<img src="https://i.ibb.co/s5dTBkx/pomusuke2.webp" alt="pomusuke2" style="height:24px;width:24px;margin-right:2px">',
  _hotdog:
    '<img src="https://i.ibb.co/SNdjwC8/hotdog.webp" alt="hotdog" style="height:24px;width:24px;margin-right:2px">',
  _small9cm:
    '<img src="https://i.ibb.co/P4cns8n/small9cm.webp" alt="small9cm" style="height:24px;width:24px;margin-right:2px">',
  _pray:
    '<img src="https://i.ibb.co/89mjwDb/pray.webp" alt="pray" style="height:24px;width:24px;margin-right:2px">',
  _sippy:
    '<img src="https://i.ibb.co/m42ZrRn/sippy.webp" alt="sippy" style="height:24px;width:24px;margin-right:2px">',
  _think:
    '<img src="https://i.ibb.co/CBdWDFg/think.webp" alt="think" style="height:24px;width:24px;margin-right:2px">',
};

const emoteGroup = {
  _2_hearthand: emotes._hearthand1 + emotes._hearthand2,
  _2_coolOK: emotes._sunglass + emotes._verycool,
  _3_cheer_pmdc: emotes._penlight + emotes._pomudachi + emotes._penlight,
  _3_cheer_cool: emotes._penlight + emotes._sunglass + emotes._penlight,
  _3_cheer_yay: emotes._penlight + emotes._yay + emotes._penlight,
  _3_cheer_cry: emotes._penlight + emotes._cry + emotes._penlight,
  _3_cheer_placehold: emotes._penlight + emotes._placehold + emotes._penlight,
  _3_cheer_love: emotes._penlight + emotes._love + emotes._penlight,
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

const moodRandomWeights = {
  _song_cover: [
    { item: emotes._love, weight: 5 },
    { item: emotes._tiger, weight: 4 },
    { item: emotes._placehold, weight: 3 },
    { item: emotes._yay, weight: 2 },
    { item: emotes._cry, weight: 1 },
  ],
  _scared: [
    { item: emotes._censored, weight: 1 },
    { item: emotes._fear, weight: 6 },
    { item: emotes._panic, weight: 3 },
    { item: emotes._pien, weight: 1 },
    { item: emotes._notlikthis, weight: 2 },
    { item: emotes._ded, weight: 1 },
  ],
  _blush: [
    { item: emotes._blush, weight: 6 },
    { item: emotes._love, weight: 1 },
    { item: emotes._drool, weight: 1 },
    { item: emotes._confusion, weight: 1 },
  ],
  _sleepy: [
    { item: emotes._sleep, weight: 5 },
    { item: emotes._drool, weight: 1 },
    { item: emotes._headpat, weight: 2 },
  ],
  _neutral: [
    { item: emotes._small9cm, weight: 1 },
    { item: emotes._pomudachi, weight: 1 },
    { item: emotes._wow, weight: 1 },
    { item: emotes._yay, weight: 2 },
    { item: emotes._love, weight: 2 },
    { item: emotes._rofl, weight: 1 },
  ],
  _angry: [
    { item: emotes._angry, weight: 3 },
    { item: emotes._bonk, weight: 1 },
    { item: emotes._pomdeadpan, weight: 1 },
  ],
  _cry: [
    { item: emotes._cry, weight: 3 },
    { item: emotes._pien, weight: 1 },
  ],
  _cool: [
    { item: emotes._sunglass, weight: 3 },
    { item: emotes._excited, weight: 2 },
    { item: emotes._verycool, weight: 0.5 },
  ],
  _huh: [
    { item: emotes._think, weight: 2 },
    { item: emotes._confusion, weight: 4 },
    { item: emotes._fear, weight: 1 },
  ],
  _hotdog: [{ item: emotes._hotdog, weight: 4 }],
  _choochoo: [{ item: emotes._choochoo, weight: 4 }],
  _cat: [
    { item: emotes._pomusuke, weight: 2 },
    { item: emotes._pomusuke2, weight: 2 },
    { item: emotes._love, weight: 1 },
  ],
};

function changeMood(newMood) {
  console.log("set mood to " + newMood);
  currentMood = newMood;
  if (!iframe) {
    iframe = document.getElementById("chatframe");
  }
  if (!frdoc) {
    frdoc = iframe.contentDocument || iframe.contentWindow.document;
  }
  if (frdoc) {
    var chatlist = frdoc.querySelectorAll("#message");
    if (chatlist.length == 0) {
      iframe = document.getElementById("chatFrame");
      frdoc = iframe.contentDocument || iframe.contentWindow.document;
    }
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "setMood") {
    changeMood(message.payload);
  }
});

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
      //badges
      const badgelist = frdoc.querySelectorAll(
        "img.yt-live-chat-author-badge-renderer"
      );
      badgelist.forEach((img) => {
        let baseSource = img.src.split("=")[0];
        if (baseSource in memberBadge) {
          img.src = memberBadge[baseSource];
          //pomu's gift in her last stream
          if (
            window.location.href.includes(
              "https://www.youtube.com/watch?v=tSm0YY70FRo"
            )
          ) {
            img.src = "https://i.ibb.co/wCNxtXN/24-Pomu.png";
          }
        }
      });

      //emotes
      const chatlist = frdoc.querySelectorAll("#message");
      lolcount = 0;
      chatlist.forEach((element) => {
        var message = element.innerHTML.toLowerCase();
        if (/lo+l/i.test(message) || /lmf?a+o/i.test(message)) {
          lolcount += 4;
        } else {
          lolcount -= 1;
          if (lolcount < 0) lolcount = 0;
        }
        if (!message.includes("□")) {
          return;
        }

        //i hearthand pomu
        if (message.includes("□□□□□□□")) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□□□□□□□",
            emoteGroup._7_iluvpomu
          );
        } //impomu
        else if (/□□\s*□□□□/.test(message)) {
          element.innerHTML = element.innerHTML.replaceAll(
            /□□\s*□□□□/g,
            emoteGroup._6_impomu
          );
        }
        // cool moment
        if (
          message.includes("gamer") ||
          message.includes("gaming") ||
          message.includes("good") ||
          message.includes("cool")
        ) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject([
              { item: emotes._sunglass, weight: 4 },
              { item: emotes._wow, weight: 1 },
              { item: emotes._excited, weight: 1.5 },
            ])
          );
        }
        //pkz and pp energy
        if (message.includes("kz") || /□□\s*energy/i.test(message)) {
          element.innerHTML = element.innerHTML.replaceAll(
            /□(?=.*(?:kz|energy))/gi,
            emotes._ppp
          );
        }
        //laughing
        if (lolcount > 0) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject([
              { item: emotes._rofl, weight: 4 },
              { item: emotes._yay, weight: 1.5 },
              { item: emotes._confusion, weight: 0.2 },
              { item: emotes._pomdeadpan, weight: 0.3 },
            ])
          );
        }
        //3 emote groups
        if (message.includes("□□□") && currentMood === "_song_cover") {
          if (Math.random() < 0.5) {
            element.innerHTML = element.innerHTML.replaceAll(
              "□□□",
              getWeightedRandomObject([
                { item: emoteGroup._3_cheer_placehold, weight: 3 },
                { item: emoteGroup._3_cheer_yay, weight: 2 },
                { item: emoteGroup._3_cheer_pmdc, weight: 2 },
                { item: emoteGroup._3_cheer_love, weight: 3 },
                { item: emoteGroup._3_cheer_cool, weight: 1 },
              ])
            );
          }
        }
        //2 emote groups
        else if (message.includes("□□")) {
          if (Math.random() < 0.4) {
            //50% chance to use emote group, leave the other 50% to single emotes randomizer
            element.innerHTML.replaceAll("□□", emoteGroup._2_coolOK);
          }
        }

        //love
        if (message.includes("love")) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._love);
        } else if (
          //cry
          message.includes("miss") ||
          message.includes("last") ||
          message.includes("cry") ||
          /we+h+/i.test(message)
        ) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject([
              { item: emotes._cry, weight: 3 },
              { item: emotes._pien, weight: 1 },
            ])
          );
          // wave
        } else if (
          /\bhi+\b/i.test(message) ||
          message.includes("bye") ||
          /see\s*y(?:a|ou)/i.test(message)
        ) {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject([
              { item: emotes._wave, weight: 3 },
              { item: emotes._pomudachi, weight: 1 },
            ])
          );
        }
        //pray
        else if (message.includes("please") || message.includes("pray")) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._pray);
        }
        //sippy
        else if (message.includes("sippy") || message.includes("drink")) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._sippy);
        }
        //the rest is randomized, weights optimized for kokokara cover for now
        else {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject(moodRandomWeights[currentMood])
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

  //comments checker //updated rarely since comments are not constantly rushing in
  let commentsChecker = setInterval(() => {
    var content = document.querySelectorAll(
      "div.ytd-item-section-renderer#contents"
    );
    if (content.length > 0) {
      var commentsection = content[0];
      imgs = commentsection.querySelectorAll("img");
      imgs.forEach((img) => {
        let baseSource = img.src.split("=")[0];
        if (baseSource in memberBadge) {
          img.src = memberBadge[baseSource];
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
