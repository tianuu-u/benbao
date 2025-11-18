// ===============================
// 星露谷风格 NPC 登录对话系统
// ===============================

const GIRL_NAME = "本宝";
const IMAGE_BASE = "游戏截图";

const npcDialogPool = [
  {
    id: "lewis",
    name: "刘易斯",
    title: "极度在意面子的镇长",
    portraits: {
      intro: `${IMAGE_BASE}/Lewis.png`,
      happy: `${IMAGE_BASE}/Lewis_Happy.png`,
      angry: `${IMAGE_BASE}/Lewis_Angry.png`,
      surprised: `${IMAGE_BASE}/Lewis_Happy.png`, // 使用Happy替代失败的Surprised
    },
    intro: `「咳咳！我是鹈鹕镇的镇长。今晚是一个庄重的场合，我们在庆祝 ${GIRL_NAME} 的诞辰。我正在检查宾客名单，你是哪位？」`,
    options: [
      {
        label: "我是星露谷农场的新主人，也是今天的头号保镖。",
        resultPortrait: "happy",
        result: `「很好，很好。这镇子正是因为有你和 ${GIRL_NAME} 这样的年轻人才充满活力。进去吧，别忘了给农业基金会捐款。」`,
      },
      {
        label: "镇长，我在镇子后面的灌木丛里捡到一个纯金雕像，是你丢的吗？",
        resultPortrait: "surprised",
        result: "「嘘！！！小点声！那、那是……公共财产！没错！你先进去，晚点我们私下谈谈这事。别让那个查税的听到！」",
      },
      {
        label: "我是来代表 Joja 公司收购社区中心的。",
        resultPortrait: "angry",
        result: "「什么？在这种日子提这个？我看你是想让全镇的人把你扔进海里。虽然我很生气，但今天是喜庆的日子……你最好老实点。」",
      },
    ],
  },
  {
    id: "shane",
    name: "谢恩",
    title: "厌世又傲娇的酒鬼",
    portraits: {
      intro: `${IMAGE_BASE}/Shane_and_Charlie.png`,
      happy: `${IMAGE_BASE}/Shane_Happy.png`,
      annoyed: `${IMAGE_BASE}/Shane_Annoyed.png`,
      pleased: `${IMAGE_BASE}/Shane_Pleased.png`,
      fallen: `${IMAGE_BASE}/Shane_Fallen_Down.png`,
    },
    intro: `「嗝……我不记得路了。嘿，你是 ${GIRL_NAME} 的朋友吗？你看我的 Charlie（鸡）可爱吗？」`,
    options: [
      {
        label: "Charlie 真可爱！它的羽毛很亮。",
        resultPortrait: "pleased",
        result: "「嘿嘿……你也这么觉得？好姐妹。Charlie 喜欢你。进去吧，我要带它去吃点披萨边角料。」",
      },
      {
        label: "谢恩，你是不是喝多了？醒醒！（推一下）",
        resultPortrait: "fallen",
        result: "「哎哟！……（扑通一声倒在地上）。痛痛痛……好吧，我确实喝多了。你别管我了，跨过我的身体进去吧……」",
      },
      {
        label: "我是 Joja 超市派来的，想问问你要不要加班？",
        resultPortrait: "annoyed",
        result: "「（眼神瞬间死掉）……走开。今天就算是莫里斯亲自来求我，我也不去那个灵魂监狱。别逼我把这罐啤酒泼你身上。」",
      },
    ],
  },
  {
    id: "haley",
    name: "海莉",
    title: "毒舌又爱美的校花",
    portraits: {
      intro: `${IMAGE_BASE}/Haley_Annoyed.png`,
      annoyed: `${IMAGE_BASE}/Haley_Annoyed.png`,
      happy: `${IMAGE_BASE}/Haley_Happy.png`,
      blush: `${IMAGE_BASE}/Haley_Blush.png`,
      angry: `${IMAGE_BASE}/Haley_Angry.png`,
    },
    intro: `（上下打量你）「等等。停下。你确定要穿这个进去参加 ${GIRL_NAME} 的生日派对？今晚我可是要把所有人都拍进相册的，别拉低了画面的美感。」`,
    options: [
      {
        label: "因为我知道今晚最闪亮的主角是你和本宝，我只是负责打光的绿叶。",
        resultPortrait: "happy",
        result: "「哼，算你会说话。确实，今晚的灯光很适合拍照。过来吧，我允许你在我的照片角落里露半张脸。」",
      },
      {
        label: "我觉得这身衣服挺好的啊，方便下矿。",
        resultPortrait: "angry",
        result: "「下矿？！在这个日子？天哪，你身上是不是还有泥土味？离我的裙子远一点！快进去找个角落待着！」",
      },
      {
        label: "（递上一朵铱星品质的向日葵。）",
        resultPortrait: "blush",
        result: "「哇！是向日葵！而且开得这么好……好吧，既然你这么有诚意，本小姐就带你进场吧。跟紧了！」",
      },
    ],
  },
  {
    id: "sebastian",
    name: "塞巴斯蒂安",
    title: "社恐程序员",
    portraits: {
      intro: `${IMAGE_BASE}/Sebastian_Concerned.png`,
      concerned: `${IMAGE_BASE}/Sebastian_Concerned.png`,
      happy: `${IMAGE_BASE}/Sebastian_Blush.png`,
      annoyed: `${IMAGE_BASE}/Sebastian_Annoyed.png`,
      smile: `${IMAGE_BASE}/Sebastian_Smile.png`,
    },
    intro: "「……（叹气）。我本来已经走到门口了，但是里面人太多了。我在想是进去，还是回家继续写代码。你觉得呢？」",
    options: [
      {
        label: `里面确实很吵。不如我们把 ${GIRL_NAME} 叫出来，一起去骑摩托车兜风？`,
        resultPortrait: "happy",
        result: "「呵……这个提议听起来不错。不过今天是她的主场，还是别让她缺席了。走吧，如果你在我旁边，我可能没那么尴尬。」",
      },
      {
        label: "来吧！大家都在等着看你在舞池里跳花舞节的舞呢！",
        resultPortrait: "annoyed",
        result: "「……绝不。如果有人逼我跳舞，我马上就消失。你先进去吧，我要再做十分钟的心理建设。」",
      },
      {
        label: "看！我口袋里有一只迷路的青蛙，外面太冷了，得带它进去暖和暖和。",
        resultPortrait: "smile",
        result: "「真的吗？让我看看……哇，它很可爱。好吧，为了这只小家伙，我们赶紧进去吧。别让山姆看见了。」",
      },
    ],
  },
  {
    id: "marnie",
    name: "玛妮",
    title: "总是找不到人的牧场主",
    portraits: {
      intro: `${IMAGE_BASE}/Marnie_Surprised.png`,
      happy: `${IMAGE_BASE}/Marnie_Happy.png`,
      concerned: `${IMAGE_BASE}/Marnie_Concerned.png`,
    },
    intro: `「哎呀！你吓了我一跳！我……我刚才只是在整理这边的草丛，绝对不是在等什么人！绝对不是！你是来给 ${GIRL_NAME} 过生日的吗？」`,
    options: [
      {
        label: "是的，我带了她最爱的东西来给她惊喜。",
        resultPortrait: "happy",
        result: `「太好了！这孩子平时帮了我们不少忙。快进去吧，我在蛋糕旁边留了最好的位置给你们！」`,
      },
      {
        label: "玛妮阿姨，你看到刘易斯镇长了吗？我有条紫色短裤想还给他。",
        resultPortrait: "concerned",
        result: "「（脸瞬间涨红）紫、紫色短裤？！我怎么会知道！你去问别人！快走快走，别在这里大声嚷嚷！」",
      },
      {
        label: "你的眼神在躲闪……这灌木丛里是不是藏着什么？",
        resultPortrait: "concerned",
        result: "「没、没有！只有松鼠！……哎呀你这孩子怎么好奇心这么重。快进去吃蛋糕吧，别管我了！」",
      },
    ],
  },
  {
    id: "linus",
    name: "利纳斯",
    title: "卑微又善良的流浪者",
    portraits: {
      intro: `${IMAGE_BASE}/Linus_Concerned.png`,
      happy: `${IMAGE_BASE}/Linus_Happy.png`,
    },
    intro: `「……请别扔石头。我只是……只是闻到了蛋糕的香味，想在远处悄悄对 ${GIRL_NAME} 说声生日快乐。我不会进去打扰你们的。」`,
    options: [
      {
        label: `别这么说，利纳斯。${GIRL_NAME} 说过，你是她最好的朋友之一。一起来吧。`,
        resultPortrait: "happy",
        result: "「真、真的吗？你们愿意接纳我这个老头子？……谢谢。那我就站在角落里，为她祈祷大自然的祝福。」",
      },
      {
        label: "没关系，等宴会结束了，垃圾桶里的东西都归你。",
        resultPortrait: "intro",
        result: "「虽然听起来有点怪……但这确实是一份大礼。谢谢你的慷慨，年轻的农夫。祝你们今晚玩得开心。」",
      },
      {
        label: "我是来向你请教怎么做‘生鱼片’的。",
        resultPortrait: "happy",
        result: "「哈哈！原来是同道中人。进去吧，享受美食。如果你在桌上看到剩下的鱼，记得帮我留着。」",
      },
    ],
  },
  {
    id: "emily",
    name: "艾米丽",
    title: "神叨叨的裁缝",
    portraits: {
      intro: `${IMAGE_BASE}/Emily_Happy.png`,
      happy: `${IMAGE_BASE}/Emily_Happy.png`,
      concerned: `${IMAGE_BASE}/Emily_Concerned.png`,
      neutral: `${IMAGE_BASE}/Emily_Neutral.png`,
    },
    intro: "（闭着眼睛跳舞）「我感觉到了……一股极其强烈的粉色能量正在接近！是你吗？还是那只鹦鹉又飞回来了？」",
    options: [
      {
        label: `是我是我！我带来了 ${GIRL_NAME} 专属的生日能量波！`,
        resultPortrait: "happy",
        result: "「我就知道！你的光环简直亮得刺眼！快进去吧，今晚的星相显示，这会是全宇宙最棒的派对！」",
      },
      {
        label: "我只是来送礼物的，但我不知道她喜不喜欢布料。",
        resultPortrait: "neutral",
        result: "「布料？那是织造梦想的材料！别担心，只要是有爱意的礼物，都会发出金色的光芒。我看好你哦！」",
      },
      {
        label: "其实我是帮克林特来送信的……",
        resultPortrait: "concerned",
        result: "「克林特？那个铁匠？他怎么总是不自己来？……算了，今天的主角不是他。你快进去吧，别让寿星等急了！」",
      },
    ],
  },
  {
    id: "alex",
    name: "亚历克斯",
    title: "想要显摆的铁憨憨",
    portraits: {
      intro: `${IMAGE_BASE}/Alex_Gridball.png`,
      happy: `${IMAGE_BASE}/Alex_Happy.png`,
      annoyed: `${IMAGE_BASE}/Alex_Annoyed.png`,
    },
    intro: `「嘿！你也是来参加派对的？我正在这里练习深蹲，好让等会儿出场的时候肌肉线条更完美。你觉得 ${GIRL_NAME} 会注意到我的二头肌吗？」`,
    options: [
      {
        label: "绝对会！你就是全鹈鹕镇最壮的男人。",
        resultPortrait: "happy",
        result: "「哈哈！我就知道！你也很有眼光。走吧，我们要成为派对上最耀眼的两个星！」",
      },
      {
        label: "得了吧，她今天只会在意蛋糕和礼物。",
        resultPortrait: "annoyed",
        result: "「切，你懂什么。真正的强者连吃蛋糕都在锻炼咬肌。……不过你说得对，我得去看看有没有牛排吃。」",
      },
      {
        label: "我是来看你家狗（达斯蒂）的，它好吗？",
        resultPortrait: "happy",
        result: "「达斯蒂？它好着呢！刚才还吃了一块烤肉。既然你是爱狗人士，那你肯定是个好人。进去吧兄弟！」",
      },
    ],
  },
  {
    id: "penny",
    name: "潘妮",
    title: "喜欢读书的温婉教师",
    portraits: {
      intro: `${IMAGE_BASE}/Penny.png`,
      happy: `${IMAGE_BASE}/Penny_Happy.png`,
      concerned: `${IMAGE_BASE}/Penny_Concerned.png`,
      blush: `${IMAGE_BASE}/Penny_Blush.png`,
      annoyed: `${IMAGE_BASE}/Penny_Annoyed.png`,
    },
    intro: `（手里拿着一本书，轻轻合上）「啊……不好意思，我刚才读得太入迷了。这里有点吵，我正想找个安静的角落给文森特和贾斯备课。你是 ${GIRL_NAME} 的朋友吗？」`,
    options: [
      {
        label: "是的！我还听说你最喜欢罂粟籽松饼，今晚特意为你准备了。",
        resultPortrait: "blush",
        result: `「（脸红了）真的吗？那是……我最喜欢的。你真贴心，难怪 ${GIRL_NAME} 经常提起你。那我们一起进去吧。」`,
      },
      {
        label: "嘿！要不要先喝一杯淡啤酒热热身？",
        resultPortrait: "annoyed",
        result: "「……不了，谢谢。我不喜欢酒精的味道。你知道的，我家里已经有太多那种瓶子了。我……我先去那边看看孩子们。」",
      },
      {
        label: "我想去陪文森特和贾斯玩一会儿，你要一起吗？",
        resultPortrait: "happy",
        result: "「那太好了！他们刚才还在找人一起玩捉迷藏。你真是个温柔的人，星露谷需要更多像你这样的居民。」",
      },
    ],
  },
  {
    id: "pam",
    name: "帕姆",
    title: "豪爽的巴士司机",
    portraits: {
      intro: `${IMAGE_BASE}/Pam_Annoyed.png`,
      happy: `${IMAGE_BASE}/Pam_Happy.png`,
      concerned: `${IMAGE_BASE}/Pam_Concerned.png`,
      neutral: `${IMAGE_BASE}/Pam_Neutral.png`,
    },
    intro: `「嗝——！嘿，新来的！看见格斯了吗？我的酒杯空了半天了！今天是 ${GIRL_NAME} 的生日对吧？只要有免费的酒，我就祝她长命百岁！」`,
    options: [
      {
        label: "格斯在忙，但我这儿有一瓶刚酿好的淡啤酒，归你了。",
        resultPortrait: "happy",
        result: `「哈哈！我就知道我看人很准！你是我的新好朋友了！来来来，咱们进去干杯！为了 ${GIRL_NAME}！干杯！」`,
      },
      {
        label: "帕姆，明天早上的巴士几点发车？我要去沙漠。",
        resultPortrait: "annoyed",
        result: "「现在是派对时间，别跟我提工作！只要我今晚没喝趴下，明早十点……大概吧。别挡路，我要去找酒了。」",
      },
      {
        label: "潘妮在找你，她说让你少喝点。",
        resultPortrait: "concerned",
        result: "「唉……那孩子就是爱操心。行了行了，我知道了。我会……尽量少喝一杯的。进去吧，别跟她说我在哪。」",
      },
    ],
  },
  {
    id: "clint",
    name: "克林特",
    title: "总是倒霉的铁匠",
    portraits: {
      intro: `${IMAGE_BASE}/Clint_Dress_Up.png`,
      concerned: `${IMAGE_BASE}/Clint_Dress_Up.png`, // 使用Dress_Up替代失败的Concerned
      annoyed: `${IMAGE_BASE}/Clint_Annoyed.png`,
      happy: `${IMAGE_BASE}/Clint_Happy.png`,
      jojaCola: `${IMAGE_BASE}/Clint_Joja_Cola.png`,
    },
    intro: `「呼……我在镜子前练习了三个小时。今天是 ${GIRL_NAME} 的生日，Emily 肯定在里面。给我个建议。」`,
    options: [
      {
        label: "你这身衣服帅呆了，直接进去邀请她跳舞！",
        resultPortrait: "happy",
        result: "「真的吗？……好吧！我是最好的铁匠！我要上了！祝我好运！」",
      },
      {
        label: "别紧张，先喝口饮料冷静一下。",
        resultPortrait: "jojaCola",
        result: "「你说得对。（拿出一罐蓝色的东西）。咕嘟咕嘟……呃，这是 Joja 可乐？味道像生锈的铁……不过我感觉冷静多了。」",
      },
      {
        label: "艾米丽刚才好像在跟谢恩跳舞。",
        resultPortrait: "annoyed",
        result: "「（脸色发青）什么？！我就知道……我还是回去砸我的晶球吧。这种热闹果然不属于我……祝你们玩得开心……」",
      },
    ],
  },
  {
    id: "pierre",
    name: "皮埃尔",
    title: "精明的杂货店老板",
    portraits: {
      intro: `${IMAGE_BASE}/Pierre.png`,
      happy: `${IMAGE_BASE}/Pierre_Happy.png`,
      annoyed: `${IMAGE_BASE}/Pierre_Annoyed.png`,
      surprised: `${IMAGE_BASE}/Pierre_Surprised.png`,
    },
    intro: "「欢迎！哦不，我是说，你好。职业病，职业病。今晚是个大日子，我特意关店门早了一点。你说，如果在派对现场摆个‘种子促销摊位’，大家会买账吗？」",
    options: [
      {
        label: "肯定会！只要你卖的是高品质的红叶卷心菜种子。",
        resultPortrait: "happy",
        result: "「好眼光！看来你是个懂行的农夫。只要你不去那个蓝色的超市买东西，我们就是朋友。进去吧，别客气！」",
      },
      {
        label: "皮埃尔，我在你的书架后面找到了一个‘秘密存折’……",
        resultPortrait: "surprised",
        result: "「（大惊失色）嘘！！！小声点！卡洛琳就在附近！那、那只是我的……备用进货资金！快进去，这件事我们要烂在肚子里！」",
      },
      {
        label: "我看Joja超市今天的可乐打折，比你便宜。",
        resultPortrait: "annoyed",
        result: "「那个莫里斯……总有一天我要在广场上跟他决斗！哼，便宜没好货！你会后悔的！现在，请让开。」",
      },
    ],
  },
  {
    id: "abigail",
    name: "阿比盖尔",
    title: "吃矿石的冒险家",
    portraits: {
      intro: `${IMAGE_BASE}/Abigail.png`,
      happy: `${IMAGE_BASE}/Abigail_Happy.png`,
      tease: `${IMAGE_BASE}/Abigail_Happy.png`, // 使用Happy替代失败的Blink
    },
    intro: `「嘘——小声点！我刚才好像在灌木丛里看到了一个小影子……算了。你也感觉到了吗？今晚这里的灵力场很特别。你是来给 ${GIRL_NAME} 庆祝的？」`,
    options: [
      {
        label: "我刚从骷髅洞穴回来，带了这个（递上一块紫水晶）。",
        resultPortrait: "happy",
        result: "「哇！这是紫水晶！看起来……（咔嚓咬了一口）……嗯，嘎嘣脆！味道好极了！谢啦！快进去吧，我们一起去吓吓塞巴斯蒂安。」",
      },
      {
        label: "我是来找你联机打《草原之王》的。",
        resultPortrait: "happy",
        result: `「真的？这镇上终于有个能跟我配合的人了！不过今晚不行，今晚我们要专心给 ${GIRL_NAME} 庆祝。明天再战！」`,
      },
      {
        label: "你说……幽灵会喜欢吃蛋糕吗？",
        resultPortrait: "tease",
        result: "「哈哈！你这个想法很酷。我觉得会。也许我们该切一块放在那边的角落里……走，我们去试试。」",
      },
    ],
  },
  {
    id: "sam",
    name: "山姆",
    title: "阳光滑板少年",
    portraits: {
      intro: `${IMAGE_BASE}/Sam.png`,
      happy: `${IMAGE_BASE}/Sam.png`, // 使用基础图片替代失败的Happy
      surprised: `${IMAGE_BASE}/Sam.png`, // 使用基础图片替代失败的Concerned
    },
    intro: `「哟！刚才那个kickflip你看见了吗？差点就落地成功了！嘿嘿。今天是 ${GIRL_NAME} 的大日子，塞巴斯蒂安和阿比盖尔都在里面了，你也来加入乐队吗？」`,
    options: [
      {
        label: "我没带乐器，但我带了这个（Joja可乐不算，是披萨）。",
        resultPortrait: "happy",
        result: `「喔喔喔！是披萨！刚出炉的！你简直是我的救星。我对 ${GIRL_NAME} 的祝福都在这块披萨里了……虽然我会吃掉它。快进！」`,
      },
      {
        label: "山姆，你刚才是不是又在花坛上玩滑板了？刘易斯在看你。",
        resultPortrait: "surprised",
        result: "「什么？！老头子看见了？……谢了兄弟！我得赶紧混进人群里躲一躲。你帮我打掩护！」",
      },
      {
        label: "你的发型用了多少发胶？真的很挺。",
        resultPortrait: "happy",
        result: "「哈哈，这是商业机密！大概……也就半瓶吧？为了派对必须要帅一点嘛。进去吧，别碰乱了我的头发！」",
      },
    ],
  },
  {
    id: "grandpa",
    name: "爷爷",
    title: "慈祥的灵魂",
    portraits: {
      intro: `${IMAGE_BASE}/Grandpa.png`,
      speaking: `${IMAGE_BASE}/Grandpa_Speaking.png`,
    },
    intro: "（半透明地飘浮着）「……我的孙子……没想到你也把这个农场经营得这么好了。今天是个特别的日子，我感觉得到，连这里的精灵都在欢庆。你是来见那个重要的人吗？」",
    options: [
      {
        label: "爷爷你看！我已经点亮了所有四根蜡烛！",
        resultPortrait: "speaking",
        result: `「我为你感到骄傲。不仅仅是因为农场，更是因为你在这里建立的羁绊。那个女孩……她是个好孩子。去吧，去庆祝吧。」`,
      },
      {
        label: "比起赚钱，我更想把这个山谷最美好的一切都送给她。",
        resultPortrait: "speaking",
        result: "「这才是生活的真谛。我当年离开城市来到这里，寻找的就是这种感觉。看来你已经找到了属于你的‘星之果实’。」",
      },
      {
        label: "这床太硬了，我的背好痛。",
        resultPortrait: "intro",
        result: "「哈哈……那是当然的。那是给你锻炼用的。别抱怨了，快进去吧，别让活人的时间浪费在跟我这个老头子聊天上。」",
      },
    ],
  },
  {
    id: "wizard",
    name: "法师",
    title: "神秘的森林隐士",
    portraits: {
      intro: `${IMAGE_BASE}/Wizard.png`,
      happy: `${IMAGE_BASE}/Wizard.png`,
      surprised: `${IMAGE_BASE}/Wizard_Surprised.png`,
      annoyed: `${IMAGE_BASE}/Wizard_Surprised.png`,
    },
    intro: "「……（低沉的声音）我并不常离开我的塔楼。但我感应到今晚这里的奥术能量波动异常强烈……那是名为‘幸福’的魔法。凡人，你是这股能量的来源吗？」",
    options: [
      {
        label: `是的，我想用这股能量为 ${GIRL_NAME} 施一个永久幸运的咒语。`,
        resultPortrait: "happy",
        result: "「很好的愿望。森林的元素之灵已经听到了你的请求。去吧，祝尼魔们会在角落里为你们起舞的。」",
      },
      {
        label: "其实我是来问问……你觉得阿比盖尔的发色为什么是紫色的？",
        resultPortrait: "annoyed",
        result: "「……有些秘密最好永远埋藏在虚空之中。如果你不想变成一只青蛙，就闭上嘴，乖乖进去吃蛋糕。」",
      },
      {
        label: "要来点虚空蛋黄酱吗？",
        resultPortrait: "happy",
        result: "「那个味道……真是令人怀念。你很懂行嘛。好吧，既然你是个有品味的凡人，我允许你通过。」",
      },
    ],
  },
  {
    id: "junimo",
    name: "祝尼魔",
    title: "森林里的小精灵",
    portraits: {
      intro: `${IMAGE_BASE}/Junimo_Icon.png`,
      happy: `${IMAGE_BASE}/Junimo_Icon.png`,
    },
    intro: "「We... we saw... shiny things... and cakes...」",
    options: [
      {
        label: "（跟着一起跳了一小段 Junimo 舞。）",
        resultPortrait: "happy",
        result: `「Dance! Dance! For ${GIRL_NAME}!」小精灵们绕着你和本宝的名字跳成了一个圈。`,
      },
      {
        label: "把一颗宝石放到它手里。",
        resultPortrait: "happy",
        result: `「Shiny! For ${GIRL_NAME}!」它抱着宝石一阵乱蹦，然后指向广场的方向。`,
      },
      {
        label: "轻声说：谢谢你们偷偷帮我布置了这里。",
        resultPortrait: "happy",
        result: "Junimo 们发出一串叮当声：「Friend... friend...」然后把你往派对的方向推。",
      },
    ],
  },
  {
    id: "diandian",
    name: "点点",
    title: "最忠诚的小伙伴",
    portraits: {
      intro: "游戏截图/Dog_4.png",
      happy: "游戏截图/Dog_4.png",
      wagging: "游戏截图/Dog_4.png",
    },
    intro: `（摇着尾巴，眼睛亮晶晶地看着你）「汪汪！你终于来了！${GIRL_NAME} 一直在等你呢！我闻到了蛋糕的香味，还有好多好多朋友！你要和我一起进去吗？」`,
    options: [
      {
        label: "当然！点点，我们一起给本宝过生日吧！",
        resultPortrait: "happy",
        result: `「汪汪汪！（兴奋地转圈）太好了！我知道 ${GIRL_NAME} 看到你一定会超级开心的！快跟我来，我带你去找她！蛋糕在那边，我闻到了！」`,
      },
      {
        label: "（蹲下来摸摸点点的头）点点真乖，今晚要保护好本宝哦。",
        resultPortrait: "wagging",
        result: `「（尾巴摇得更快了）汪汪！放心吧！我会一直守在 ${GIRL_NAME} 身边的！谁要是敢欺负她，我就……我就用最可爱的眼神瞪他们！走吧，我们一起去庆祝！」`,
      },
      {
        label: "点点，你今晚有没有偷偷吃蛋糕？",
        resultPortrait: "happy",
        result: "「（心虚地移开视线）……汪？没有哇！我只是……闻了闻！真的！不过如果你给我一小块的话……（眼睛闪闪发光）我会更开心的！走吧走吧，我们快进去！」",
      },
    ],
  },
  {
    id: "hatmouse",
    name: "波克老鼠",
    title: "呆萌的神秘商贩",
    portraits: {
      intro: `${IMAGE_BASE}/Abandoned_House_Icon.png`,
      happy: `${IMAGE_BASE}/Hat_Shop_ZH.png`,
      poke: `${IMAGE_BASE}/Hat_Shop_ZH.png`,
    },
    intro: `「嗨。波克。窝是老鼠。窝平时在森林卖帽子。但今天……窝闻到了蛋糕味。这是 笨堡 的生日派对吗？波克。」`,
    options: [
      {
        label: "是的！泥要来顶生日帽吗？窝给泥'金闭'。",
        resultPortrait: "happy",
        result: `「金闭？今天不要金闭。今天免费。给 笨包 戴上嘴漂亮的蝴蝶节。好东西。进去吧。波克。」`,
      },
      {
        label: "波克。 (Poke.)",
        resultPortrait: "poke",
        result: "「（耳朵动了一下）波克！泥懂老鼠语。泥是豪朋友。快进去。里面有好多好吃的。记得给窝留点渣渣。波克。」",
      },
      {
        label: "你的旧屋子住得还习惯吗？",
        resultPortrait: "intro",
        result: "「屋子好。墙上友洞。风吹近来，凉筷。补说了，镇长在看窝。窝要躲起来了。泥野快进去。波克。」",
      },
    ],
  },
];

// 添加更多NPC
npcDialogPool.push(
  {
    id: "evelyn",
    name: "伊芙琳",
    title: "慈祥的奶奶",
    portraits: {
      intro: `${IMAGE_BASE}/Evelyn.png`,
      happy: `${IMAGE_BASE}/Evelyn_Happy.png`,
      neutral: `${IMAGE_BASE}/Evelyn_Neutral.png`,
      concerned: `${IMAGE_BASE}/Evelyn_Concerned.png`,
    },
    intro: `「哎哟，你好呀，亲爱的。乔治他不肯出门，在家里看电视呢。所以我做了些饼干带过来。你能帮我看看 ${GIRL_NAME} 在哪吗？我想把这一篮子送给她。」`,
    options: [
      {
        label: "奶奶，您种的郁金香是镇上最漂亮的风景。",
        resultPortrait: "happy",
        result: "「呵呵呵，你嘴真甜。听到你这么说，我这把老骨头都觉得年轻了几岁。快去拿块饼干吃吧，刚烤好的。」",
      },
      {
        label: "篮子太重了，我帮您提进去吧。",
        resultPortrait: "happy",
        result: "「多懂事的孩子啊。就像我想象中的孙子一样。谢谢你，愿尤巴保佑你和今天的寿星。」",
      },
      {
        label: "乔治爷爷又在抱怨电视节目了吗？",
        resultPortrait: "neutral",
        result: `「是啊，他总是有操不完的心。不过我知道，他其实也很想对 ${GIRL_NAME} 说声生日快乐。我们进去吧。」`,
      },
    ],
  },
  {
    id: "vincent",
    name: "文森特",
    title: "爱玩的小男孩",
    portraits: {
      intro: `${IMAGE_BASE}/Vincent.png`,
      happy: `${IMAGE_BASE}/Vincent_Happy.png`,
      concerned: `${IMAGE_BASE}/Vincent_Concerned.png`,
      neutral: `${IMAGE_BASE}/Vincent_Neutral.png`,
    },
    intro: `（跑来跑去）「呼……呼……我都跑累了！山姆哥哥说今天有大蛋糕吃！你是谁？你也是来吃蛋糕的吗？」`,
    options: [
      {
        label: "我是来找你抓虫子的！我知道哪里有从土里钻出来的大葱。",
        resultPortrait: "happy",
        result: "「真的吗？！太酷了！潘妮老师从来不教这个！快进来，等吃完蛋糕我们就去探险！」",
      },
      {
        label: "（递给他一颗葡萄）",
        resultPortrait: "happy",
        result: `「哇！是葡萄！这是我最喜欢的礼物！谢谢你！我会告诉 ${GIRL_NAME} 你是个超级好人！」`,
      },
      {
        label: "文森特，你的作业写完了吗？",
        resultPortrait: "concerned",
        result: "「……（撇嘴）你说话怎么像潘妮老师一样。真没劲。我不跟你玩了，我要去找茉莉。」",
      },
    ],
  },
  {
    id: "governor",
    name: "州长",
    title: "严厉的美食家",
    portraits: {
      intro: `${IMAGE_BASE}/Governor.png`,
      neutral: `${IMAGE_BASE}/Governor_Neutral.png`,
      sick: `${IMAGE_BASE}/Governor_Sick.png`,
    },
    intro: `「嗯……我是来品尝生日宴会的汤的。希望这里的味道能符合我的身份。你带来了什么配料？」`,
    options: [
      {
        label: "放入一条金星品质的鲟鱼。",
        resultPortrait: "neutral",
        result: `「嗯……这味道！太鲜美了！我对 ${GIRL_NAME} 的品味刮目相看。进去吧！」`,
      },
      {
        label: "放入一条紫色的短裤（刘易斯的）。",
        resultPortrait: "sick",
        result: "「（脸色发紫）唔！！……咳咳咳！这是什么味道？！一股……官僚主义的酸臭味！呕——！我要给这个镇子差评！！」",
      },
      {
        label: "欢迎来到鹈鹕镇，州长先生。",
        resultPortrait: "neutral",
        result: "「嗯。希望你们的待客之道和你们的税收一样准时。带路吧。」",
      },
    ],
  },
  {
    id: "jas",
    name: "贾斯",
    title: "害羞的跳绳女孩",
    portraits: {
      intro: `${IMAGE_BASE}/Jas_Concerned.png`,
      happy: `${IMAGE_BASE}/Jas_Happy.png`,
      concerned: `${IMAGE_BASE}/Jas_Concerned.png`,
    },
    intro: `「（躲在树后面探出头）……你是陌生人吗？玛妮阿姨说，不能随便跟陌生人说话。除非……除非你是来给 ${GIRL_NAME} 姐姐过生日的。」`,
    options: [
      {
        label: "别怕，我看你一直在跳绳，你跳得真好！想吃粉红蛋糕吗？",
        resultPortrait: "happy",
        result: "「（眼睛亮了）粉红蛋糕？！……那是贾斯最喜欢的！那你一定是好人。快进来吧，文森特在里面等我呢。」",
      },
      {
        label: "你的那个娃娃很可爱，它叫什么名字？",
        resultPortrait: "happy",
        result: "「这是我最好的朋友……你也喜欢娃娃吗？那我带你去看爷爷以前留下的那个大房子里的玩具屋吧！」",
      },
      {
        label: "我刚才在河边抓了一只小龙虾，送给你。",
        resultPortrait: "concerned",
        result: "「（吓得后退）噫！……它有钳子！它会夹手的！你……你别过来！我要去告诉谢恩叔叔！」",
      },
    ],
  },
  {
    id: "marlon",
    name: "马龙",
    title: "冒险家公会的独眼老兵",
    portraits: {
      intro: `${IMAGE_BASE}/Marlon.png`,
    },
    intro: `「站住。我看你的步法，不像是来这儿猎杀怪物的。前面的区域虽然是派对，但也可能混进史莱姆。你带武器了吗？」`,
    options: [
      {
        label: `我手里虽然没有银河剑，但我有一颗守护 ${GIRL_NAME} 的心。`,
        resultPortrait: "intro",
        result: "「……哼，虽然听起来肉麻，但确实是最强的护盾。看来你也是个合格的战士。进去吧，我会守住后门的。」",
      },
      {
        label: "其实……我在农场里养了几百只史莱姆，它们很可爱。",
        resultPortrait: "intro",
        result: "「你是个疯子吗？在农场里养那种东西……不过，只要你没把它们带到派对上来就行。我不希望今晚的蛋糕变成绿色。」",
      },
      {
        label: "马龙先生，那边那个叫玛妮的女士好像一直在看你。",
        resultPortrait: "intro",
        result: "「（独眼突然睁大）咳咳！你说什么？玛妮她……咳！这不是我们需要讨论的战斗话题！……我发型没乱吧？」",
      },
    ],
  },
  {
    id: "gunther",
    name: "君特",
    title: "总是想要捐赠品的馆长",
    portraits: {
      intro: `${IMAGE_BASE}/Gunther.png`,
    },
    intro: `「你好！我看你的口袋鼓鼓的，难道是挖掘到了什么新的古物？还是从晶球里开出了矿石？……哦，等等，今天是 ${GIRL_NAME} 的生日对吧？」`,
    options: [
      {
        label: `我没有什么古物，但我把这里最珍贵的宝藏——${GIRL_NAME} 带来了。`,
        resultPortrait: "intro",
        result: "「哇哦……这件展品可是无价之宝，而且无法捐赠给博物馆。请务必好好保管她。进去吧，别让这颗‘宝石’蒙尘。」",
      },
      {
        label: "君特，你终于肯走出那个柜台了吗？",
        resultPortrait: "intro",
        result: "「我也需要休息啊！而且，我也想来看看大家。别说得好像我是长在博物馆地板上的一样……虽然我确实很少出来。」",
      },
      {
        label: "给你这个（递上一包古代种子）。",
        resultPortrait: "intro",
        result: "「天哪！这是……这可是失传已久的古代种子！你竟然把它送给我？太棒了！作为回报，你快进去享受派对吧！」",
      },
    ],
  },
  {
    id: "willy",
    name: "威利",
    title: "老练的渔夫",
    portraits: {
      intro: `${IMAGE_BASE}/Willy.png`,
      happy: `${IMAGE_BASE}/Willy_Happy.png`,
      neutral: `${IMAGE_BASE}/Willy.png`,
    },
    intro: `「哎呀，这海风的味道……哦不，这是奶油的味道。你好啊，孩子！今晚是个好日子，连海里的鱼都跳得比平时欢。你是来给 ${GIRL_NAME} 庆祝的吗？」`,
    options: [
      {
        label: "威利，我刚才钓到了一条传说之鱼！",
        resultPortrait: "happy",
        result: `「哈哈！好样的新人！那是真正的渔夫才有的本事。快进去跟大伙吹嘘一下吧，别忘了给 ${GIRL_NAME} 留块鱼排！」`,
      },
      {
        label: "我看你帽子上好像夹了一只螃蟹……",
        resultPortrait: "neutral",
        result: "「什么？哦……这小家伙是我的老伙计了。它也想来凑凑热闹。怎么，你没见过带着宠物参加派对的吗？」",
      },
      {
        label: "晚上好，船长。",
        resultPortrait: "happy",
        result: "「晚上好，水手。在这个港湾（派对）里，不用担心风浪。去享受宁静的时光吧。」",
      },
    ],
  },
  {
    id: "gus",
    name: "格斯",
    title: "热情的酒吧老板",
    portraits: {
      intro: `${IMAGE_BASE}/Gus.png`,
      happy: `${IMAGE_BASE}/Gus_Happy.png`,
    },
    intro: `「欢迎！欢迎！每个人都是我的客人！今晚的菜单是特制的——生存汉堡、粉红蛋糕，还有意面！哎呀，我忙得团团转，你是来帮忙上菜的吗？」`,
    options: [
      {
        label: `我是来负责让 ${GIRL_NAME} 把盘子里的东西都吃光的。`,
        resultPortrait: "happy",
        result: "「哈哈！那可是个艰巨的任务，因为我准备的分量可是超级加倍的！快进去吧，别让热菜凉了！」",
      },
      {
        label: "格斯，帕姆说她的酒钱记在我的账上……",
        resultPortrait: "happy",
        result: "「哦，你真是个慷慨的人。帕姆的账单……嗯……那可是一笔不小的数目。不过为了庆祝生日，今晚全场我请客！进去尽情吃吧！」",
      },
      {
        label: "给我来一杯‘星之果实’特饮。",
        resultPortrait: "happy",
        result: `「嘘……那是隐藏菜单。不过看在你对 ${GIRL_NAME} 一片真心的份上，我会悄悄给你留一杯的。那是爱的味道。」`,
      },
    ],
  },
  {
    id: "harvey",
    name: "哈维",
    title: "焦虑的医生",
    portraits: {
      intro: `${IMAGE_BASE}/Harvey.png`,
      happy: `${IMAGE_BASE}/Harvey_Happy.png`,
      concerned: `${IMAGE_BASE}/Harvey_Concerned.png`,
      surprised: `${IMAGE_BASE}/Harvey_Surprised.png`,
    },
    intro: "「（推眼镜）呼……刚才差点被文森特撞倒。这里的人群密度太高了，很容易传播流感病毒。咳咳，你是来参加派对的吗？你看起来……面色红润，应该很健康。」",
    options: [
      {
        label: "哈维医生，我给你带了特浓咖啡，还有腌菜。",
        resultPortrait: "happy",
        result: "「（眼睛放光）哦！这是……这是完美的抗氧化组合！太感谢了。这会让我的神经放松很多。那我……我就破例进去待一会儿吧。」",
      },
      {
        label: "放心吧医生，我进门前洗手了，洗了20秒。",
        resultPortrait: "happy",
        result: "「太棒了！这才是负责任的表现！如果大家都有你的卫生意识，诊所就不用那么忙了。请进，请进！」",
      },
      {
        label: "我觉得有点头晕，好像吃坏了肚子……",
        resultPortrait: "surprised",
        result: `「（大惊失色）什么？！紧急情况！大家让开！……等等，今天是 ${GIRL_NAME} 的生日，我没带听诊器……你、你先找个通风的地方坐下！」`,
      },
    ],
  },
  {
    id: "maru",
    name: "玛鲁",
    title: "天才发明家",
    portraits: {
      intro: `${IMAGE_BASE}/Maru.png`,
      happy: `${IMAGE_BASE}/Maru_Happy.png`,
      concerned: `${IMAGE_BASE}/Maru_Concerned.png`,
    },
    intro: `「你好！正在校准传感器……哔——校准完毕。今晚的派对简直是个完美的实验场！我想测试一下我的新机器人‘MarILDA’能不能自动切蛋糕。你是来协助实验的吗？」`,
    options: [
      {
        label: "当然！我甚至带了电池组和金锭。",
        resultPortrait: "happy",
        result: `「天哪！这些材料简直太完美了！我们一定要找时间聊聊电路图。快进去吧，${GIRL_NAME} 一定等不及要看我的新发明了。」`,
      },
      {
        label: "如果我进去，你爸爸不会躲在后面观察我吧？",
        resultPortrait: "concerned",
        result: "「呃……（往后看了一眼）应该不会。我已经把他的笔记本电脑藏起来了。放心吧，今晚是自由时间！我们走！」",
      },
      {
        label: "今晚的星空很美，适合用望远镜观察。",
        resultPortrait: "happy",
        result: "「你也喜欢天文学？太棒了！等派对结束，我们可以一起去山顶看一看。但现在，我们要先去点亮地上的星星（指蜡烛）。」",
      },
    ],
  },
  {
    id: "elliott",
    name: "艾利欧特",
    title: "浪漫的长发诗人",
    portraits: {
      intro: `${IMAGE_BASE}/Elliott.png`,
      happy: `${IMAGE_BASE}/Elliott_Happy.png`,
      neutral: `${IMAGE_BASE}/Elliott_Neutral.png`,
    },
    intro: `「（撩头发）啊，又一位迷途的旅人。在这月色如水的夜晚，整个鹈鹕镇都仿佛沉浸在一种名为‘庆典’的香气中。你是来为 ${GIRL_NAME} 献上赞美诗的吗？」`,
    options: [
      {
        label: "不仅是赞美，我愿化作她生命注脚里的一枚逗号。",
        resultPortrait: "happy",
        result: `「噢！多么动人的修辞！太妙了！看来我遇到了知音。请务必进去，我想 ${GIRL_NAME} 会因为你的到来而熠熠生辉。」`,
      },
      {
        label: "我是来吃螃蟹蛋糕的。",
        resultPortrait: "neutral",
        result: "「螃蟹……啊，那种横行霸道的小生物。确实美味。只要不在我的口袋里乱爬就好。去吧，愿美食抚慰你的灵魂。」",
      },
      {
        label: "这根鸭毛是我捡到的，送你写作用。",
        resultPortrait: "happy",
        result: "「多么精致的礼物！这质感……我感觉灵感正在涌现！我决定了，下一章小说就以你为原型。请进，我的缪斯！」",
      },
    ],
  },
  {
    id: "robin",
    name: "罗宾",
    title: "充满活力的木匠",
    portraits: {
      intro: `${IMAGE_BASE}/Robin.png`,
      happy: `${IMAGE_BASE}/Robin_Happy.png`,
      annoyed: `${IMAGE_BASE}/Robin_Annoyed.png`,
    },
    intro: `「嘿！你好啊！我在检查这边的装饰柱结不结实。你知道的，我是个木匠，看到木头就忍不住想敲两下。你是来找 ${GIRL_NAME} 的吗？」`,
    options: [
      {
        label: "罗宾，我给你带了些硬木。",
        resultPortrait: "happy",
        result: "「哈！硬木？这可是好东西！你比我家那个只会研究番茄是不是水果的老公懂事多了。快进去吧，玩得开心！」",
      },
      {
        label: "德米特里厄斯又在说番茄是水果了吗？",
        resultPortrait: "annoyed",
        result: "「别提了！他刚才非要把水果沙拉里的番茄挑出来……算了，今天是高兴的日子。快进去吧，我去看看塞巴斯蒂安别躲在角落里。」",
      },
      {
        label: "我想给我的农舍扩建一下。",
        resultPortrait: "happy",
        result: `「没问题！明天去店里找我，记得带够钱和木头。但今晚不谈生意，今晚我们只负责给 ${GIRL_NAME} 唱歌！」`,
      },
    ],
  },
  {
    id: "demetrius",
    name: "德米特里厄斯",
    title: "严谨的科学家",
    portraits: {
      intro: `${IMAGE_BASE}/Demetrius_Winter_00.png`,
      happy: `${IMAGE_BASE}/Demetrius_Winter_00.png`,
      concerned: `${IMAGE_BASE}/Demetrius_Winter_01.png`,
      annoyed: `${IMAGE_BASE}/Demetrius_Winter_04.png`,
    },
    intro: `「你好。我正在观察这种叫做‘生日派对’的社会性聚集行为。根据我的数据，${GIRL_NAME} 的快乐指数正在呈指数级上升。你是一个新的变量吗？」`,
    options: [
      {
        label: "我带了草莓。它是水果，对吧？",
        resultPortrait: "happy",
        result: "「从植物学角度来说，草莓是聚合果，而番茄确实是浆果……咳咳！很高兴遇到一个讲究分类学的人。请进。」",
      },
      {
        label: "罗宾在那边叫你，好像是要你帮忙搬东西。",
        resultPortrait: "concerned",
        result: "「哦？那是体力劳动。虽然效率不如机械，但为了家庭和谐……我得去了。你自便。」",
      },
      {
        label: "我和玛鲁是好朋友。",
        resultPortrait: "annoyed",
        result: "「是吗？……（眯起眼睛）我希望这不会影响她的学业和未来。我会盯着你的。进去吧，保持距离。」",
      },
    ],
  },
  {
    id: "krobus",
    name: "科罗布斯",
    title: "下水道的影子人",
    portraits: {
      intro: `${IMAGE_BASE}/Krobus.png`,
      happy: `${IMAGE_BASE}/Krobus_Happy.png`,
      trenchcoat: `${IMAGE_BASE}/Krobus_Trenchcoat.png`,
      surprise: `${IMAGE_BASE}/Krobus_Surprise.png`,
    },
    intro: `「……人类。我想参加 ${GIRL_NAME} 的生日。但是我怕吓到大家。你觉得我该怎么做？」`,
    options: [
      {
        label: "做你自己就好！大家都很包容。",
        resultPortrait: "happy",
        result: "「真的吗？……（脸红）你真善良。那我就这样进去了。希望能交到朋友。」",
      },
      {
        label: "快！穿上这件风衣！假装你是两个叠在一起的小孩。",
        resultPortrait: "trenchcoat",
        result: "「好主意！（穿上风衣）。现在看起来怎么样？是不是像一个高大的人类？别拆穿我，我们要混进去吃蛋糕了。」",
      },
      {
        label: "你有带回程魔杖吗？我想买一根。",
        resultPortrait: "intro",
        result: "「那是很昂贵的宝物……但我今天只带了祝福。如果你真的需要，下次来下水道找我吧。现在，去享受你们人类的食物吧。」",
      },
    ],
  },
  {
    id: "george",
    name: "乔治",
    title: "暴躁但心软的爷爷",
    portraits: {
      intro: `${IMAGE_BASE}/George_Winter_00.png`,
      concerned: `${IMAGE_BASE}/George_Winter_01.png`,
    },
    intro: "「哼！这音乐太吵了！吵得我电视都听不见了！现在的年轻人就知道大吵大闹……喂，你是谁？别挡住我的轮椅。」",
    options: [
      {
        label: "乔治爷爷，伊芙琳奶奶叫你来吃蛋糕。",
        resultPortrait: "concerned",
        result: "「伊芙琳？……唉，好吧。如果是她叫我，我也没办法。推我过去吧，但我警告你，如果蛋糕太甜，我会投诉的。」",
      },
      {
        label: "给你这个，新鲜的韭葱。",
        resultPortrait: "intro",
        result: "「（表情舒展）哦？这是……这是品质很好的韭葱。哼，看来你这年轻人还算懂点规矩。谢了。我……我心情好多了。」",
      },
      {
        label: "潘妮在找你呢。",
        resultPortrait: "intro",
        result: "「那个好姑娘。我不该对她发脾气的。好吧，我去跟她打个招呼。让开，让开。」",
      },
    ],
  }
);

// ===============================
// 对话系统逻辑
// ===============================

let currentNpc = null;
let hasChosenOption = false;

function pickRandomNpc() {
  const idx = Math.floor(Math.random() * npcDialogPool.length);
  return npcDialogPool[idx];
}

function renderNpcIntro() {
  const overlay = document.getElementById("npc-login-overlay");
  if (!overlay) return;

  currentNpc = pickRandomNpc();
  hasChosenOption = false;

  const nameEl = document.getElementById("npc-login-name");
  const titleEl = document.getElementById("npc-login-title");
  const portraitEl = document.getElementById("npc-login-portrait-img");
  const textEl = document.getElementById("npc-login-dialog-text");
  const optionsWrap = document.getElementById("npc-login-options");

  nameEl.textContent = currentNpc.name;
  titleEl.textContent = currentNpc.title || "";
  portraitEl.src = currentNpc.portraits.intro;
  textEl.textContent = currentNpc.intro;

  optionsWrap.innerHTML = "";
  currentNpc.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "npc-option-btn";
    btn.textContent = `【${String.fromCharCode(65 + index)}】${opt.label}`;
    btn.addEventListener("click", () => handleNpcOptionClick(index));
    optionsWrap.appendChild(btn);
  });

  overlay.classList.remove("npc-login-hidden");
}

function handleNpcOptionClick(optionIndex) {
  if (!currentNpc || hasChosenOption) return;
  hasChosenOption = true;

  const npc = currentNpc;
  const choice = npc.options[optionIndex];

  const portraitEl = document.getElementById("npc-login-portrait-img");
  const textEl = document.getElementById("npc-login-dialog-text");
  const optionsWrap = document.getElementById("npc-login-options");

  if (typeof playSfx === "function") {
    playSfx("sfxOpen");
  }

  const key = choice.resultPortrait || "intro";
  if (npc.portraits[key]) {
    portraitEl.src = npc.portraits[key];
  }
  textEl.textContent = choice.result;

  optionsWrap.innerHTML = "";
  const enterBtn = document.createElement("button");
  enterBtn.className = "npc-option-btn npc-enter-btn";
  enterBtn.textContent = `>> 进入广场，和${GIRL_NAME}一起过生日`;
  enterBtn.addEventListener("click", closeNpcOverlay);
  optionsWrap.appendChild(enterBtn);
}

function closeNpcOverlay() {
  const overlay = document.getElementById("npc-login-overlay");
  if (!overlay) return;
  overlay.classList.add("npc-login-hidden");

  // 延迟一下，确保遮罩淡出后再显示开场动画
  setTimeout(() => {
    if (typeof window.startIntroSequence === "function") {
      window.startIntroSequence();
    } else {
      // 如果函数还没加载，等待一下再试
      setTimeout(() => {
        if (typeof window.startIntroSequence === "function") {
          window.startIntroSequence();
        } else {
          // 如果还是找不到，直接显示主页面
          document.body.classList.remove("npc-login-active");
        }
      }, 100);
    }
  }, 400);
}

window.addEventListener("load", () => {
  // 添加NPC登录状态，隐藏主页面
  document.body.classList.add("npc-login-active");
  renderNpcIntro();
});
