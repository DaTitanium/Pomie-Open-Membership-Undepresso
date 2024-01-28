// content.js
var isRunning = false;

const emotes = {
  pomubadge:
    '<img src="https://yt3.ggpht.com/hLHcCR6ZgeGGiWq7npYezynTzf6TqHxRBGHGHvk_n0zbSufNHhQmZnbm2E0KwZTjG7sAe7AlcA=s32-c-k" style="height:24px;width:24px;margin:2px">',
  _love:
    '<img src="https://i.ibb.co/Jv8pGj9/Love.png" alt="Love" style="height:24px;width:24px;margin:2px">',
  _yay: '<img src="https://i.ibb.co/L1DXfp5/yay.png" alt="yay" style="height:24px;width:24px;margin:2px">',
  _wow: '<img src="https://i.ibb.co/W21xJLn/wow.png" alt="wow" style="height:24px;width:24px;margin:2px">',
  _tiger:
    '<img src="https://i.ibb.co/qJXTQc1/tiger.png" alt="tiger" style="height:24px;width:24px;margin:2px">',
  _censored:
    '<img src="https://i.ibb.co/c374crj/censored.png" alt="censored" style="height:24px;width:24px;margin:2px">',
  _sunglass:
    '<img src="https://i.ibb.co/mbkmWTj/glass.png" alt="glass" style="height:24px;width:24px;margin:2px">',
  _fear:
    '<img src="https://i.ibb.co/KD1tP37/Fear.png" alt="Fear" style="height:24px;width:24px;margin:2px">',
  _blush:
    '<img src="https://i.ibb.co/5TPQ6Gs/blush.png" alt="blush" style="height:24px;width:24px;margin:2px">',
  _ppp: '<img src="https://i.ibb.co/dJWy2hh/ppp.webp" alt="ppp" style="height:24px;width:24px;margin:2px">',
  _cry: '<img src="https://i.ibb.co/5Wj6KLC/cry.png" alt="cry" style="height:24px;width:24px;margin:2px">',
  _placehold:
    '<img src="https://i.ibb.co/zVyZ6B1/placehold.webp" alt="placehold" style="height:24px;width:24px;margin:2px">',
  _pomudachi:
    '<img src="https://i.ibb.co/QK35zKT/pomudachi.webp" alt="pomudachi" style="height:24px;width:24px;margin:2px">',
  _rofl:
    '<img src="https://i.ibb.co/Jyg5Hq7/rofl.webp" alt="rofl" style="height:24px;width:24px;margin:2px">',
  _uuu: '<img src="https://i.ibb.co/Jymprtj/uuu.webp" alt="uuu" style="height:24px;width:24px;margin:2px">',
  _wave:
    '<img src="https://i.ibb.co/k6L98DC/wave.webp" alt="wave" style="height:24px;width:24px;margin:2px">',
  _hearthand2:
    '<img src="https://i.ibb.co/nrm28vm/hearthand2.webp" alt="hearthand2" style="height:24px;width:24px;margin:2px">',
  _hearthand1:
    '<img src="https://i.ibb.co/fSqNmgx/hearthand1.webp" alt="hearthand1" style="height:24px;width:24px;margin:2px">',
  _iii: '<img src="https://i.ibb.co/zJwwG3V/iii.webp" alt="iii" style="height:24px;width:24px;margin:2px">',
  _mmm: '<img src="https://i.ibb.co/cLYM4Xn/mmm.webp" alt="mmm" style="height:24px;width:24px;margin:2px">',
  _ooo: '<img src="https://i.ibb.co/VD5Xnks/ooo.webp" alt="ooo" style="height:24px;width:24px;margin:2px">',
  _penlight:
    '<img src="https://i.ibb.co/TbM7ZsB/penlight.webp" alt="penlight" style="height:24px;width:24px;margin:2px">',
  _otsu:
    '<img src="https://i.ibb.co/hVCB10V/otsu.webp" alt="otsu" style="height:24px;width:24px;margin:2px">',
  _confusion:
    '<img src="https://i.ibb.co/Ssh1hBK/confusion.webp" alt="confusion" style="height:24px;width:24px;margin:2px">',
  _pomdeadpan:
    '<img src="https://i.ibb.co/yp0rn5q/pomdeadpan.webp" alt="pomdeadpan" style="height:24px;width:24px;margin:2px">',
  _verycool:
    '<img src="https://i.ibb.co/VxQ7ggJ/verycool.webp" alt="verycool" style="height:24px;width:24px;margin:2px">',
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

{
  console.log("content manipulation is running");
  isRunning = true;
  var lolcount = 0;

  // Function to be executed when an element is updated
  function handleElementUpdate() {
    //only works for pomu videos
    if (
      Array.from(
        document.querySelectorAll("yt-formatted-string.ytd-channel-name")
      ).filter((el) => el.innerHTML.includes("@Pomu")).length > 0
    ) {
      console.log(
        Array.from(
          document.querySelectorAll("yt-formatted-string.ytd-channel-name")
        ).filter((el) => el.innerHTML.includes("@Pomu"))
      );
      var iframe = document.getElementById("chatframe");
      var frdoc = iframe.contentDocument || iframe.contentWindow.document;
      const chatlist = frdoc.querySelectorAll("#message");
      console.log("update triggered");
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
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._ppp);
        } //love
        else if (message.includes("love")) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._love);
        } else if (
          message.includes("miss") ||
          message.includes("last") ||
          message.includes("cry")
        ) {
          element.innerHTML = element.innerHTML.replaceAll("□", emotes._cry);
        } //the rest is randomized, weights optimized for kokokara cover for now
        else {
          element.innerHTML = element.innerHTML.replaceAll(
            "□",
            getWeightedRandomObject(mood._song_cover)
          );
        }
      });
    }
  }

  var intId = setInterval(handleElementUpdate, 100);

  // Options for the MutationObserver
  const observerOptions = {
    childList: true,
    subtree: true,
  };

  // Create a MutationObserver with the handleElementUpdate callback
  const observer = new MutationObserver(handleElementUpdate);

  //   window.onload = () => {
  //     var chatframes = document.getElementsByTagName("ytd-live-chat-frame");
  //     var chatframe = chatframes[0];
  //     if (!chatframe.hasAttribute("collapsed")) {
  //       console.log("chat is out");
  //       var iframe = document.getElementById("chatframe");
  //       var frdoc = iframe.contentDocument || iframe.contentWindow.document;
  //       console.log("iframe doc loaded");
  //       // Start observing the target element for changes
  //       observer.observe(frdoc, observerOptions);
  //     } else {
  //       console.log("chat is collapsed");
  //       const collapseObs = new MutationObserver((muts) => {
  //         console.log("chatframe mutation");
  //         var chatframe = document.getElementsByTagName("ytd-live-chat-frame")[0];
  //         if (!chatframe.hasAttribute("collapsed")) {
  //           var iframe = document.getElementById("chatframe");
  //           var frdoc = iframe.contentDocument || iframe.contentWindow.document;
  //           console.log("iframe doc loaded");
  //           // Start observing the target element for changes

  //           setInterval(handleElementUpdate, 300);

  //           //observer.observe(frdoc, observerOptions);
  //         }
  //       });
  //       collapseObs.observe(chatframe, { attributes: true });
  //     }
  //   };

  //   document
  //     .getElementById("stop")
  //     .addEventListener("click", () => clearInterval(intId));
}
